import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {store} from './app/redux/store';
import AppContainer from './app/navigation/AppContainer';

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </Provider>
  );
}
