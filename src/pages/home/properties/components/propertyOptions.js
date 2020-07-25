import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BtnWrapper from '../../../../shared/components/btnWrapper';
import * as Work from '../../../../shared/exporter';

const {WP} = Work;
const PropertyOptions = ({onPressBuy, onPressRent, propertyType}) => {
  return (
    <View style={styles.container}>
      <BtnWrapper press={onPressBuy}>
        <View
          style={[
            styles.txtContainer,
            propertyType ? styles.activeBackground : styles.nonActiveBg,
          ]}>
          <Text
            style={[
              styles.txt,
              propertyType ? styles.activeText : styles.nonActiveText,
            ]}>
            BUY
          </Text>
        </View>
      </BtnWrapper>
      <BtnWrapper press={onPressRent}>
        <View
          style={[
            styles.txtContainer,
            !propertyType ? styles.activeBackground : styles.nonActiveBg,
          ]}>
          <Text
            style={[
              styles.txt,
              !propertyType ? styles.activeText : styles.nonActiveText,
            ]}>
            RENT
          </Text>
        </View>
      </BtnWrapper>
    </View>
  );
};

export default PropertyOptions;

const styles = StyleSheet.create({
  activeBackground: {
    backgroundColor: Work.COLOR.white,
  },
  activeText: {
    color: Work.COLOR.black,
  },
  nonActiveBg: {
    backgroundColor: Work.COLOR.primary,
  },
  nonActiveText: {
    color: Work.COLOR.white,
  },
  container: {
    borderColor: Work.COLOR.white,
    borderWidth: 1,
    height: WP('10'),
    width: '45%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 6,
  },
  txtContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: WP('4'),
    fontWeight: 'bold',
  },
});
