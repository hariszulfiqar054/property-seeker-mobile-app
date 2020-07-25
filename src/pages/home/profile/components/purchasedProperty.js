import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ListPropertyCard from '../../../../shared/components/listPropertyCard';

const PurchasedProperty = () => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <ListPropertyCard
          img="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          price="200424"
          city="Lahore"
          country="Pakistan"
          bid_by="55asd"
          bid_price="2332"
        />
      </View>
    </ScrollView>
  );
};

export default PurchasedProperty;

const styles = StyleSheet.create({});
