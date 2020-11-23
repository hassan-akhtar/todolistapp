import {UpdateTodoTaskList, UpdateDoneTaskList} from './Types';

export const updateTodoTaskList = (taskList) => (dispatch) => {
  dispatch({
    type: UpdateTodoTaskList,
    payload: taskList,
  });
};

export const updateDoneTaskList = (taskList) => (dispatch) => {
  dispatch({
    type: UpdateDoneTaskList,
    payload: taskList,
  });
};
