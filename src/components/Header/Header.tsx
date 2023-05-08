import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';

const Header = ({toDoList}) => {
  const count = toDoList.filter(element => !element.completed);

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.numberOf}>{count.length}</Text>
      </View>
    </View>
  );
};

export default Header;
