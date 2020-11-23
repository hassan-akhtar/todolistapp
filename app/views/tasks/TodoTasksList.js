import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import Routes from '../../navigation/Routes';
import GeneralStyles from '../../theme/GeneralStyles';
import {
  updateTodoTaskList,
  updateDoneTaskList,
} from '../../redux/tasks/TasksActions';
import styles from './styles';
import {TaskListItem} from './components/TaskListItem';

function ToDoTasksList(props) {
  const markTaskAsDone = (item) => {
    updateDoneList(item);
    updateToDoList(item);
  };

  const updateDoneList = (item) => {
    let todoList = [...props.todoList];
    let doneList = [...props.doneList];
    var index = todoList.indexOf(item);
    if (index !== -1) {
      doneList.push({
        title: item.title,
        description: item.description,
        done: true,
      });
      props.updateDoneTaskList(doneList);
    }
  };

  const updateToDoList = (item) => {
    let todoList = [...props.todoList];
    var index = todoList.indexOf(item);
    if (index !== -1) {
      todoList.splice(index, 1);
      props.updateTodoTaskList(todoList);
    }
  };

  return (
    <View style={GeneralStyles.whiteBackground}>
      <FlatList
        style={styles.todoList}
        data={props.todoList}
        renderItem={({item}) => (
          <TaskListItem
            item={item}
            onPressDone={(item) => markTaskAsDone(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={(_) => props.navigation.navigate(Routes.addTaskTodo)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => ({
  ...state.taskState,
});

const mapDispatchToProps = {
  updateTodoTaskList,
  updateDoneTaskList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTasksList);
