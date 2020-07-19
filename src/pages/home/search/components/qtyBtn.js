import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BtnWrapper from '../../../../shared/components/btnWrapper';
import * as Work from '../../../../shared/exporter';

const {WP} = Work;
const QtyBtn = ({onPressInc, qty, onPressDec, label}) => {
  return (
    <View>
      <Text style={styles.labelTxt}>{label}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <BtnWrapper press={onPressInc}>
          <View style={styles.plusBtn}>
            <Icon name="plus" size={WP('5')} color={Work.COLOR.white} />
          </View>
        </BtnWrapper>

        <Text style={styles.qty}>{qty}</Text>
        <BtnWrapper press={onPressDec}>
          <View style={styles.plusBtn}>
            <Icon name="minus" size={WP('5')} color={Work.COLOR.white} />
          </View>
        </BtnWrapper>
      </View>
    </View>
  );
};

export default QtyBtn;

const styles = StyleSheet.create({
  plusBtn: {
    backgroundColor: Work.COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: WP('10'),
    height: WP('10'),
    borderRadius: 100,
  },
  qty: {
    marginHorizontal: WP('2'),
    fontSize: WP('4.5'),
  },
  labelTxt: {
    fontSize: WP('4.5'),
    fontWeight: 'bold',
    padding: WP('2'),
  },
});
