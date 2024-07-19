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
    backgroundColor: 'white',

  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  desc: {fontStyle: 'italic',
    marginVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
