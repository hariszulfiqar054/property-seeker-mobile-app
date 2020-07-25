import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import * as Work from '../exporter';
import BtnWrapper from './btnWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CrossIcon from 'react-native-vector-icons/Entypo';

const {WP} = Work;
const ListPropertyCard = ({
  onPressApproved,
  onPressDelete,
  img,
  price,
  bid_by,
  city,
  country,
  bid_price,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        />
        <View style={styles.txtContainer}>
          <Text style={[styles.txt, {fontWeight: 'bold'}]}>Rs. {price}</Text>
          <Text style={[styles.txt, {color: Work.COLOR.grey}]}>
            {city}, {country}
          </Text>
        </View>
      </View>
      {onPressApproved && onPressDelete ? (
        <View style={{position: 'absolute', right: '2%', top: '15%'}}>
          <BtnWrapper press={onPressApproved}>
            <Icon
              style={{padding: WP('1')}}
              name="check-circle"
              color="#d3de32"
              size={WP('7')}
            />
          </BtnWrapper>
          <BtnWrapper press={onPressDelete}>
            <CrossIcon
              style={{padding: WP('1'), marginTop: WP('2')}}
              name="circle-with-cross"
              color="#d92027"
              size={WP('7')}
            />
          </BtnWrapper>
        </View>
      ) : null}
      {bid_by && bid_price ? (
        <View style={styles.bidContainer}>
          <Text>
            <Text style={styles.bid_by}>Bid by: {bid_by}</Text>
            <Text style={styles.bid_price}>
              {'    '}New Bid: {bid_price}
            </Text>
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default ListPropertyCard;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: WP('30'),
    elevation: 4,
    borderColor: '#000',
    alignSelf: 'center',
    marginVertical: WP('3'),
  },
  subContainer: {
    flexDirection: 'row',
  },

  img: {width: WP('30'), height: WP('30')},
  txt: {
    fontSize: WP('4'),
    padding: WP('1'),
  },
  txtContainer: {
    marginTop: WP('2'),
    marginLeft: WP('2'),
  },
  bid_by: {
    fontWeight: 'bold',
    fontSize: WP('3.5'),
  },
  bid_price: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: WP('3.5'),
  },
  bidContainer: {
    position: 'absolute',
    bottom: '2%',
    left: '33%',
  },
});
