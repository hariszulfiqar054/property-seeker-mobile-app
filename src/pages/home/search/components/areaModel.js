import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
import * as Work from '../../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import * as JOBS from '../../../../store/action.exporter';

const {WP} = Work;
const AreaModel = ({isVisible, onBackdropPress}) => {
  const dispatch = useDispatch();
  const area = useSelector((state) => state?.search?.area);
  return (
    <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.txt}>1000 - 2000 sq ft</Text>
          <RadioButton
            color={Work.COLOR.primary}
            status={area == '1000-2000' ? 'checked' : 'unchecked'}
            onPress={() => dispatch(JOBS.setArea('1000-2000'))}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>2000 - 3000 sq ft</Text>
          <RadioButton
            color={Work.COLOR.primary}
            status={area == '2000-3000' ? 'checked' : 'unchecked'}
            onPress={() => dispatch(JOBS.setArea('2000-3000'))}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>3000 - 4000 sq ft</Text>
          <RadioButton
            color={Work.COLOR.primary}
            status={area == '3000-4000' ? 'checked' : 'unchecked'}
            onPress={() => dispatch(JOBS.setArea('3000-4000'))}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>4000 - 10000 sq ft</Text>
          <RadioButton
            color={Work.COLOR.primary}
            status={area == '4000-10000' ? 'checked' : 'unchecked'}
            onPress={() => dispatch(JOBS.setArea('4000-10000'))}
          />
        </View>
      </View>
    </Overlay>
  );
};

export default AreaModel;

const styles = StyleSheet.create({
  container: {
    width: WP('60'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txt: {
    fontSize: WP('4'),
  },
});
