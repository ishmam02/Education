import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import BodyText from './BodyText';
import BodySmall from './BodyTextSmall';
import Color from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';


const ScheduleCard = (props) => {
    let submitted;
    let bgColor;
    let bgColor2 = Color.neutral;
    let brColor = 'transparent'
    let borderWidth = 0;
    if(props.submitted === 'Yes') {
        bgColor = Color.primary;
        submitted = <View style={[styles.submitted, { backgroundColor: Color.primary}]}><AntDesign name="check" size={Dimensions.get('window').width * .0595} color={Color.neutral} /></View>
    } else if (props.submitted === 'No'){
        bgColor = Color.danger;
        submitted = <View style={[styles.submitted, {backgroundColor: Color.danger}]}><AntDesign name="close" size={Dimensions.get('window').width * .0595} color={Color.neutral} /></View>
    } else {
        brColor = Color.primary;
        borderWidth = 1
        bgColor = Color.inactive;
        bgColor2 = Color.neutral;
        submitted = <></>
    }

    return (
        <View style={[styles.homeworkContainer , { backgroundColor: bgColor }]} >
            <View style={{width: '87.5%'}}>
            { props.screen === 'Routine' ? <BodySmall  style={props.submitted === '' ? styles.calenderTextNotSubmitted : styles.calenderTextSubmitted }>{props.type}</BodySmall> : null}
                <BodyText style={props.submitted === '' ? styles.notSubmittedText : styles.submittedText }>{props.title}</BodyText>
                <BodySmall  style={props.submitted === '' ? styles.notSubmittedText : styles.submittedText }>Class: {props.subject}</BodySmall>
                <BodySmall  style={props.submitted === '' ? styles.notSubmittedText : styles.submittedText }>{ props.type === 'Homework' ? "Due" : "Date"}: {props.date}</BodySmall>
            </View>
            <View style={[styles.submittedContainer, {borderColor: brColor, borderWidth: borderWidth, backgroundColor: bgColor2 }]}>
                {submitted}
            </View>
        </View> 
    );
};


const styles = StyleSheet.create({
    homeworkContainer: {
        padding: Dimensions.get('window').width * .039,
        borderRadius: Dimensions.get('window').width * .039,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    calenderTextSubmitted: {
        color: Color.neutral,
        marginBottom: -2,
        fontFamily: 'Rubik-Medium'
    },
    calenderTextNotSubmitted: {
        color: Color.secondary,
        marginBottom: -2,
        fontFamily: 'Rubik-Medium'
    },
    submittedText: {
        color: Color.neutral
    },
    notSubmittedText: {
        color: Color.secondary
    },
    submittedContainer: {
        height: Dimensions.get('window').width * .1,
        width: Dimensions.get('window').width * .1,
        backgroundColor: Color.neutral,
        borderRadius: 1000,
        justifyContent: 'center'
    },
    submitted: {
        height: Dimensions.get('window').width * .085,
        width: Dimensions.get('window').width * .085,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScheduleCard;