import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';


import { AntDesign } from '@expo/vector-icons';


import Color from '../constants/Color';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';



const RoutineAccordion = ({timing, bgColor, brColor, textColor}) => {
    const [routineOn, setRoutineOn] = useState(false);
    
    return (
                <View style={[styles.routineContainer,{backgroundColor: bgColor, borderColor: brColor}]}>
                    <TouchableOpacity activeOpacity={.6} onPress={()=>{ setRoutineOn(routineOn ? false : true);}} style={[styles.buttonContainer,{backgroundColor:  bgColor}]}>
                        <View style={{ flexDirection: 'row', alignItems:'center'}}>
                            <View style={styles.buttonIcon}>
                                <AntDesign name='calendar' size={Dimensions.get('window').width * .07} color={textColor} />
                            </View>
                            <Heading style={{color: textColor}}>Routine</Heading>
                        </View>
                            <AntDesign name={routineOn ? 'upcircle' : 'downcircle'} size={Dimensions.get('window').width * .075} color={textColor} />
                    </TouchableOpacity>
                        {routineOn ? <View style={styles.dayHeaderContainer}>
                            {timing.map( time => {
                                const key = time.day;
                                return   <View key={key} style={[styles.dayHeader, ]}>
                                    <BodyText style={styles.routineText}>{time.day}</BodyText>
                                    <View style={{width: '-80%'}}>
                                        {time.time.map( time => <BodyText key={`${key}${time}`} style={styles.routineText}>{time}</BodyText>)}
                                    </View>
                                </View>})}
                        </View> : null}
                    </View>
    );
};


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
    },
    buttonIcon: {
        borderRadius: Dimensions.get('window').width * .25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    routineContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginTop: 2,
        borderRadius: Dimensions.get('window').width * .039,
        borderWidth: 1
    },
    dayHeaderContainer: {
        paddingTop: 8,
    },
    dayHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Color.neutral,
        margin: 2,
        padding: 8,
        borderRadius: 8
    },
    routineText: {
        color: Color.primary,
        textAlign: 'right'
    }
});


export default RoutineAccordion;