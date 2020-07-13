import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';

import Home from './screens/Home';
import DrawerScreen from './screens/DrawerScreen';
import Classes from './screens/Classes';
import Planner from './screens/Planner';
import Results from './screens/Results';
import Help from './screens/Help';
import Settings from './screens/Settings';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Drawer" component={DrawerScreen}/>
          <Stack.Screen name="Classes" component={Classes}/>
          <Stack.Screen name="Planner" component={Planner}/>
          <Stack.Screen name="Results" component={Results}/>
          <Stack.Screen name="Help" component={Help}/>
          <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
