import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './Input.style';

const Input = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        style={styles.input}
        placeholderTextColor={'#808080'}
        value={props.textInputValue}
        onChangeText={text => props.setText(text)}></TextInput>
      <TouchableOpacity
        onPress={props.setUpdate}
        style={
          props.textInputValue.length > 0 ? styles.button2 : styles.button
        }>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
