//import liraries
import React, {Component} from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

// create a component
const KidsTouch = ({children, press}) => {
  return Platform.OS == 'android' ? (
    <TouchableNativeFeedback onPress={press}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={press}>{children}</TouchableOpacity>
  );
};

//make this component available to the app
export default KidsTouch;
