import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import SafeWrapper from '../../../../shared/components/safeWrapper';
import * as Work from '../../../../shared/exporter';
import axios from 'axios';
import Card from '../../../../shared/components/listPropertyCard';
import {SkypeIndicator} from 'react-native-indicators';
import NotAvailable from '../../../../shared/components/notAvailable';

const {WP} = Work;
const PropertyByUser = () => {
  const [postedProperty, setPostedProperty] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getPosted();
  }, []);
  const getPosted = async () => {
    const isConnected = Work.checkInternetConnection();
    if (isConnected) {
      setLoading(true);
      try {
        const response = await axios.get('property/posted');
        setPostedProperty(response?.data?.data);
      } catch (error) {
        Work.showToast('Server Timeout');
      }
      setLoading(false);
    } else Work.showToast(Work.INTERNET_CONNECTION_ERROR);
  };
  return (
    <SafeWrapper>
      <View style={{flex: 1}}>
        {postedProperty?.length === 0 ? (
          <View style={styles.loader}>
            <NotAvailable iconSize={WP('19')} label="Property Not Available" />
          </View>
        ) : (
          <>
            {isLoading && postedProperty?.length === 0 ? (
              <View style={styles.loader}>
                <SkypeIndicator animating={true} color={Work.COLOR.primary} />
              </View>
            ) : (
              <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                refreshControl={
                  <RefreshControl
                    onRefresh={getPosted}
                    refreshing={isLoading}
                  />
                }>
                {postedProperty?.map((data) => (
                  <Card
                    key={data?._id}
                    img={data?.img[0]}
                    price={data?.starting_bid}
                    city={data?.city}
                    country={data?.country}
                    bid_by={data?.bid_by}
                    bid_price={data?.new_bid}
                    onPressApproved={() => console.log('hi')}
                    onPressDelete={() => console.log('hi')}
                  />
                ))}
              </ScrollView>
            )}
          </>
        )}
      </View>
    </SafeWrapper>
  );
};

export default PropertyByUser;

const styles = StyleSheet.create({
  loader: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
