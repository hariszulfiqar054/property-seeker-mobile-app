import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SafeWrapper from '../../../shared/components/safeWrapper';
import * as Work from '../../../shared/exporter';
import Header from '../../../shared/components/header';
import NotAvailable from '../../../shared/components/notAvailable';
import PropertyCard from '../../../shared/components/propertyCard';

const {WP} = Work;
const SearchResult = ({navigation, route}) => {
  const data = route?.params?.result;
  const renderItem = ({item}) => (
    <View style={{marginVertical: WP('3'), alignSelf: 'center'}}>
      <PropertyCard
        onPress={() =>
          navigation.navigate('propertyDetail', {
            img: item?.img[0],
            price: item?.starting_bid,
            area: item?.area,
            bedroom: item?.bedroom,
            bathroom: item?.bathroom,
            city: item?.city,
            country: item?.country,
            isHot: item?.isHot,
            description: item?.description,
          })
        }
        img={item?.img[0]}
        price={item?.starting_bid}
        area={item?.area}
        bedroom={item?.bedroom}
        bathroom={item?.bathroom}
        city={item?.city}
        country={item?.country}
        isHot={item?.isHot}
        description={item?.description}
      />
    </View>
  );

  return (
    <SafeWrapper>
      <Header label="search result" isBack navigation={navigation} />
      {data?.length === 0 ? (
        <View style={styles.label}>
          <NotAvailable
            label="No Property Found"
            iconSize={WP('30')}
            labelSize={{fontSize: WP('7')}}
          />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item?._id}
        />
      )}
    </SafeWrapper>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  label: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
