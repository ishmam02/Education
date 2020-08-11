import React, {useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity ,StatusBar, FlatList, Dimensions, Image} from 'react-native';
import {connect} from 'react-redux'
import { fetchTodayClasses, fetchHomeworks, fetchTests, fetchExams } from '../../store/actions/index'

import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'

import Color from '../../constants/Color';
import Heading from '../../components/Heading';
import HomeScreenClassCard from '../../components/HomeScreenClassCard';
import Header from '../../components/Header';
import ScheduleCard from '../../components/ScheduleCard';
import { ScrollView } from 'react-native-gesture-handler';





const Home = ({classes , fetchTodayClasses, fetchExams, fetchHomeworks, fetchTests, tests, exams, homeworks, navigation}) => {
    useEffect( () => {
        fetchTodayClasses();
        fetchExams();
        fetchHomeworks();
        fetchTests();
    }, [classes, tests, exams, homeworks])

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Color.neutral, marginBottom: - useSafeAreaInsets().bottom}}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
                <Heading style={styles.headingClass}>Classes</Heading>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(classes)=> classes.name} 
                data={classes}
                renderItem={({item})=>{ return (
                    <View style={{ paddingVertical: 8, marginLeft: Dimensions.get('window').width * .049}}>
                        <HomeScreenClassCard subjectName={item.name} time={item.time} teacher={item.teacher} attendance={item.attendance} color={item.color} navigate={navigation} />
                    </View>
                );}}/>
                <Heading style={styles.headingExam} >Exam</Heading>
                    {exams.map( exam => {
                        return (<View style={{marginBottom: 8, marginHorizontal:Dimensions.get('window').width * .049}} key={exam.id}>
                            <TouchableOpacity activeOpacity={exam.submitted === '' ? 0.5 : 0.7} onPress={()=> navigation.navigate('Assignment', { ...exam}) }>
                                <ScheduleCard title={exam.title} subject={exam.subject} date={exam.date} submitted={exam.submitted} type={exam.type} />
                            </TouchableOpacity>
                        </View>);
                    })}
                <Heading style={styles.headingHomeWork} >Test</Heading>
                    {tests.map( test => {
                        return (<View style={{marginBottom: 8, marginHorizontal:Dimensions.get('window').width * .049}} key={test.id}>
                            <TouchableOpacity activeOpacity={test.submitted === '' ? 0.5 : 0.7} onPress={()=> navigation.navigate('Assignment', { ...test}) } >
                                <ScheduleCard title={test.title}  subject={test.subject} date={test.date} submitted={test.submitted} type={test.type}/>
                            </TouchableOpacity>
                        </View>);
                    })}
                <Heading style={styles.headingHomeWork} >Homework</Heading>
                    <View >{homeworks.map( homework => {
                            return (<View style={{marginBottom: 8, marginHorizontal:Dimensions.get('window').width * .049}} key={homework.id}>
                                <TouchableOpacity activeOpacity={homework.submitted === '' ? 0.5 : 0.7} onPress={()=> navigation.navigate('Assignment', { ...homework}) } >
                                    <ScheduleCard title={homework.title} subject={homework.subject} date={homework.date} submitted={homework.submitted} type={homework.type}/>
                                </TouchableOpacity>
                            </View>);
                        })}
                    </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    body: {
        paddingVertical: 8
    },
    
    headingClass: {
        marginLeft:Dimensions.get('window').width * .049,
        marginVertical: 4,
    },
    headingExam: {
        marginLeft:Dimensions.get('window').width * .049,
        marginTop: 8,
        marginBottom: 8
    },
    headingHomeWork: {
        marginLeft:Dimensions.get('window').width * .049,
        marginTop: 8,
        marginBottom: 8
    },
    
});

const mapStateToProps = (state) => {
    return { classes: state.classes, tests: state.tests, exams: state.exams, homeworks: state.homeworks };
  };

export default connect(mapStateToProps , {fetchTodayClasses, fetchExams, fetchHomeworks, fetchTests})(Home);