import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import shopData from './shop';
import ShopCard from './components/shopcard';

function App() {
  // more performant.
  const renderNews = ({item}) => <ShopCard products={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View>
                <Text style={styles.headerText}>Patika Store</Text>
                <TextInput style={styles.searchBox} placeholder="Ara..." />
              </View>
            );
          }}
          data={shopData}
          renderItem={({item}) => <ShopCard products={item} />}
          horizontal={false}
          numColumns={2}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color:"#F652A0"
  },
  searchBox:{
    fontSize:18,
    margin:1,
    backgroundColor:"#F6EEE0"
  }
});

export default App;
