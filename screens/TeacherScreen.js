import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, ScrollView, StatusBar, TouchableOpacity, Linking, Platform } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { useIsFocused } from '@react-navigation/native';

import Color from '../constants/Color';
import Heading from '../components/Heading';
import HeadingSecondary from '../components/HeadingSecondary';
import BodyText from '../components/BodyText';
import BodyTextSmall from '../components/BodyTextSmall';
import RoutineAccordion from '../components/RoutineAccordion';




const timing = [
    { day: 'Sun' , time:['8:00 AM - 9:00 AM', '10:00 AM - 11:00 AM'] },
    { day: 'Tue' , time:['8:00 AM - 9:00 AM', '10:00 AM - 11:00 AM'] },
    { day: 'Thu' , time:['8:00 AM - 9:00 AM', '10:00 AM - 11:00 AM'] },
]  

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
 
  return isFocused ? <StatusBar {...props} /> : null;
}

const AssignmentScreen = ({navigation, route}) => {
    const makeCall = () => {
        let phone;
        if(Platform.OS === 'android'){
            phone= `tel:++${8801977474626}`
        }else {
            phone= 'telprompt:${+8801977474626}'
        }
        Linking.openURL(phone);
    }

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Color.neutral }}>
            <FocusAwareStatusBar barStyle='dark-content' backgroundColor={Color.neutral} />
            <View style={{ flexDirection: 'row' , alignItems: 'center' , paddingHorizontal: 20, padding: 16, justifyContent:'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={.3} onPress={()=> navigation.goBack()}>
                        <AntDesign name="back" size={Dimensions.get('window').width * .0595} color={Color.primary} style={{marginRight: 16}} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={.3} style={{marginRight: 16}}>
                            <AntDesign name="message1" size={Dimensions.get('window').width * .0595} color={Color.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.3} style={{transform: [{rotateY: '180deg'}]}} onPress={makeCall}>
                            <AntDesign name="phone" size={Dimensions.get('window').width * .06} color={Color.primary} />
                        </TouchableOpacity>
                </View>
            </View>
            <View 
            style={{
                marginHorizontal: 20, 
                padding: 16, 
                backgroundColor: Color.neutral, 
                elevation: 8, 
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                zIndex: 1000}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <View style={{height: 40, width: 40, backgroundColor: Color.secondary, borderRadius: 20, marginRight: 12}}></View>
                        <HeadingSecondary style={{fontFamily: 'Rubik-Medium'}}>Sumon Sonjoy</HeadingSecondary>
                    </View>
                </View>
                <View> 
                    <BodyText style={{marginBottom: 2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BodyText>
                    <BodyTextSmall style={{fontFamily: 'Rubik-Medium'}} >Lorem ipsum dolor sit amet, consectetu</BodyTextSmall>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: -16}}>
            <View style={styles.body}>
                <View style={styles.classCard}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '56%'}}>
                            <View style={[styles.profile,{ backgroundColor: Color.secondary}]}>
                                <AntDesign name="CodeSandbox" size={Dimensions.get('window').width * .07} color={Color.neutral}  />
                            </View>
                            <View>
                                <Heading style={styles.cardText}>Maths</Heading>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={0}><View style={styles.Join}><BodyTextSmall style={styles.joinText}>Ask to Join</BodyTextSmall></View></TouchableOpacity>
                        </View>
                    </View>
                    <RoutineAccordion timing={timing} bgColor={Color.secondary} brColor={Color.neutral} textColor={Color.neutral} />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    body: {
        marginTop: 32,
        marginHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        backgroundColor:  Color.secondary
    },
    buttonIcon: {
        borderRadius: Dimensions.get('window').width * .25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    classCard: {
        backgroundColor: Color.secondary,
        paddingHorizontal: 8,
        paddingVertical: Dimensions.get('window').width * .039,
        paddingBottom: 8,
        borderRadius: Dimensions.get('window').width * .039,
        marginBottom: 8
    },
    cardText: {
        color: Color.neutral, 
    },
    profile: {
        backgroundColor: Color.secondary, 
        padding: 4,
        paddingVertical: 8, 
        borderRadius: 50, 
        marginRight: Dimensions.get('window').width * .019},
    Join: {
        padding: 10,
        paddingVertical: 4,
        marginLeft: 4,
        borderRadius:50,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    joinText: {
        color: Color.neutral,
        fontFamily: 'Rubik-Medium'
    },
    routineContainer: {
        backgroundColor: Color.secondary,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginTop: 2,
        borderRadius: Dimensions.get('window').width * .039,
        borderColor: Color.neutral,
        borderWidth: 1
    },
    dayHeaderContainer: {
        paddingTop: 8,
    },
    dayHeader: {
        color: Color.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Color.neutral,
        margin: 2,
        padding: 8,
        borderRadius: 8
    },
    routineText: {
        color: Color.primary
    }
});


export default AssignmentScreen;