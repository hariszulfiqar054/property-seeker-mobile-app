import React, {Children} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import SafeWrapper from '../components/safeWrapper';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import * as Work from '../../shared/exporter';
import Btn from '../components/btnWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const {WP, HP} = Work;
const AuthWrapper = ({name, navigation, isBack, children}) => {
  return (
    <SafeWrapper>
      <KeyboardAwareScrollView>
        <ImageBackground
          style={styles.imgBg}
          source={require('../../assets/bg.png')}>
          {isBack && (
            <Btn press={() => navigation.goBack()}>
              <BackIcon
                style={{position: 'absolute', top: '3%', left: '3%'}}
                name="arrow-back"
                color={Work.COLOR.white}
                size={WP('7')}
              />
            </Btn>
          )}

          <Text style={styles.signIn}>{name}</Text>

          <HomeIcon
            style={styles.iconStyle}
            name="building"
            color={Work.COLOR.white}
            size={WP('20')}
          />
          {children}
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeWrapper>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  imgBg: {
    width: WP('100'),
    height: HP('95'),
  },
  signIn: {
    color: Work.COLOR.white,
    fontSize: WP('6'),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: WP('7'),
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: WP('10'),
  },
});
