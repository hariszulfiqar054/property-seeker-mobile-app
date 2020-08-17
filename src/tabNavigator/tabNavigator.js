import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HotProperties from '../pages/home/hotProperties/hotProperties';
import Profile from '../pages/home/profile/profile';
import Search from '../pages/home/search/search';
import MainScreen from '../pages/home/properties/properties';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import HotIcon from 'react-native-vector-icons/Fontisto';
import * as Work from '../shared/exporter';

const {WP} = Work;
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main screen"
      tabBarOptions={{activeTintColor: Work.COLOR.primary}}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcon
              name="home"
              color={focused ? Work.COLOR.primary : 'grey'}
              size={27}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <SearchIcon
              name="search1"
              color={focused ? Work.COLOR.primary : 'grey'}
              size={27}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hot Properties"
        component={HotProperties}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <HotIcon
              name="fire"
              color={focused ? Work.COLOR.primary : 'grey'}
              size={27}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcon
              name="person"
              color={focused ? Work.COLOR.primary : 'grey'}
              size={27}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
