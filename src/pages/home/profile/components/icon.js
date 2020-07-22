import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import * as Work from '../../../../shared/exporter';

const {WP} = Work;
const Icon = ({name}) => {
  return (
    <>
      <View style={styles.container}>
        <PersonIcon name="person" size={WP('20')} color={Work.COLOR.yellow} />
      </View>
      <Text style={styles.name}>{name?.toUpperCase()}</Text>
    </>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    elevation: 8,
    backgroundColor: Work.COLOR.white,
    height: WP('30'),
    width: WP('30'),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: WP('5'),
    color: Work.COLOR.white,
    alignSelf: 'center',
    padding: WP(2),
    fontWeight: 'bold',
  },
});
