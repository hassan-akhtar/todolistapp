import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../../theme/Colors';
import {updateTodoTaskList} from '../../../redux/tasks/TasksActions';
import Strings from '../../../strings/Strings';
import styles from '../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function AddTaskTodo(props) {
  const [title, onChangeTitle] = useState('');
  const [desc, onChangeDescription] = useState('');

  const addToDoTask = (title, desc) => {
    if (checkValidation()) {
      let todoList = [...props.todoList];
      todoList.push({title: title, description: desc, done: false});
      props.updateTodoTaskList(todoList);
      props.navigation.goBack();
    }
  };

  const checkValidation = () => {
    if (title === '') {
      alert(Strings.err_task_title);
      return;
    } else if (desc === '') {
      alert(Strings.err_task_desc);
      return;
    }
    return true;
  };

  return (
    <View style={styles.addToDoContainer}>
      <TextInput
        autoFocus
        style={styles.titleInput}
        placeholder={Strings.txtTaskTitle}
        placeholderTextColor={Colors.black}
        onChangeText={(text) => onChangeTitle(text)}
        value={title}
      />

      <TextInput
        style={styles.descInput}
        placeholder={Strings.txtTaskDescription}
        placeholderTextColor={Colors.black}
        onChangeText={(text) => onChangeDescription(text)}
        value={desc}
        multiline={true}
      />

      <TouchableOpacity
        style={styles.addTaskButton}
        onPress={(_) => {
          addToDoTask(title, desc);
        }}>
        <Text style={styles.addTaskText}>{Strings.txtAddTask}</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => ({
  ...state.taskState,
});

const mapDispatchToProps = {
  updateTodoTaskList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskTodo);
