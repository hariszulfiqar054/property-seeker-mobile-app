import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BtnWrapper from '../../../../shared/components/btnWrapper';
import * as Work from '../../../../shared/exporter';

const {WP} = Work;
const Btn = ({onPress, label, style, isSelected}) => {
  return (
    <BtnWrapper press={onPress}>
      <View
        style={[
          styles.container,
          style,
          isSelected ? styles.selected : styles.notSelected,
        ]}>
        <Text
          style={[
            styles.txt,
            isSelected ? styles.selectedTxt : styles.notSelectedText,
          ]}>
          {label?.toUpperCase()}
        </Text>
      </View>
    </BtnWrapper>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    width: WP('25'),
    height: WP('12'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    elevation: 7,
  },
  txt: {
    fontSize: WP('4'),
    color: 'black',
    padding: WP(2),
    fontWeight: 'bold',
  },
  notSelected: {
    backgroundColor: '#e4e3e3',
  },
  notSelectedText: {
    color: Work.COLOR.grey,
  },
  selected: {
    backgroundColor: Work.COLOR.primary,
  },
  selectedTxt: {
    color: Work.COLOR.white,
  },
});
