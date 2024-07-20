import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './MealCard.style';

export default function MealCard({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{meal.strMeal } </Text>
        {/* <View style={styles.body_container}>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
