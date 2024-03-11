import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const TodoInput = () => {
  return (
    <View>
      <TextInput placeholder="Yapılacak.." />
      <TouchableOpacity style={styles.addButton} onPress={x => console.log(x)}>
        <Text>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Text style={styles.header}>Yapılacaklar: 2</Text>

      <TodoInput />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    color: 'orange',
  },
  addButton: {
    backgroundColor: 'orange',
    color: 'white',
  },
});
