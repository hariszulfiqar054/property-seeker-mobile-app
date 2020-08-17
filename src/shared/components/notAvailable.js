import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../exporter';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotAvailable = ({label, iconSize, labelSize}) => {
  return (
    <View>
      <Icon
        style={{alignSelf: 'center'}}
        name="error-outline"
        size={iconSize}
        color={Work.COLOR.primary}
      />
      <Text style={[{textAlign: 'center'}, labelSize]}>{label}</Text>
    </View>
  );
};

export default NotAvailable;

const styles = StyleSheet.create({});
