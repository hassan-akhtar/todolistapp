import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import GeneralStyles from '../../theme/GeneralStyles';
import styles from './styles';
import {TaskListItem} from './components/TaskListItem';

function DoneTasksList(props) {
  return (
    <View style={GeneralStyles.whiteBackground}>
      <FlatList
        style={styles.todoList}
        data={props.doneList}
        renderItem={({item}) => <TaskListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  ...state.taskState,
});

export default connect(mapStateToProps, null)(DoneTasksList);
