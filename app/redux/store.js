import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import TasksReducer from './tasks/TasksReducer';

let rootReducer = combineReducers({
  taskState: TasksReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

let store = createStore(rootReducer, enhancer);

export {store};
