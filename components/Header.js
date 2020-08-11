import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';

import Color from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
import Heading from './Heading';

const Screen = (props) => {
    return (
        <View style={{... styles.header, ...props.style}}>
                <View><Heading style={styles.profile}>Flick</Heading></View>
                <View style={styles.headerOptions}>
                    <TouchableOpacity activeOpacity={.3} >
                        <AntDesign name="setting" size={Dimensions.get('window').width * .0595} 
                        color={Color.primary} style={{marginRight: Dimensions.get('window').width * .04}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} >
                        <AntDesign name="message1" size={Dimensions.get('window').width * .0595} color={Color.primary}/>
                    </TouchableOpacity>
                </View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Dimensions.get('window').width * .049,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: Color.neutral,
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.1)'
    },
    profile: {
        color: Color.primary,
        fontSize: 28
    },
    headerOptions: {
        flexDirection: 'row',
    },
});

export default Screen;