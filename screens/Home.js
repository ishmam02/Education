import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Heading from '../components/Heading';
import {SafeAreaView} from 'react-native-safe-area-context'
import { EvilIcons } from '@expo/vector-icons';
import Color from '../constants/Color';





const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}><TouchableOpacity activeOpacity={.5} onPress={() => navigation.push('Drawer')} style={{alignSelf:'flex-start'}}><EvilIcons name="navicon" size={40} color={Color.primary} /></TouchableOpacity></SafeAreaView>
    );
};


const styles = StyleSheet.create({});

export default Home;