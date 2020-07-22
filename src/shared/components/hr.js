import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../exporter';

const Hr = ({style}) => {
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: Work.COLOR.grey,
          width: '100%',
          opacity: 0.4,
        },
        style,
      ]}></View>
  );
};

export default Hr;

const styles = StyleSheet.create({});
