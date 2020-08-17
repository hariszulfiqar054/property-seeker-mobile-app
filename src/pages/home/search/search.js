import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import SafeWrapper from '../../../shared/components/safeWrapper';
import AreaModel from './components/areaModel';
import Header from '../../../shared/components/header';
import * as Work from '../../../shared/exporter';
import Button from './components/btn';
import Qty from './components/qtyBtn';
import DropDownBtn from './components/dropDownBtn';
import SearchBtn from './components/searchBtn';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import * as JOBS from '../../../store/action.exporter';

const {WP} = Work;
const Search = ({navigation}) => {
  const [isBuy, setIsBuy] = useState(true);
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [showAreaModel, setAreaModel] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [city, setCity] = useState(null);
  const area = useSelector((state) => state?.search?.area);
  const dispatch = useDispatch();

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
  const resetSearch = () => {
    setBathroom(0);
    setBedroom(0);
    setCity(null);
    dispatch(JOBS.setArea(null));
  };

  const searchHandler = async () => {
    const isConnected = Work.checkInternetConnection();
    if (isConnected) {
      setLoading(true);
      try {
        const response = await axios.post('property/searchproperty', {
          city: city,
          bedroom: bedroom,
          bathroom: bathroom,
          property_type: isBuy ? 'buy' : 'rent',
          area: area,
        });
        if (response?.data?.data) {
          resetSearch();
          navigation.navigate('searchResult', {result: response?.data?.data});
        }
      } catch (error) {
        Work.showToast('Server Timeout');
      }
      setLoading(false);
    } else Work.showToast(Work.INTERNET_CONNECTION_ERROR);
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
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => setCity(text)}
              value={city}
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
          <View style={[{marginTop: WP('15')}]}>
            <DropDownBtn
              label={area ? area : 'Area'}
              onPress={() => setAreaModel(!showAreaModel)}
            />
          </View>
        </View>
        <View style={{marginVertical: WP('3')}}>
          <SearchBtn
            label="search"
            onPress={searchHandler}
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
      <AreaModel
        isVisible={showAreaModel}
        onBackdropPress={() => setAreaModel(false)}
      />
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
