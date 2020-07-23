import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

const SafeWrapper = ({children, style}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
});
export default SafeWrapper;
