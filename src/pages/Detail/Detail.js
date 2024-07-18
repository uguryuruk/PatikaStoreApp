import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';


export default function Detail({route}) {

  let {id: item_id, apim} = route.params
  const {error, loading, data} = useFetch(`${apim}/${item_id}`);

  if (loading) {
    return <ActivityIndicator size="large" />;
    // return <Loading />;
    // }
  }

  if (error) {
    return <Text>{error}</Text>;
    // return <Error/>;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image}/>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price} ₺</Text>
    </View>
  )
}