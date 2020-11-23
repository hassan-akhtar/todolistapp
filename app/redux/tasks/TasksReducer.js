import {UpdateTodoTaskList, UpdateDoneTaskList} from './Types';

const initialState = {
  todoList: [
    {
      title: 'Review Todo List App',
      description: 'Review and test the app developed by Hassan Qureshi',
      done: false,
    },
  ],
  doneList: [
    {
      title: 'Develop Todo List App',
      description: 'Develop React Native App for managing todo tasks',
      done: true,
    },
  ],
};

export default function ToDoReducer(state = initialState, action) {
  switch (action.type) {
    case UpdateTodoTaskList:
      return {
        ...state,
        todoList: action.payload,
      };
    case UpdateDoneTaskList:
      return {
        ...state,
        doneList: action.payload,
      };
  }
  return state;
}
