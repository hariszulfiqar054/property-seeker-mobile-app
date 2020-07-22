import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Info from '../pages/home/profile/components/info';
import Property from '../pages/home/profile/components/propertyByUser';
import * as Work from '../shared/exporter';
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: Work.COLOR.primary}}>
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Properties" component={Property} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
