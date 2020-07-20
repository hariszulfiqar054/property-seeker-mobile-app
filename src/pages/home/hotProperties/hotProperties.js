import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SafeWrapper from '../../../shared/components/safeWrapper';
import Header from '../../../shared/components/header';
import PropertyCard from '../../../shared/components/propertyCard';

const HotProperties = ({navigation}) => {
  useEffect(() => {}, []);

  const getHotProperties = async () => {};
  return (
    <SafeWrapper>
      <Header label="hot properties" />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{alignSelf: 'center', flex: 1}}>
          <PropertyCard
            onPress={() =>
              navigation.navigate('propertyDetail', {
                img:
                  'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg',
                price: '234909',
                area: '4000 sq ft',
                bedroom: '2',
                bathroom: '3',
                city: 'Lahore',
                country: 'Pakistan',
                isHot: true,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              })
            }
            img="https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg"
            area="4000 sq ft"
            bedroom="2"
            bathroom="3"
            city="Lahore"
            country="Pakistan"
            price="234909"
            isHot
          />
        </View>
      </ScrollView>
    </SafeWrapper>
  );
};

export default HotProperties;

const styles = StyleSheet.create({});
