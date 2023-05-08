import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ToDoCard.style';

const ToDoCard = ({todo, markToDo, removeToDo}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        markToDo(todo.id);
      }}
      onLongPress={() => {
        removeToDo(todo.id);
      }}>
      <View style={todo.completed ? styles.container2 : styles.container}>
        <Text style={todo.completed ? styles.todo_text2 : styles.todo_text}>
          {todo.task}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToDoCard;
