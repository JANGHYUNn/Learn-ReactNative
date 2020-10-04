import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BoxOfficeNavigator from './BoxOfficeNavigator';
import SearchNavigator from './SearchNavigator';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BoxOffice"
        component={BoxOfficeNavigator}
        options={{drawerLabel: '박스 오피스'}}
      />
      <Drawer.Screen
        name="Search"
        component={SearchNavigator}
        options={{drawerLabel: '영화 검색'}}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
