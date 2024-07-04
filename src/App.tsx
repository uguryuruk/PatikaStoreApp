import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const todoData = [
  {id: 1, task: 'Temizlik'},
  {id: 2, task: 'Çamaşır'},
];



const todoCard = ({item}) => {

  const [isToggled, setIsToggled] = useState(false);

  const handlePress = () => {
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity
      style={isToggled ? styles.activeTaskButton : styles.activeTaskButton}
      onPress={handlePress}>
      <Text style={isToggled ? styles.activeButtonText : styles.passiveButtonText}>{item.task}</Text>
    </TouchableOpacity>
  );
};

const ToggleButton = ({item}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handlePress = () => {
    setIsToggled(!isToggled);
  };
};

const todoCard = ({item}) => {
  return (
    <TouchableOpacity
      style={isToggled ? styles.activeTaskButton : styles.activeTaskButton}
      onPress={x => console.log(x)}>
      <Text style={isToggled ? styles.activeButtonText : styles.passiveButtonText}>{item.task}</Text>
    </TouchableOpacity>
  );
};

const TodoInput = () => {
  const [todoList, setTodoList] = useState(todoData);
  const [currentTodo, setCurrentTodo] = useState('');
  const [idCounter, setIdCounter] = useState(3);

  const handleAddTodo = () => {
    if (currentTodo.trim()) {
      setTodoList([...todoList, { id: idCounter, task: currentTodo }]);
      setCurrentTodo('');
      setIdCounter(idCounter + 1);
    }
  };

  return (
    <View style={styles.inner_container}>
      <TextInput placeholder="Yapılacak.." value={currentTodo} onChangeText={setCurrentTodo}/>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const TodoList = () => {
  // buradaki elemanların da onPress i olacak, üstünü çizip rengini değiştirecek.
  return <FlatList data={todoData} renderItem={todoCard}></FlatList>;

};

const App = () => {

  

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.header}>Yapılacaklar:</Text>
        <Text style={styles.header}>2</Text>
      </View>
      <View>
        <TodoList></TodoList>
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
  activeTaskButton: {
    backgroundColor: '#7DA453',
    borderRadius: 5,
    height: 40,
    width: 200,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
  },
  passiveTaskButton: {
    backgroundColor: '#37474F',
    borderRadius: 5,
    height: 40,
    width: 200,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  activeButtonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  passiveButtonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'line-through',
  }
});
