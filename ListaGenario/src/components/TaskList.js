import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  containerList: {
    height: '80%',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C2BFBF',
    backgroundColor: '#FCFCFC',
  },
});

export default function TaskList({listItems}) {
  return (
    <View>
      <Text>Item List</Text>
      <View style={styles.containerList}>
        <FlatList
          data={listItems}
          keyExtractor={item => item.id}
          renderItem={data => <Text>{data.item.task}</Text>}
        />
      </View>
    </View>
  );
}
