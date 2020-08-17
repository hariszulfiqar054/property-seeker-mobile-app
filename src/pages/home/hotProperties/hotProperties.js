import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SafeWrapper from '../../../shared/components/safeWrapper';
import Header from '../../../shared/components/header';
import PropertyCard from '../../../shared/components/propertyCard';
import NotAvailable from '../../../shared/components/notAvailable';
import * as Work from '../../../shared/exporter';
import axios from 'axios';
import {SkypeIndicator} from 'react-native-indicators';

const {WP} = Work;
const HotProperties = ({navigation}) => {
  const [hotProperties, setHotProperties] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    getHotProperties();
  }, []);

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
            id: item?._id,
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
  const getHotProperties = async () => {
    const isConnected = Work.checkInternetConnection();
    if (isConnected) {
      setLoading(true);
      try {
        const response = await axios.get('property/hotProperties');
        if (response?.data?.data) {
          setHotProperties(response?.data?.data);
        }
      } catch (error) {
        Work.showToast('Server Timeout');
      }
      setLoading(false);
    } else {
      Work.showToast(Work.INTERNET_CONNECTION_ERROR);
    }
  };
  return (
    <SafeWrapper>
      <Header label="hot properties" />
      {hotProperties?.length === 0 ? (
        <View style={styles.loaderStyle}>
          <NotAvailable
            label="No Property Found"
            iconSize={WP('30')}
            labelSize={{fontSize: WP('7')}}
          />
        </View>
      ) : (
        <>
          {isLoading && hotProperties?.length === 0 ? (
            <View style={styles.loaderStyle}>
              <SkypeIndicator color={Work.COLOR.primary} animating={true} />
            </View>
          ) : (
            <FlatList
              data={hotProperties}
              renderItem={renderItem}
              keyExtractor={(item) => item?._id}
              onRefresh={getHotProperties}
              refreshing={isLoading}
            />
          )}
        </>
      )}
    </SafeWrapper>
  );
};

export default HotProperties;

const styles = StyleSheet.create({
  loaderStyle: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
