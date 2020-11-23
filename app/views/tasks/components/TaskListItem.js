import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../styles';
import GeneralStyles from '../../../theme/GeneralStyles';

export const TaskListItem = (props) => {
  return (
    <View
      style={
        props.item.done ? styles.doneItemContainer : styles.toDoItemContainer
      }>
      <View style={GeneralStyles.defaultFlex}>
        <Text style={styles.toDoItemTitle}>{props.item.title}</Text>
        <Text style={styles.toDoItemDesc}>{props.item.description}</Text>
      </View>
      {props.item.done ? null : (
        <View style={styles.doneButtonContainer}>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={(_) => props.onPressDone(props.item)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
