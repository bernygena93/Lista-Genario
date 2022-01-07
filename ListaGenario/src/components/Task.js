import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/tasksStyles';

export default function Task({task, handleDelete, handleState, colorState}) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleConfirm = () => {
    handleState(task);
    setIsVisible(false);
  };

  const messageModal = text => {
    setIsVisible(true);
    setMessage(text);
  };
  return (
    <View style={colorState}>
      <Text style={styles.textElement}>{task.task}</Text>
      <View style={styles.options}>
        {!task.state ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => messageModal('confirm you terminate task?')}>
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
          onPress={() => messageModal('confirm you delete task?')}>
          <View>
            <Text style={styles.textButton}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        style={styles.modal}
        transparent={true}
        visible={isVisible}>
        <View style={styles.modalContainer}>
          <Text>{message}</Text>
          <View style={styles.modalButton}>
            {message === 'confirm you terminate task?' ? (
              <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <View>
                  <Text style={styles.textButton}>Accept</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDelete(task.id)}>
                <View>
                  <Text style={styles.textButton}>Accept</Text>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsVisible(false)}>
              <View>
                <Text style={styles.textButton}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
