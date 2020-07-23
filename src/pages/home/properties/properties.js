import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SafeWrapper from '../../../shared/components/authWrapper';
import PropertyCard from '../../../shared/components/propertyCard';
import Header from '../../../shared/components/header';
import PropertyOption from './components/propertyOptions';

const Properties = ({navigation}) => {
  const [isBuy, setIsBuy] = useState(true);

  return (
    <SafeWrapper>
      <View style={styles.headerContainer}>
        <Header label="home" />
      </View>
      <PropertyOption
        propertyType={isBuy}
        onPressBuy={() => setIsBuy(true)}
        onPressRent={() => setIsBuy(false)}
      />
    </SafeWrapper>
  );
};

export default Properties;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: '3%',
    alignSelf: 'center',
  },
});
