import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import axios from 'axios';
import SafeWrapper from '../../../shared/components/safeWrapper';
import BtnWrapper from '../../../shared/components/btnWrapper';
import * as Work from '../../../shared/exporter';
import Header from '../../../shared/components/header';
import Btn from '../search/components/btn';
import {DotIndicator} from 'react-native-indicators';
import ImagePicker from 'react-native-image-picker';

const {WP} = Work;
const PostProperty = ({navigation}) => {
  const [type, setType] = useState('buy');
  const [isLoading, setLoading] = useState(false);
  const [img, setImage] = useState(null);

  const options = {
    title: 'Select Imager',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const imageHandler = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImage('data:image/jpeg;base64,' + response.data);
      }
    });
  };

  const postProperty = async ({
    description,
    bedroom,
    bathroom,
    city,
    area,
    starting_bid,
  }) => {
    if (img) {
      const isConnected = Work.checkInternetConnection();
      if (isConnected) {
        setLoading(true);
        try {
          const response = await axios.post('property/addproperty', {
            area: parseInt(area),
            city,
            bedroom: parseInt(bedroom),
            bathroom: parseInt(bathroom),
            description,
            starting_bid: parseInt(starting_bid),
            property_type: type,
            img: img,
          });
          if (response?.data?.data) {
            console.log(response?.data?.data);
            navigation.goBack();
            alert('Post Property Successfully !');
          }
        } catch (error) {
          console.log(error.message);
          Work.showToast('Server Timeout');
        }

        setLoading(false);
      } else {
        Work.showToast(Work.INTERNET_CONNECTION_ERROR);
      }
    } else {
      alert('Select Image!');
    }
  };

  return (
    <SafeWrapper>
      <KeyboardAwareScrollView>
        <Header label="post property" navigation={navigation} isBack />
        <Formik
          initialValues={{
            area: '',
            bedroom: '',
            bathroom: '',
            description: '',
            city: '',
            starting_bid: '',
          }}
          validationSchema={Yup.object({
            area: Yup.string()
              .required('Required')
              .matches(/^\d*[1-9]\d*$/, 'Only Digits Allowed'),
            bedroom: Yup.string()
              .required('Required')
              .matches(/^\d*[1-9]\d*$/, 'Only Digits Allowed'),
            bathroom: Yup.string()
              .required('Required')
              .matches(/^\d*[1-9]\d*$/, 'Only Digits Allowed'),
            starting_bid: Yup.string()
              .required('Required')
              .matches(/^\d*[1-9]\d*$/, 'Only Digits Allowed'),
            city: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
          })}
          onSubmit={(values, formikActions) => {
            postProperty(values);
          }}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            errors,
          }) => (
            <View>
              <View style={styles.btn}>
                <Btn
                  label="buy"
                  isSelected={type === 'buy' ? true : false}
                  onPress={() => setType('buy')}
                />
                <Btn
                  label="rent"
                  isSelected={type === 'rent' ? true : false}
                  onPress={() => setType('rent')}
                />
              </View>
              <Text style={styles.txt}>Enter Area (sq ft) :</Text>
              <Input
                placeholder="Enter Area...."
                inputContainerStyle={styles.removeBorder}
                inputStyle={{
                  fontSize: WP('4.5'),
                }}
                onChangeText={handleChange('area')}
                onBlur={handleBlur('area')}
                value={values.area}
                errorMessage={errors.area && touched.area ? errors.area : null}
              />
              <View style={styles.roomsContainer}>
                <View>
                  <Text style={styles.txt}>Enter Bedrooms :</Text>
                  <Input
                    placeholder="eg. 2"
                    inputContainerStyle={styles.removeBorder}
                    inputStyle={{
                      fontSize: WP('4.5'),
                    }}
                    onChangeText={handleChange('bedroom')}
                    onBlur={handleBlur('bedroom')}
                    value={values.bedroom}
                    errorMessage={
                      errors.bedroom && touched.bedroom ? errors.bedroom : null
                    }
                  />
                </View>
                <View>
                  <Text style={styles.txt}>Enter Bathrooms :</Text>
                  <Input
                    placeholder="eg. 2"
                    inputContainerStyle={styles.removeBorder}
                    inputStyle={{
                      fontSize: WP('4.5'),
                    }}
                    onChangeText={handleChange('bathroom')}
                    onBlur={handleBlur('bathroom')}
                    value={values.bathroom}
                    errorMessage={
                      errors.bathroom && touched.bathroom
                        ? errors.bathroom
                        : null
                    }
                  />
                </View>
              </View>
              <Text style={styles.txt}>Enter City :</Text>
              <Input
                placeholder="Enter City...."
                inputContainerStyle={styles.removeBorder}
                inputStyle={{
                  fontSize: WP('4.5'),
                }}
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                errorMessage={errors.city && touched.city ? errors.city : null}
              />
              <Text style={styles.txt}>Enter Starting Bid :</Text>
              <Input
                placeholder="Enter Starting bid...."
                inputContainerStyle={styles.removeBorder}
                inputStyle={{
                  fontSize: WP('4.5'),
                }}
                onChangeText={handleChange('starting_bid')}
                onBlur={handleBlur('starting_bid')}
                value={values.starting_bid}
                errorMessage={
                  errors.starting_bid && touched.starting_bid
                    ? errors.starting_bid
                    : null
                }
              />
              <Text style={styles.txt}>Enter Description :</Text>
              <Input
                placeholder="Enter Description...."
                inputContainerStyle={[styles.removeBorder, {height: WP('30')}]}
                inputStyle={{
                  fontSize: WP('4.5'),
                }}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                errorMessage={
                  errors.description && touched.description
                    ? errors.description
                    : null
                }
              />
              <BtnWrapper press={imageHandler}>
                <View style={styles.pickImg}>
                  <Text style={{color: Work.COLOR.white, fontWeight: 'bold'}}>
                    SELECT IMAGE
                  </Text>
                </View>
              </BtnWrapper>
              {img && (
                <Image
                  style={styles.img}
                  source={{
                    uri: img,
                  }}
                />
              )}

              <BtnWrapper press={handleSubmit}>
                <View style={styles.btnContainer}>
                  {isLoading ? (
                    <DotIndicator size={WP('3')} />
                  ) : (
                    <Text style={styles.btnText}>ADD PROPERTY</Text>
                  )}
                </View>
              </BtnWrapper>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeWrapper>
  );
};

export default PostProperty;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: WP('5'),
  },
  removeBorder: {
    borderWidth: 1,
    borderRadius: 10,
  },
  txt: {
    fontSize: WP('4'),
    padding: WP('1'),
    marginLeft: WP('2'),
    marginTop: WP('4'),
  },
  roomsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  btnContainer: {
    backgroundColor: Work.COLOR.yellow,
    height: WP('14'),
    justifyContent: 'center',
    marginVertical: WP('10'),
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    elevation: 6,
    borderRadius: 7,
  },
  btnText: {
    fontSize: WP('4.5'),
    fontWeight: 'bold',
  },
  pickImg: {
    backgroundColor: Work.COLOR.primary,
    height: WP('14'),
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: WP('4'),
  },
  img: {
    width: '80%',
    height: WP('40'),
    marginTop: WP('4'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
