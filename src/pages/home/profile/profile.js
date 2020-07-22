import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SafeWrapper from '../../../shared/components/authWrapper';
import PersonIcon from './components/icon';
import TopTabs from '../../../tabNavigator/topTabNavigator';
import {WP} from '../../../shared/exporter';

const Profile = () => {
  return (
    <SafeWrapper>
      <PersonIcon name="Haris" />
      <View style={styles.tabContainer}>
        <TopTabs />
      </View>
    </SafeWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tabContainer: {flex: 1, marginTop: WP('6')},
});
