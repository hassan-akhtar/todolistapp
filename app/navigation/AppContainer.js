import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import SplashScreen from '../views/splash/SplashScreen';
import TodoTasksList from '../views/tasks/TodoTasksList';
import DoneTasksList from '../views/tasks/DoneTasksList';
import AddTaskTodo from '../views/tasks/addTask/AddTaskTodo';
import MainScreen from '../views/main/MainScreen';
import Strings from '../strings/Strings';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={Routes.splashScreen}
          component={SplashScreen}
        />
        <Stack.Screen
          options={{title: Strings.txtMyTasks}}
          name={Routes.mainScreen}
          component={MainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={Routes.todoTasks}
          component={TodoTasksList}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={Routes.doneTasks}
          component={DoneTasksList}
        />
        <Stack.Screen
          options={{
            title: Strings.txtNewTodoTask,
            headerBackTitle: Strings.txtBack,
          }}
          name={Routes.addTaskTodo}
          component={AddTaskTodo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
