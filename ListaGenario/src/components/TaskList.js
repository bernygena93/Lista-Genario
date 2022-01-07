import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Task from './Task';
import {styles} from './styles/taskListStyles';

export default function TaskList({listItems, handleDelete, handleState}) {
  return (
    <View>
      <Text style={styles.text}>In progess</Text>
      <View style={styles.containerList}>
        <FlatList
          data={listItems}
          keyExtractor={item => item.id}
          renderItem={data =>
            !data.item.state && (
              <Task
                task={data.item}
                handleDelete={handleDelete}
                handleState={handleState}
                colorState={styles.containerElementInProgress}
              />
            )
          }
        />
      </View>
      <Text style={styles.text}>Done</Text>
      <View style={styles.containerList}>
        <FlatList
          data={listItems}
          keyExtractor={item => item.id}
          renderItem={data =>
            data.item.state && (
              <Task
                task={data.item}
                handleDelete={handleDelete}
                handleState={handleState}
                colorState={styles.containerElement}
              />
            )
          }
        />
      </View>
    </View>
  );
}
