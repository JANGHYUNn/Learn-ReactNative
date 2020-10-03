/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BoxOfficeNavigator from './navigatios/BoxOfficeNavigator';
import AppNavigator from './navigatios/AppNavigator';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer theme={Theme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
