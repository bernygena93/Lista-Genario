import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InputTask from '../components/InputTask';
import TaskList from '../components/TaskList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
});

export default function Home() {
  const [listItems, setListItems] = useState([]);

  const handlePress = textItem => {
    setListItems([...listItems, textItem]);
  };

  return (
    <View>
      <InputTask handlePress={handlePress} />
      <TaskList listItems={listItems} />
    </View>
  );
}
