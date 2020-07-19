import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import SafeWrapper from '../../../../shared/components/safeWrapper';
import Header from '../../../../shared/components/header';
import * as Work from '../../../../shared/exporter';
import LocationIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BathIcon from 'react-native-vector-icons/FontAwesome';
import BtnWrapper from '../../../../shared/components/btnWrapper';
import HotIcon from 'react-native-vector-icons/Fontisto';

const {WP} = Work;
const PropertyDetails = ({navigation, route}) => {
  return (
    <SafeWrapper>
      <Header label="property detail" isBack navigation={navigation} />
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{uri: route?.params?.img}} />
          </View>
          <View>
            <Text style={styles.price}>Rs. {route?.params?.price}</Text>
            <View style={styles.locationContainer}>
              <LocationIcon
                name="location"
                size={WP('4')}
                color={Work.COLOR.grey}
              />
              <Text style={styles.txt}>
                <Text>{route?.params?.city}, </Text>
                <Text>{route?.params?.country}</Text>
              </Text>
            </View>
            {route?.params?.isHot && (
              <View
                style={[
                  styles.locationContainer,
                  {position: 'absolute', right: '5%', top: '9%'},
                ]}>
                <Text style={{color: '#f07f13', fontWeight: 'bold'}}>
                  Hot Choices
                </Text>
                <HotIcon
                  style={{marginLeft: WP('1')}}
                  name="fire"
                  size={WP('4')}
                  color="#f27d0c"
                />
              </View>
            )}
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Icon name="bed" color={Work.COLOR.yellow} size={WP('6.5')} />
              <Text style={styles.infoText}>{route?.params?.bedroom}</Text>
            </View>
            <View style={styles.iconContainer}>
              <BathIcon
                name="bathtub"
                color={Work.COLOR.yellow}
                size={WP('6.5')}
              />
              <Text style={styles.infoText}>{route?.params?.bathroom}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="arrow-top-right-bottom-left"
                color={Work.COLOR.yellow}
                size={WP('6.5')}
              />
              <Text style={styles.infoText}>{route?.params?.area}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={{textAlign: 'left'}}>
              {route?.params?.description}
            </Text>
          </View>
          <BtnWrapper>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>PLACE BID</Text>
            </View>
          </BtnWrapper>
        </ScrollView>
      </View>
    </SafeWrapper>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({
  imgContainer: {
    height: '40%',
    width: '100%',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
  },
  price: {
    fontSize: WP('5'),
    fontWeight: 'bold',
    padding: WP('1'),
    marginLeft: WP('1.5'),
  },
  txt: {
    color: Work.COLOR.grey,
    fontSize: WP('4.5'),
    marginLeft: WP('1.5'),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: WP('2'),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    width: '33.5%',
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
  },
  infoContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '8%',
    marginTop: WP('5'),
  },
  infoText: {
    fontSize: WP('4'),
    fontWeight: 'bold',
    marginLeft: WP('1.5'),
  },
  descriptionContainer: {
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    width: '95%',
    alignSelf: 'center',
    marginTop: WP('3'),
  },
  descriptionTitle: {
    fontSize: WP('5'),
    fontWeight: 'bold',
  },
  btnContainer: {
    width: '90%',
    backgroundColor: Work.COLOR.yellow,
    height: WP('12'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    elevation: 6,
    marginTop: WP('3'),
  },
  btnText: {
    fontSize: WP('4.5'),
    fontWeight: 'bold',
  },
});
