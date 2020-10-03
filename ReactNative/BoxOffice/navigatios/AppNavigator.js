import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BoxOfficeNavigator from './BoxOfficeNavigator';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BoxOffice" component={BoxOfficeNavigator} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
