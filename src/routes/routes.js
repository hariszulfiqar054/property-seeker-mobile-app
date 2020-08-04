import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Login from '../pages/auth/login/login';
import Signup from '../pages/auth/signup/signup';
import Dashboard from '../tabNavigator/tabNavigator';
import PropertyDetail from '../pages/home/properties/screens/propertyDetails';
import SearchResult from '../pages/home/searchResult/searchResult';
import PostProperty from '../pages/home/postProperty/postProperty';

const Stack = createStackNavigator();
const Routes = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user === null ? (
          <>
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
              component={PostProperty}
              name="postProperty"
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              component={Dashboard}
              name="dashboard"
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={PropertyDetail}
              name="propertyDetail"
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={SearchResult}
              name="searchResult"
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
