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
  {id: 3, task: 'Bulaşık'},
];
// TODO: tek tıkla tamamlananları da yapılacaklar sayısından düş.
const TodoCard = ({item, onDelete}) => {
  // render error invalid hook call
  const [isToggled, setIsToggled] = useState(true);

  const handlePress = () => {
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity
      style={isToggled ? styles.activeTaskButton : styles.passiveTaskButton}
      onPress={handlePress}
      onLongPress={() => onDelete(item.id)} >
      <Text
        style={isToggled ? styles.activeButtonText : styles.passiveButtonText}>
        {item.task}
      </Text>
    </TouchableOpacity>
  );
};

const TodoInput = ({value, onChangeText, onAddTodo}) => {
  return (
    <View style={styles.inner_container}>
      <TextInput
        placeholder="Yapılacak.."
        value={value}
        onChangeText={onChangeText}
        style={styles.buttonText}
      />
      <TouchableOpacity style={styles.addButton} onPress={onAddTodo} >
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const TodoList = props => {
  // buradaki elemanların da onPress i olacak, üstünü çizip rengini değiştirecek.
  // listenin güncellenmesi işini araştır, daha üst düzey bir state gibi.
  return (
    <FlatList
      style={styles.listItems}
      data={props.data}
      renderItem={({item}) => <TodoCard item={item} onDelete={props.onDelete}/>}></FlatList>
  );
};

const App = () => {
  const [todoList, setTodoList] = useState(todoData);
  const [currentTodo, setCurrentTodo] = useState('');
  const [idCounter, setIdCounter] = useState(3);

  const handleAddTodo = () => {
    if (currentTodo.trim()) {
      setIdCounter(idCounter + 1); // Increment idCounter state
      setTodoList([...todoList, {id: idCounter + 1, task: currentTodo}]);
      setCurrentTodo('');
    }
  };

  const handleDelete = (id) => {
    let new_list = todoList.filter(item => item.id != id)
    setTodoList(new_list)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.header}>Yapılacaklar:</Text>
        <Text style={styles.header}>{todoList.length}</Text>
      </View>
      <View>
        <TodoList data={todoList} onDelete={handleDelete}></TodoList>
      </View>

      <TodoInput
        value={currentTodo}
        onChangeText={setCurrentTodo}
        onAddTodo={handleAddTodo}        
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
    // alignItems: 'baseline'
  },
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listItems: {
    // alignItems: 'center'
    // flex:1
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
  },
});
