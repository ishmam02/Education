import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';

import { AndroidBackHandler } from "react-navigation-backhandler";

onBackButtonPressAndroid = (navigation) => {
    navigation.popToTop();
    return true
  };

const Help = ({navigation}) => {
     
    return (
        <AndroidBackHandler onBackPress={() => this.onBackButtonPressAndroid(navigation)}>
        <Text>Help</Text>
      </AndroidBackHandler>
    );
};


const styles = StyleSheet.create({});

export default Help;