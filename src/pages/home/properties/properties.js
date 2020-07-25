import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SafeWrapper from '../../../shared/components/authWrapper';
import {Input} from 'react-native-elements';
import PropertyCard from '../../../shared/components/propertyCard';
import Header from '../../../shared/components/header';
import PropertyOption from './components/propertyOptions';
import * as Work from '../../../shared/exporter';
import BtnWrapper from '../../../shared/components/btnWrapper';
import SearchIcon from 'react-native-vector-icons/AntDesign';

const {WP} = Work;
const Properties = ({navigation}) => {
  const [isBuy, setIsBuy] = useState(true);

  return (
    <SafeWrapper>
      <View style={styles.headerContainer}>
        <Header label="home" />
      </View>
      <PropertyOption
        propertyType={isBuy}
        onPressBuy={() => setIsBuy(true)}
        onPressRent={() => setIsBuy(false)}
      />
      <Input
        placeholder="Search By City"
        containerStyle={styles.inputContainer}
        inputContainerStyle={{borderBottomWidth: 0}}
        inputStyle={{fontSize: WP('4')}}
        rightIcon={
          <BtnWrapper>
            <SearchIcon name="search1" size={WP('5')} color={Work.COLOR.grey} />
          </BtnWrapper>
        }
        onSubmitEditing={() => console.log('asd')}
      />
    </SafeWrapper>
  );
};

export default Properties;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: '3%',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: Work.COLOR.white,
    height: '7%',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: WP('6'),
    elevation: 6,
  },
});
