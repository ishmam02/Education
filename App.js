import React, {useState} from 'react';
import { StyleSheet, Dimensions, StatusBar} from 'react-native';
import Color from './constants/Color'

import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import Home from './screens/TabScreen/Home';
import Classes from './screens/TabScreen/Classes';
import Planner from './screens/TabScreen/Schedule';
import Notifications from './screens/TabScreen/Notifications';
import ClassScreen from './screens/ClassScreen';
import AssignmentScreen from './screens/AssignmentScreen.js';
import ClassNotesScreen from './screens/ClassNotesScreen.js';
import TeacherScreen from './screens/TeacherScreen.js';
import DocumentViewerScreen from './screens/DocumentViewerScreen.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'Rubik': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf')
  });
};

const store = createStore(reducers);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const BottomTab = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: Color.primary,
          inactiveTintColor: Color.lightGrey,
          style: styles.tabBar,
          labelStyle: styles.tabBarIcon
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Classes"
          component={Classes}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (            
              <AntDesign name="book" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Planner}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="notification" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: Color.neutral},
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }} >
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Class" component={ClassScreen} />
            <Stack.Screen name="Assignment" component={AssignmentScreen} />
            <Stack.Screen name="ClassNotes" component={ClassNotesScreen} />
            <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
            <Stack.Screen name="DocumentViewerScreen" component={DocumentViewerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    elevation: Dimensions.get('window').width * .03,
    padding: 10,
    borderTopWidth: 0,
    backgroundColor: Color.neutral,
    borderTopLeftRadius: Dimensions.get("window").width * .06 ,
    borderTopRightRadius: Dimensions.get("window").width * .06,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  },
  tabBarIcon: {
  }
});
