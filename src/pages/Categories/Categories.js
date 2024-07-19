import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';

export default function Categories({navigation}) {
  // let apim = Config.API_URL;
  let apim = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const {error, loading, data} = useFetch(apim);

  const handleCategorySelect = categoryName => {
    navigation.navigate('MealsPage', {categoryName});
  };

  const renderCategory = ({item}) => {
    return (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
    
  );}

  // return <Loading />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView>
      <Text>Categories</Text>
      {/* <Text>{data.categories[0].idCategory}</Text> */}
      
      <FlatList data={data.categories} renderItem={renderCategory} keyExtractor={item => item.idCategory}/>
    </SafeAreaView>
  );
}
