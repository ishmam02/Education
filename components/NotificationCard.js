import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import Color from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
import BodyText from '../components/BodyText';
import BodySmall from './BodyTextSmall';

const NotificationCard = (props) => {
    return (
            <View style={[styles.container,{backgroundColor: props.read ? Color.inactive: Color.primary}]}>
                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                    <View style={styles.profile}>
                        <AntDesign name="CodeSandbox" size={Dimensions.get('window').width * .0585} color={Color.neutral}  />
                    </View>
                    <View style={{flex:1}}>
                        <BodyText style={{color: props.read ? Color.secondary: Color.neutral, fontFamily: 'Rubik-Medium', width: '95%'}}>{props.title}</BodyText>
                        <BodySmall style={{color: props.read ? Color.secondary: Color.neutral}}>{props.time}</BodySmall>
                    </View>
                </View>
                <TouchableOpacity>
                    <AntDesign name="close" size={Dimensions.get('window').width * .07} color={props.read ? Color.secondary: Color.neutral} />
                </TouchableOpacity>
            </View>
    );
};


const styles = StyleSheet.create({
    container:{ 
        marginHorizontal:Dimensions.get('window').width * .049, 
        paddingVertical: 12,
        paddingHorizontal: 12, 
        borderRadius:Dimensions.get('window').width * .039, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    profile: {backgroundColor: Color.secondary, padding: 8, borderRadius: 50, marginRight: 8},
});


export default NotificationCard;