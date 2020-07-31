import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BtnWrapper from '../../../../shared/components/btnWrapper';
import * as Work from '../../../../shared/exporter';
import Icon from 'react-native-vector-icons/Octicons';
import {DotIndicator} from 'react-native-indicators';

const {WP} = Work;
const SearchBtn = ({label, onPress, isLoading}) => {
  return (
    <BtnWrapper press={onPress}>
      <View style={styles.container}>
        {isLoading ? (
          <DotIndicator
            style={{alignSelf: 'center'}}
            animating={true}
            size={WP('3')}
          />
        ) : (
          <>
            <Text style={styles.txt}>{label?.toUpperCase()}</Text>
            <Icon
              style={styles.icon}
              name="search"
              color={Work.COLOR.black}
              size={WP('8')}
            />
          </>
        )}
      </View>
    </BtnWrapper>
  );
};

export default SearchBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Work.COLOR.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: WP('15f'),
    elevation: 6,
    marginBottom: WP('6'),
  },
  icon: {
    marginRight: WP('3'),
  },
  txt: {
    fontSize: WP('4.5'),
    fontWeight: 'bold',
    marginLeft: WP('3'),
  },
});
