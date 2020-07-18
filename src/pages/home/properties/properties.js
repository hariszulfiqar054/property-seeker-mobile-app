import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SafeWrapper from '../../../shared/components/authWrapper';
import PropertyCard from '../../../shared/components/propertyCard';

const Properties = ({navigation}) => {
  return (
    <SafeWrapper>
      <PropertyCard
        onPress={() =>
          navigation.navigate('propertyDetail', {
            img:
              'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg',
          })
        }
        img="https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg"
        area="4000 sq ft"
        bedroom="2"
        bathroom="3"
        city="Lahore"
        country="Pakistan"
        price="234909"
      />
    </SafeWrapper>
  );
};

export default Properties;

const styles = StyleSheet.create({});
