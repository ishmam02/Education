import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import Color from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import BodyTextSmall from '../components/BodyTextSmall';

const Screen = (props) => {
    return (
        <View style={styles.classCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                <View style={[styles.profile,{ backgroundColor: props.color}]}>
                    <AntDesign name="CodeSandbox" size={Dimensions.get('window').width * .07} color={Color.neutral}  />
                </View>
                <View style={{width: '70%'}}>
                    <Heading style={styles.cardText}>{props.name}</Heading>
                    <BodyText style={styles.cardText}>{props.nextClass}</BodyText>
                </View>
            </View>
            <View>
                { props.join ? <TouchableOpacity activeOpacity={0}><View style={styles.Join}><BodyTextSmall style={styles.joinText}>Join</BodyTextSmall></View></TouchableOpacity> : null}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    classCard: {
        marginHorizontal: Dimensions.get('window').width * .049,
        paddingVertical: Dimensions.get('window').width * .039,
        paddingHorizontal: 8,
        borderRadius: Dimensions.get('window').width * .039,
        borderColor: Color.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardText: {
        color: Color.secondary, 
    },
    profile: {backgroundColor: Color.secondary, 
        padding: 8, 
        borderRadius: 50, 
        marginRight: Dimensions.get('window').width * .039},
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
    }
});


export default Screen;