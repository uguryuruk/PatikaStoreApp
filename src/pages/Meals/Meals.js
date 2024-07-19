import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
// import Loading from '../../components/Loading';
// import Error from '../../components/Error';

export default function Meals({navigation, route}) {

  let {categoryName} = route.params
  // let apim = Config.API_URL;
  let apim = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  // let apim = `www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

  const {error, loading, data} = useFetch(apim);

  const handleMealSelect = (id) => {
    navigation.navigate('DetailPage', {id});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  // return <Loading />;

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
    <SafeAreaView>
      <FlatList data={data.meals} renderItem={renderMeal} keyExtractor={item => item.idMeal}/>
    </SafeAreaView>
  );
}
