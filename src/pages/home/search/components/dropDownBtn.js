import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../../../../shared/exporter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BtnWrapper from '../../../../shared/components/btnWrapper';

const {WP} = Work;
const DropDownBtn = ({onPress, label}) => {
  return (
    <BtnWrapper press={onPress}>
      <View style={styles.container}>
        <Text style={styles.txt}>{label}</Text>
        <Icon
          style={styles.icon}
          name="arrow-drop-down"
          color={Work.COLOR.white}
          size={WP('7')}
        />
      </View>
    </BtnWrapper>
  );
};

export default DropDownBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Work.COLOR.primary,
    width: '90%',
    elevation: 6,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: WP('12'),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  txt: {
    color: Work.COLOR.white,
    fontSize: WP('4.5'),
    padding: WP('2'),
  },
  icon: {
    position: 'absolute',
    right: '1%',
  },
});
