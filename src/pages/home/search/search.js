import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import SafeWrapper from '../../../shared/components/safeWrapper';
import Header from '../../../shared/components/header';
import * as Work from '../../../shared/exporter';
import Button from './components/btn';
import Qty from './components/qtyBtn';

const {WP} = Work;
const Search = ({navigation}) => {
  const [isBuy, setIsBuy] = useState(true);
  return (
    <SafeWrapper>
      <Header label="search" />
      <View style={styles.btnContainer}>
        <Button label="buy" isSelected={isBuy} onPress={() => setIsBuy(true)} />
        <Button
          label="rent"
          isSelected={!isBuy}
          onPress={() => setIsBuy(false)}
        />
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationTxt}>Location</Text>
        <Input placeholder="Enter City Name" inputStyle={styles.inputStyle} />
      </View>
      <View style={styles.btnContainer}>
        <Qty label="Bedroom" qty={0} />
        <Qty label="Bathroom" qty={0} />
      </View>
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
    padding: 0,
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
