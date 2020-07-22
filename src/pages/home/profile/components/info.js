import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../../../../shared/exporter';
import SafeWrapper from '../../../../shared/components/safeWrapper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {WP} = Work;
const Info = () => {
  return (
    <SafeWrapper>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcon name="person" size={WP('7')} color="orange" />
          <Text style={styles.txt}>haris</Text>
        </View>

        <View style={styles.iconContainer}>
          <MaterialIcon name="phone" size={WP('7')} color="#96bb7c" />
          <Text style={styles.txt}>03084567319</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialIcon name="mail" size={WP('7')} color={Work.COLOR.yellow} />
          <Text style={[styles.txt, {textTransform: 'none'}]}>
            hariszulfiqar054@gmail.com
          </Text>
        </View>
      </View>
    </SafeWrapper>
  );
};

export default Info;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('6'),
  },
  txt: {
    fontSize: WP(6),
    textTransform: 'uppercase',
    marginLeft: WP('6'),
  },
  subContainer: {
    alignSelf: 'center',
  },
});
