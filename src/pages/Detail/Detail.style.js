import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const deviceSize = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#A52A2A',
  },
  desc: {fontStyle: 'italic', marginVertical: 10},
  categoryArea: {
    ...styles.title,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#A52A2A',
    padding: 10,
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
