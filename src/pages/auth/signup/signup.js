import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../../../shared/exporter';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AuthWrapper from '../../../shared/components/authWrapper';
import {Input} from 'react-native-elements';
import Btn from '../components/btn';
import axios from 'axios';

const {WP} = Work;
const Signup = ({navigation}) => {
  const [isLoading, setisLoading] = useState(false);

  const signupHandler = async ({email, password, name, contact}) => {
    const isConnected = Work.checkInternetConnection();
    if (isConnected) {
      setisLoading(true);
      try {
        const response = await axios.post('user/signup', {
          email,
          password,
          name,
          contact,
        });
        if (response?.data?.data) {
          Work.showToast('User Registered Successfully!');
          navigation.navigate('login');
        }
      } catch (error) {
        console.log(error);
        if (error?.message?.includes('40')) {
          Work.showToast('User Already Exist With These Credentials');
        } else {
          Work.showToast('Server Timeout');
        }
      }
      setisLoading(false);
    } else {
      Work.showToast(Work.INTERNET_CONNECTION_ERROR);
    }
  };

  return (
    <AuthWrapper navigation={navigation} name="SIGN UP" isBack showLogo>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          contact: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required').email('Invalid Email'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Password Length should be 6 to 16')
            .max(16, 'Password Length should be 6 to 16'),
          name: Yup.string().required('Required').min(3, 'Invalid Name'),
          contact: Yup.string()
            .required('Required')
            .matches(/^\d*[1-9]\d*$/, 'Only Digits Allowed')
            .min(11, 'Contact length should be 11')
            .max(11, 'Contact length should be 11'),
        })}
        onSubmit={(values, formikActions) => {
          signupHandler(values);
        }}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View style={{marginBottom: WP('8')}}>
              <Input
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                inputStyle={{fontSize: WP('4')}}
                placeholder="Full Name"
                errorMessage={errors.name && touched.name ? errors.name : null}
              />
              <Input
                inputStyle={{fontSize: WP('4')}}
                placeholder="Email"
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                errorMessage={
                  errors.email && touched.email ? errors.email : null
                }
                keyboardType="email-address"
              />
              <Input
                inputStyle={{fontSize: WP('4')}}
                placeholder="Mobile no."
                value={values.contact}
                onBlur={handleBlur('contact')}
                onChangeText={handleChange('contact')}
                errorMessage={
                  errors.contact && touched.contact ? errors.contact : null
                }
                keyboardType="number-pad"
              />
              <Input
                inputStyle={{fontSize: WP('4')}}
                placeholder="Password"
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                errorMessage={
                  errors.password && touched.password ? errors.password : null
                }
                secureTextEntry
              />
            </View>
            <Btn
              style={styles.btnStyle}
              label="SIGN UP !"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: '60%',
    backgroundColor: Work.COLOR.white,
    shadowColor: Work.COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    elevation: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: WP('15'),
  },
  btnStyle: {
    position: 'absolute',
    bottom: 0,
  },
});
