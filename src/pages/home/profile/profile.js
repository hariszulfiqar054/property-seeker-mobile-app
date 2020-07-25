import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SafeWrapper from '../../../shared/components/authWrapper';
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
  return (
    <SafeWrapper>
      <BtnWrapper press={() => dispatch(JOBS.saveUser(null))}>
        <Icon
          style={styles.icon}
          name="logout"
          color={Work.COLOR.white}
          size={WP('7')}
        />
      </BtnWrapper>
      <PersonIcon name={name} />
      <View style={styles.tabContainer}>
        <TopTabs />
      </View>
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
