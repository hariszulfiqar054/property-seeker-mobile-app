import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../exporter';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import BtnWrapper from './btnWrapper';

const {WP} = Work;
const Header = ({navigation, isBack, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {isBack && (
          <BtnWrapper press={() => navigation.goBack()}>
            <BackIcon
              style={{position: 'absolute', left: '2%'}}
              name="arrow-back"
              size={WP('7')}
              color={Work.COLOR.white}
            />
          </BtnWrapper>
        )}

        <Text style={styles.txt}>{label?.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Work.COLOR.primary,
    height: '7%',
    justifyContent: 'center',
  },
  txt: {
    color: Work.COLOR.white,
    textAlign: 'center',
    fontSize: WP('5'),
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
