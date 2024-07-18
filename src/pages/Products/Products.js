import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
// import Loading from '../../components/Loading';
// import Error from '../../components/Error';

export default function Products({navigation}) {
  // let apim = Config.API_URL;
  let apim = 'https://fakestoreapi.com/products';

  const {error, loading, data} = useFetch(apim);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id, apim});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
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
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
}
