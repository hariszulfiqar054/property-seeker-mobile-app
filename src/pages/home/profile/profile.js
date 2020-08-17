import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import SafeWrapper from '../../../shared/components/safeWrapper';
import BtnWrapper from '../../../shared/components/btnWrapper';
import {useDispatch, useSelector} from 'react-redux';
import PersonIcon from './components/icon';
import TopTabs from '../../../tabNavigator/topTabNavigator';
import * as Work from '../../../shared/exporter';
import * as JOBS from '../../../store/action.exporter';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {WP} = Work;
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.user?.user?.name);

  return (
    <SafeWrapper>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../assets/bg.png')}>
        <BtnWrapper press={() => dispatch(JOBS.saveUser(null))}>
          <Icon
            style={styles.icon}
            name="logout"
            color={Work.COLOR.white}
            size={WP('7')}
          />
        </BtnWrapper>
        <View style={{marginTop: WP('15')}}>
          <PersonIcon name={name} />
        </View>
        <BtnWrapper press={() => navigation.navigate('postProperty')}>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Post a Property</Text>
          </View>
        </BtnWrapper>
        <View style={styles.tabContainer}>
          <TopTabs />
        </View>
      </ImageBackground>
    </SafeWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tabContainer: {flex: 1, marginTop: WP('6')},
  icon: {
    position: 'absolute',
    right: '4%',
    top: '3%',
  },
  txt: {
    color: Work.COLOR.white,
    fontWeight: 'bold',
    fontSize: WP('4.5'),
  },
  txtContainer: {
    position: 'absolute',
    top: '3%',
    left: '4%',
  },
});
