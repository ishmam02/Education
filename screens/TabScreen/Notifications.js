import React from 'react';
import { StyleSheet, Dimensions ,StatusBar} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context'

import Color from '../../constants/Color';
import Header from '../../components/Header';

import All from './NotificationScreens/All';
import School from './NotificationScreens/School';
import Classes from './NotificationScreens/Classes';
import Teacher from './NotificationScreens/Teacher';


const Tab = createMaterialTopTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="All"
        backBehavior= 'none'
        tabBarOptions={{
          activeTintColor: Color.primary,
          inactiveTintColor: Color.lightGrey,
          labelStyle: { fontSize: Dimensions.get('window').width * .03, fontFamily: 'Rubik',  },
          style: { backgroundColor: Color.neutral, elevation: 0, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,.1)', marginTop: -4,  },
          pressColor: 'transparent',
          pressOpacity: 1,
          indicatorStyle: { borderBottomColor: Color.primary, borderBottomWidth: 2, },
        }}
      >
        <Tab.Screen
          name="All"
          component={All}
          options={{ tabBarLabel: 'All' }}
        />
        <Tab.Screen
          name="School"
          component={School}
          options={{ tabBarLabel: 'School' }}
        />
        <Tab.Screen
          name="Class"
          component={Classes}
          options={{ tabBarLabel: 'Class' }}
        />
         <Tab.Screen
          name="Teacher"
          component={Teacher}
          options={{ tabBarLabel: 'Teacher' }}
        />
      </Tab.Navigator>
    );
  }

const Notifications = () => {
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Color.neutral}}>
            <Header style={styles.header}/>
            <MyTabs />
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 0
    },
   topTab: {
       flexDirection: 'row',
       backgroundColor: Color.neutral,
       marginTop: -1,
       paddingVertical: 8,
       paddingHorizontal: Dimensions.get('window').width * .0585,
       justifyContent: 'space-between',
   }
});



export default Notifications;