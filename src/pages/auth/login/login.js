import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Work from '../../../shared/exporter';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import AuthWrapper from '../../../shared/components/authWrapper';
import {Input} from 'react-native-elements';
import Btn from '../components/btn';
import BtnWrapper from '../../../shared/components/btnWrapper';
import axios from 'axios';
import * as JOBS from '../../../store/action.exporter';

const {WP} = Work;
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);

  const loginHandler = async ({email, password}) => {
    const isConnected = Work.checkInternetConnection();
    if (isConnected) {
      setisLoading(true);
      try {
        const response = await axios.post('user/login', {
          email,
          password,
        });
        if (response?.data?.data) {
          dispatch(JOBS.saveUser(response?.data?.data));
          navigation.navigate('dashboard');
        }
      } catch (error) {
        if (error?.message?.includes('40')) {
          Work.showToast('Invalid username or password');
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
    <AuthWrapper navigation={navigation} name="SIGN IN" showLogo>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, formikActions) => {
          loginHandler(values);
        }}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.container}>
              <View style={{marginBottom: WP('8')}}>
                <Input
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  inputStyle={{fontSize: WP('4')}}
                  placeholder="Email Address or Mobile no."
                  errorMessage={
                    errors.email && touched.email ? errors.email : null
                  }
                  keyboardType="email-address"
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
                label="LOGIN"
                onPress={handleSubmit}
                isLoading={isLoading}
              />
            </View>
            <BtnWrapper press={() => navigation.navigate('postProperty')}>
              <View style={styles.accountContainer}>
                <Text
                  style={{
                    color: Work.COLOR.primary,
                    fontWeight: 'bold',
                    fontSize: WP('4'),
                  }}>
                  Don't have an account? Sign up here
                </Text>
              </View>
            </BtnWrapper>
          </>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: '35%',
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
  accountContainer: {alignSelf: 'center', marginTop: WP('10')},
});
