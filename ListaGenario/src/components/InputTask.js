import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 40,
    backgroundColor: '#F6F6F6',
  },
  input: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#C2BFBF',
  },
});

export default function InputTask({handlePress}) {
  const [textItem, setTextItem] = useState({id: 0, task: ''});

  const handleChange = e => {
    setTextItem({
      id: Math.random(),
      task: e.target.value,
    });
  };

  const handleOnPress = () => {
    handlePress(textItem);
    setTextItem('');
  };
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder="new item"
        style={styles.input}
        value={textItem}
        onChange={handleChange}
      />
      <Button title="ADD" onPress={handleOnPress} disabled={textItem === ''} />
    </View>
  );
}
