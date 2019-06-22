/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

console.ignoredYellowBox = ['Warning:'];

//Disable Yellow Warnings
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

// navigation
import Navigation from './Navigation';

// reducers
import combineReducer from './ducks';

let store = createStore(combineReducer, applyMiddleware(logger));

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
