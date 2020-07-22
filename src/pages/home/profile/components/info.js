import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../../../../shared/exporter';
import SafeWrapper from '../../../../shared/components/safeWrapper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Hr from '../../../../shared/components/hr';

const {WP} = Work;
const Info = () => {
  return (
    <SafeWrapper>
      <View style={styles.subContainer}>
        <View style={styles.containerMargins}>
          <View style={styles.iconContainer}>
            <MaterialIcon name="person" size={WP('7')} color="orange" />
            <Text style={styles.txt}>Name</Text>
          </View>
          <Text style={styles.txtDes}>Haris</Text>
        </View>
        <Hr />
        <View style={styles.containerMargins}>
          <View style={styles.iconContainer}>
            <MaterialIcon name="phone" size={WP('7')} color="#96bb7c" />
            <Text style={styles.txt}>Phone</Text>
          </View>
          <Text style={styles.txtDes}>03084567319</Text>
        </View>
        <Hr />
        <View style={styles.containerMargins}>
          <View style={styles.iconContainer}>
            <MaterialIcon
              name="mail"
              size={WP('7')}
              color={Work.COLOR.yellow}
            />
            <Text style={[styles.txt]}>Email</Text>
          </View>
          <Text style={styles.txtDes}>hariszulfiqar054@gmail.com</Text>
        </View>
        <Hr />
      </View>
    </SafeWrapper>
  );
};

export default Info;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: WP(5),
    textTransform: 'uppercase',
    marginLeft: WP('3'),
    fontWeight: 'bold',
  },
  subContainer: {
    marginTop: WP('5'),
  },
  txtDes: {
    fontSize: WP('5'),
    color: Work.COLOR.grey,
    marginLeft: WP('10'),
  },
  containerMargins: {
    marginVertical: WP('4'),
    marginLeft: WP('4'),
  },
});
