import React, {useState} from 'react';
import {View} from 'react-native';
import InputTask from '../components/InputTask';
import TaskList from '../components/TaskList';
import {styles} from './styles/homeStyles';

export default function Home() {
  const [listItems, setListItems] = useState([]);

  const handlePress = textItem => {
    setListItems([...listItems, textItem]);
  };

  const handleDelete = id => {
    setListItems(listItems.filter(task => task.id !== id));
  };
  const handleState = task => {
    let updatedList = listItems.filter(item => item.id !== task.id);
    updatedList.push({
      id: task.id,
      task: task.task,
      state: true,
    });
    setListItems(updatedList);
  };

  return (
    <View style={styles.container}>
      <InputTask handlePress={handlePress} />
      <TaskList
        listItems={listItems}
        handleDelete={handleDelete}
        handleState={handleState}
      />
    </View>
  );
}
