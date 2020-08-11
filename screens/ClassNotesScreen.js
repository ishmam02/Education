import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { useIsFocused } from '@react-navigation/native';

import Color from '../constants/Color';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import BodyTextSmall from '../components/BodyTextSmall';
import HeadingSecondary from '../components/HeadingSecondary';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
 
  return isFocused ? <StatusBar {...props} /> : null;
}

const AssignmentScreen = ({navigation, route}) => {

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Color.primary }}>
            <FocusAwareStatusBar barStyle='light-content' backgroundColor={Color.primary} />
            <View style={{ flexDirection: 'row' , alignItems: 'center' , paddingHorizontal: 20, paddingVertical: 16,}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={.3} onPress={()=> navigation.goBack()}>
                        <AntDesign name="back" size={Dimensions.get('window').width * .0595} color={Color.neutral} style={{marginRight: 16}} />
                    </TouchableOpacity>
                    <View>
                        <Heading style={{color: Color.neutral}}>Class Notes</Heading>
                        <BodyText style={{color: Color.neutral, fontFamily: 'Rubik-Medium'}} >Class: {route.params.subjectName}</BodyText>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: Color.neutral, borderTopLeftRadius: 32, borderTopRightRadius: 32}}>
            <View style={styles.body}>
                <View style={styles.descriptionContainer}>
                    <BodyTextSmall style={{fontFamily: 'Rubik-Medium'}}>Today, 8:15 PM</BodyTextSmall>
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BodyText>
                    <TouchableOpacity onPress={()=> navigation.navigate('DocumentViewerScreen')} onPress={.7}>
                        <View style={{borderColor: Color.secondary, borderWidth: 2, padding: 12, borderRadius: 8, marginTop: 8,}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <FontAwesome name="file-text" size={24} color={Color.secondary} style={{marginRight: 12}} />
                                <HeadingSecondary style={{fontFamily: 'Rubik-Medium', color: Color.secondary}}>Lorem Ipsum</HeadingSecondary>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    body: {
        marginTop: 16,
        marginHorizontal: 20,
    },
    descriptionContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 24,
        backgroundColor: Color.inactive,
        marginBottom: 8,
    }
});


export default AssignmentScreen;