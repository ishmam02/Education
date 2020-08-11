import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Color from '../constants/Color';
import Heading from './Heading';

const IconButtonBig = props => {
    return (
        <View style={[styles.container, {backgroundColor: props.bgColor}]}>
            <View style={styles.icon}>
                <AntDesign name={props.iconName} size={Dimensions.get('window').width * .07} color={props.iconColor} />
            </View>
            <Heading style={{color: props.titleColor}}>{props.title}</Heading>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: Dimensions.get('window').width * .039,
        alignItems : 'center',
    },
    icon: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4
    },
});

export default IconButtonBig;