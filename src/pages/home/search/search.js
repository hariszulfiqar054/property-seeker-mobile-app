import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import SafeWrapper from '../../../shared/components/safeWrapper';
import Header from '../../../shared/components/header';
import * as Work from '../../../shared/exporter';
import Button from './components/btn';
import Qty from './components/qtyBtn';
import DropDownBtn from './components/dropDownBtn';
import SearchBtn from './components/searchBtn';

const {WP} = Work;
const Search = ({navigation}) => {
  const [isBuy, setIsBuy] = useState(true);
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);

  const bedroomHandler = (action) => {
    if (action == 'inc') {
      setBedroom(bedroom + 1);
    }
    if (action == 'dec' && bedroom > 0) {
      setBedroom(bedroom - 1);
    }
  };

  const bathroomHandler = (action) => {
    if (action == 'inc') {
      setBathroom(bathroom + 1);
    }
    if (action == 'dec' && bathroom > 0) {
      setBathroom(bathroom - 1);
    }
  };
  return (
    <SafeWrapper>
      <Header label="search" />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.btnContainer}>
            <Button
              label="buy"
              isSelected={isBuy}
              onPress={() => setIsBuy(true)}
            />
            <Button
              label="rent"
              isSelected={!isBuy}
              onPress={() => setIsBuy(false)}
            />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationTxt}>Location</Text>
            <Input
              placeholder="Enter City Name"
              inputStyle={styles.inputStyle}
            />
          </View>
          <View style={styles.btnContainer}>
            <Qty
              label="Bedroom"
              qty={bedroom}
              onPressDec={() => bedroomHandler('dec')}
              onPressInc={() => bedroomHandler('inc')}
            />
            <Qty
              label="Bathroom"
              qty={bathroom}
              onPressDec={() => bathroomHandler('dec')}
              onPressInc={() => bathroomHandler('inc')}
            />
          </View>
          <View style={[styles.btnContainer, {marginTop: WP('15')}]}>
            <DropDownBtn label="City" />
            <DropDownBtn label="Area" />
          </View>
        </View>
        <View>
          <SearchBtn label="search" />
        </View>
      </ScrollView>
    </SafeWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  btnContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: WP('5'),
  },
  inputStyle: {
    fontSize: WP('4'),
    padding: WP('2'),
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Work.COLOR.grey,
    borderRadius: 5,
  },
  locationTxt: {
    padding: WP(2),
    marginLeft: WP('1'),
    fontSize: WP('4.5'),
    fontWeight: 'bold',
  },
  locationContainer: {
    alignSelf: 'center',
    width: '100%',
    marginTop: WP('4'),
  },
});
