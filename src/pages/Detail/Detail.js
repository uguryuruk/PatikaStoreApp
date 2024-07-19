import {View, Text, Image, ActivityIndicator, Linking} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';

export default function Detail({route}) {
  let {id: item_id} = route.params;
  const {error, loading, data} = useFetch(
    `www.themealdb.com/api/json/v1/1/lookup.php?i=${item_id}`,
  );

  const handlePress = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

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
      <Image source={{uri: data.strMealThumb}} style={styles.image} />
      <Text style={styles.title}>{data.strMeal}</Text>
      <Text style={styles.desc}>{data.strCategory}</Text>
      <Text style={styles.desc}>{data.strArea} </Text>
      <Text style={styles.desc}>{data.strArea} </Text>
      <Text style={styles.desc}>{data.strInstructions} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handlePress(data.strYoutube);
        }}>
        <Text style={styles.buttonText}>Watch on Youtube!</Text>
      </TouchableOpacity>
    </View>
  );
}
