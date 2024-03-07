import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const ShopCard = ({products}) => {
  return (
    
    <View style={styles.cardContainer}>
      <Image src={products.imgURL} style={styles.productImage} />
      <Text style={styles.productTitle}>{products.title}</Text>
      <Text style={styles.productPrice}>{products.price}</Text>
      {!products.inStock && <Text style={styles.stockInfo}>STOKTA YOK</Text>}
    </View>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#EEEDE7',
    margin: 3,
    padding:1,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 3,
    flex: 1,
    justifyContent:'space-around'
  },
  productImage: {
    minWidth: 100,
    minHeight: 100,
    resizeMode: 'contain',
    flex:3
  },
  productTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    flex:1
  },
  productPrice: {
    color: 'grey',
    fontSize: 16,
    alignSelf:'flex-start',
    flex:1
  },
  stockInfo:{
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
