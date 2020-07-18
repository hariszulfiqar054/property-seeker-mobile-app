import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import * as Work from '../exporter';
import BtnWrapper from './btnWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BathIcon from 'react-native-vector-icons/FontAwesome';

const {WP} = Work;
const PropertyCard = ({
  img,
  area,
  bedroom,
  bathroom,
  onPress,
  city,
  country,
  price,
}) => {
  return (
    <BtnWrapper press={onPress}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          {price && <Text style={styles.price}>Rs. {price}</Text>}
          <Text style={styles.price}>
            {city && <Text>{city} ,</Text>}
            {country && <Text>{country}</Text>}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {justifyContent: 'space-around', marginTop: WP('1')},
          ]}>
          {bedroom && (
            <View style={styles.row}>
              <Icon name="bed" color={Work.COLOR.grey} size={WP('6')} />
              <Text style={styles.text}>{bedroom}</Text>
            </View>
          )}
          {bathroom && (
            <View style={styles.row}>
              <BathIcon name="bathtub" color={Work.COLOR.grey} size={WP('6')} />
              <Text style={styles.text}>{bathroom}</Text>
            </View>
          )}

          {area && (
            <View style={styles.row}>
              <Icon
                name="arrow-top-right-bottom-left"
                color={Work.COLOR.grey}
                size={WP('6')}
              />
              <Text style={styles.text}>{area}</Text>
            </View>
          )}
        </View>
      </View>
    </BtnWrapper>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Work.COLOR.white,
    width: WP('65'),
    height: WP('55'),
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    elevation: 6,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
  },
  imgContainer: {width: '100%', height: '70%'},
  text: {
    fontSize: WP('3.5'),
    fontWeight: 'bold',
    paddingHorizontal: WP('2'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontWeight: 'bold',
    fontSize: WP('4'),
    padding: WP('1'),
  },
});
