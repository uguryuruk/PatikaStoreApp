import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const todoData = [
  {id: 1, task: 'Temizlik'},
  {id: 2, task: 'Çamaşır'},
];

const TodoInput = () => {
  return (
    <View style={styles.inner_container}>
      <TextInput placeholder="Yapılacak.." />
      <TouchableOpacity style={styles.addButton} onPress={x => console.log(x)}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const TodoList = () => {
  // buradaki elemanların da onPress i olacak, üstünü çizip rengini değiştirecek.
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={todoData}
      renderItem={renderSong}
      ></FlatList>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.header}>Yapılacaklar:</Text>
        <Text style={styles.header}>2</Text>
      </View>

      <TodoInput />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    color: '#FFA500',
  },
  inner_container: {
    backgroundColor: '#37474F',
  },
  addButton: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    height: 40,
    width: 300,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
