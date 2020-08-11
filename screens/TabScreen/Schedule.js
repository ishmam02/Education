import React ,{useState} from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, StatusBar, TouchableOpacity, Alert } from 'react-native';

import Header from '../../components/Header';
import Color from '../../constants/Color';
import ScheduleCard from '../../components/ScheduleCard';
import { Agenda } from 'react-native-calendars';

timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const Schedule = ({navigation}) => {
  const [item, setItem] = useState({
    '2020-07-24': [{ title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: 'Yes', type: 'Homework' , id: 1 }, { title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: 'No', type: 'Homework' , id: 1 }, { title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: '', type: 'Homework' , id: 1 }]
  });

  loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!item[strTime]) {
          item[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            item[strTime].push();
          }
        }
      }
      const newItems = {};
      Object.keys(item).forEach(key => {newItems[key] = item[key];});
      setItem(newItems);
    }, 1);
  }
  renderItem = (item) => {
    if(Object.keys(item).length){
      return (
        <TouchableOpacity
          style={[styles.item]} 
          activeOpacity={item.submitted === '' ? 0.5 : 0.7}
          onPress={()=> navigation.navigate('Assignment', { ...item }) }
        >
          <ScheduleCard title={item.title} subject={item.subject} date={item.date} submitted={item.submitted} type={item.type} screen='Routine' />
        </TouchableOpacity>
      );
    }
    return <></>
  }

    return (
      <SafeAreaView style={{flex: 1,backgroundColor: Color.neutral}}>
        <Header/>
          <View style={{flex: 1}}>
            <Agenda
            items={item}
            loadItemsForMonth={loadItems}
            selected={new Date()}
            renderItem={renderItem}
            pastScrollRange={12}
            futureScrollRange={12}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#43515c'},
            //    '2017-05-09': {textColor: '#43515c'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            theme={{calendarBackground: Color.neutral, 
              agendaKnobColor: Color.primary,
              dayTextColor: Color.secondary,
              backgroundColor: Color.neutral,
              agendaTodayColor: Color.primary,
              selectedDayBackgroundColor: Color.primary,
              dotColor: Color.primary,
              textDayHeaderFontFamily: 'Rubik-Light',
              textMonthFontFamily: 'Rubik-Medium',
              agendaDayTextColor: Color.lightGrey,
              agendaDayNumColor:  Color.lightGrey,
              monthTextColor: Color.secondary,
              todayTextColor: Color.primary,}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            // hideExtraDays={false}
            style={{}}
          />
        </View>
      </SafeAreaView>
    );
};


const styles = StyleSheet.create({
  body:{
    marginTop: 8,
    flex: 1
  },
  options: {
    width: ((Dimensions.get('window').width - 24 - 24)/3) - 8,
    marginRight: 8,
    padding: 6,
    borderRadius: Dimensions.get('window').width * .25
  },
  optionActiveText: {
    color: Color.neutral,
    textAlign: 'center'
  },
  optionInactiveText: {
    color: Color.primary,
    textAlign: 'center'
  },
  item: {
    flex: 1,
    marginRight: Dimensions.get('window').width * .049,
    marginTop: 8 
  },
});

export default Schedule;