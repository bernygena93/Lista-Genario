import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/tasksStyles';

export default function Task({task, handleDelete, handleState, colorState}) {
  return (
    <View style={colorState}>
      <Text style={styles.textElement}>{task.task}</Text>
      <View style={styles.options}>
        {!task.state ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleState(task)}>
            <View>
              <Text style={styles.textButton}>Completed</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.textElement, {marginTop: 4.5}]}>
            Finished task!
          </Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDelete(task.id)}>
          <View>
            <Text style={styles.textButton}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
