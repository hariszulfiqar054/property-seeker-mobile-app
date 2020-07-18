import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/auth/login/login';
import Signup from '../pages/auth/signup/signup';
import Dashboard from '../tabNavigator/tabNavigator';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Signup}
          name="signup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dashboard}
          name="dashboard"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
