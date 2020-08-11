import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import Color from '../constants/Color';

const HeadingSecondary = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontSize: Dimensions.get('window').width * .049,
    color: Color.secondary,
    fontFamily: 'Rubik'
  }
});

export default HeadingSecondary;