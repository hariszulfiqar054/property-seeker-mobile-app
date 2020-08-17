import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Info from '../pages/home/profile/components/info';
import Property from '../pages/home/profile/components/postedProperty';
import PurchasedProperty from '../pages/home/profile/components/purchasedProperty';
import * as Work from '../shared/exporter';
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: Work.COLOR.primary}}>
      <Tab.Screen name="Personal Information" component={Info} />
      <Tab.Screen name="Posted Properties" component={Property} />
      <Tab.Screen name="Purchased Properties" component={PurchasedProperty} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
