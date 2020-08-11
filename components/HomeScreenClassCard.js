import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Alert} from 'react-native';
import HeadingSecondary from './HeadingSecondary';
import BodyText from './BodyText';
import { AntDesign } from '@expo/vector-icons';
import BodySmall from './BodyTextSmall';
import Color from '../constants/Color'


const HomeScreenClassCard = (props) => {
    const navigation = props.navigate
    let attendance;
    if(props.attendance === 'Present') {
        attendance = <View style={styles.Present}><BodySmall style={styles.attendanceText}>1.</BodySmall></View>;
    } else if (props.attendance === 'Absent'){
        attendance = <View style={styles.Absent}><BodySmall style={styles.attendanceText}>1.</BodySmall></View>;
    } else {
        attendance = <></>
    }
    return (
        <View style={styles.card}>
            <TouchableOpacity activeOpacity={.7} onPress={()=> navigation.navigate('Class', { subjectName: props.subjectName, color: props.color}) }>
            <View style={[styles.card2, {backgroundColor: props.color}]}>
                <View style={{padding: 0, borderRadius: 50, marginRight: 8, marginLeft: 2}}>
                    <AntDesign name="CodeSandbox" size={32} color={Color.neutral}  />
                </View>
                <View>
                    <HeadingSecondary style={styles.title}>{props.subjectName}</HeadingSecondary>
                    <BodySmall style={styles.body}>Time: {props.time}</BodySmall>
                </View>
                {attendance}
            </View>    
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: Color.neutral,
        borderRadius: Dimensions.get('window').width * .039,
        overflow: 'hidden',
    },
    card2: {
        borderRadius: Dimensions.get('window').width * .039,
        paddingVertical: Dimensions.get('window').width * .049,
        paddingHorizontal: Dimensions.get('window').width * .039,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: Color.neutral,
        paddingHorizontal: 8,
        fontFamily: 'Rubik-Medium'
    },
    body: {
        paddingHorizontal: 8,
        paddingTop: 2,
        color: Color.neutral
    },
    Present: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Absent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        backgroundColor: Color.danger,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Join: {
        padding: 10,
        paddingVertical: 4,
        marginLeft: 4,
        borderRadius:50,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    attendanceText: {
        color: 'transparent',
    },
    joinText: {
        color: Color.neutral,
        fontFamily: 'Rubik-Medium'
    }

});

export default HomeScreenClassCard;