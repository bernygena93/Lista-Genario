import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {styles} from './styles/inputTaskStyles';

export default function InputTask({handlePress}) {
  const [textItem, setTextItem] = useState({id: 0, task: ''});

  const handleChange = text => {
    setTextItem({
      id: Math.random(),
      task: text,
    });
  };

  const handleOnPress = () => {
    handlePress(textItem);
    setTextItem({
      id: 0,
      task: '',
      state: false,
    });
  };
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder="
        Enter new task"
        placeholderTextColor="#E2EDED"
        style={styles.input}
        value={textItem.task}
        onChangeText={text => handleChange(text)}
      />
      <Button
        title="ADD"
        onPress={handleOnPress}
        disabled={textItem === ''}
        color="#3d405b"
      />
    </View>
  );
}
