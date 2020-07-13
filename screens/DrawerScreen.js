import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Color from '../constants/Color';
import Heading from '../components/Heading';

const DrawerScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.profile}>
                <View style={styles.profileImg}></View>
                <View>
                    <Heading style={styles.profileName}>John Doe</Heading>
                </View>
                <TouchableOpacity activeOpacity={.5} onPress={() => navigation.pop()}><Ionicons name="md-arrow-back" size={32} color={Color.primary} 
            style={{ transform : [{rotateY: '180deg'}]}} /></TouchableOpacity>
            </View>
            <View style={styles.accountOptions}>
                <Text style={styles.account}>Do more with your account</Text>
                <TouchableOpacity activeOpacity={.3} style={{alignSelf:'flex-start'}}><Heading style={styles.Switch}>Switch Account</Heading></TouchableOpacity>
            </View>
            <View style={styles.navContainer}>
                <View style={{flex: 1}}><TouchableOpacity activeOpacity={.5} onPress={() => navigation.push('Classes')} style={{alignSelf:'flex-start'}}><Heading style={styles.navBtns}>Classes</Heading></TouchableOpacity></View>
                <View style={{flex: 1}}><TouchableOpacity activeOpacity={.5} onPress={() => navigation.push('Planner')} style={{alignSelf:'flex-start'}}><Heading style={styles.navBtns}>Planner</Heading></TouchableOpacity></View>
                <View style={{flex: 1}}><TouchableOpacity activeOpacity={.5} onPress={() => navigation.push('Results')} style={{alignSelf:'flex-start'}}><Heading style={styles.navBtns}>Results</Heading></TouchableOpacity></View>
                <View style={{flex: 1}}><TouchableOpacity activeOpacity={.5} onPress={() => navigation.push('Help')} style={{alignSelf:'flex-start'}}><Heading style={styles.navBtns}>Help</Heading></TouchableOpacity></View>
                <View style={{flex: 1}}><TouchableOpacity activeOpacity={.5} onPress={() => navigation.push('Settings')} style={{alignSelf:'flex-start'}}><Heading style={styles.navBtns}>Settings</Heading></TouchableOpacity></View>
            </View>
        </SafeAreaView>    
    );
};


const styles = StyleSheet.create({
    profile: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 2,
        borderBottomColor: Color.primary,
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    profileImg: {
        height: 72,
        width: 72,
        borderRadius: 40,
        backgroundColor: Color.secondary,
    },
    profileName: {
        marginLeft: - Dimensions.get('window').width *.3 ,
        color: Color.secondary
    }, 
    accountOptions: {
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    Switch: {
        color: Color.primary
    },
    account:{
        color: 'grey'
    },
    navContainer: {
        borderTopEndRadius: 32,
        flex: 1,
        backgroundColor: Color.primary,
        paddingTop: 24,
        borderTopStartRadius: 32,
        paddingHorizontal: 20
    },
    navBtns: {
        color: 'white',
        alignSelf: 'flex-start',
    } 
});

export default DrawerScreen;