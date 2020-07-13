import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const Heading = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontSize: Dimensions.get('window').width * .0585
  }
});

export default Heading;