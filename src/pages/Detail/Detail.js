import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';

export default function Detail({route}) {
  let {id: item_id} = route.params;

  const {error, loading, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item_id}`,
  );

  // THESE WON'T WORK HERE!
  // let singleData = data.meals[0];
  // data = data.meals[0];

  const handlePress = url => {
    console.log(url);
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

  if (data && data.meals && data.meals.length > 0) {
    const meal = data.meals[0];
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: meal.strMealThumb}} style={styles.image} />
          <Text style={styles.title}>{meal.strMeal}</Text>
          <Text style={styles.desc}>{meal.strCategory}</Text>
          <Text style={styles.desc}>{meal.strArea} </Text>
          <Text style={styles.desc}>{meal.strArea} </Text>
          <Text style={styles.desc}>{meal.strInstructions} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handlePress(meal.strYoutube);
            }}>
            <Text style={styles.buttonText}>Watch on Youtube!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
