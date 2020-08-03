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
const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.user?.user?.name);

  // const getData = async () => {
  //   const isConnected = Work.checkInternetConnection();
  //   if (isConnected) {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get('property/posted');
  //       setProperties(response?.data?.data);
  //     } catch (error) {
  //       Work.showToast('Server Timeout');
  //     }
  //     setLoading(false);
  //   } else Work.showToast(Work.INTERNET_CONNECTION_ERROR);
  // };

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
});
