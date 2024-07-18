import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const deviceSize = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {fontStyle: 'italic'},
  price: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
