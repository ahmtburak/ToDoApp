import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import ToDoCard from './components/ToDoCard/ToDoCard';

function App() {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    const newToDo = {
      id: Math.random() + Date.now(),
      task: textInput,
      completed: false,
    };
    setTodos([...todos, newToDo]);
    setTextInput('');
  };

  const completeToDo = id => {
    const newList = todos.map(element => {
      if (element.id === id) {
        element.completed = !element.completed;
      }
      return element;
    });
    setTodos(newList);
  };

  const deleteToDo = id => {
    const copyList = todos.filter(element => element.id !== id);
    setTodos(copyList);
  };

  const renderToDo = ({item}) => (
    <ToDoCard todo={item} markToDo={completeToDo} removeToDo={deleteToDo} />
  );

  return (
    <View style={styles.container}>
      <Header toDoList={todos} />
      <View style={styles.card_container}>
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={renderToDo}
        />
      </View>
      <Input
        setUpdate={addToDo}
        textInputValue={textInput}
        setText={setTextInput}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 10,
  },
  card_container: {},
});
