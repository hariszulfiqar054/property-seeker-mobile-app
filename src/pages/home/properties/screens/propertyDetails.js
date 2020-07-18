import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SafeWrapper from '../../../../shared/components/safeWrapper';
import Header from '../../../../shared/components/header';

const PropertyDetails = ({navigation, route}) => {
  return (
    <SafeWrapper>
      <Header label="property detail" isBack navigation={navigation} />
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: route?.params?.img}} />
      </View>
    </SafeWrapper>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({
  imgContainer: {
    // borderWidth: 1,
    height: '40%',
    width: '100%',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
  },
});
