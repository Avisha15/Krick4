import {View, Keyboard,Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  AppText,
  FORTEEN,
  POPPINS,
  RUSSO,
  TEN,
  THIRTY,
  TWELVE,
} from '../../common/AppText';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';
import InputBox from '../../common/InputBox';
import PrimaryButton from '../../common/primaryButton';
import Checkbox from '../../common/CheckBox/CheckBox';
import {LOGIN_SCREEN,BOTTOM_NAVIGATION_STACK} from '../../navigation/routes';
import NavigationService from '../../navigation/NavigationService';
import CommonImageBackground from '../../common/commonImageBackground';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import {toastAlert, validateEmail, validateMobile} from '../../helper/utility';
import {userSignup} from '../../actions/authActions';
import {SpinnerSecond} from '../../common/SpinnerSecond';

const Register = ({route}: any) => {
  const refercode = route?.params?.refercode;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const isLoading = useSelector((state: RootState) => {
    return state.auth.isLoading;
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    if ((!validateEmail(email) && !validateMobile(email)) || !email) {
      toastAlert.showToastError(
        'Please provide a valid Email Address or Mobile Number',
      );
      return;
    } else if (!firstName) {
      toastAlert.showToastError('Please provide a valid First Name');
    } else if (!password) {
      toastAlert.showToastError('Please provide a valid Password');
    } else if (!isSelected) {
      toastAlert.showToastError(
        'Please read terms of service carefully before proceed',
      );
    } else {
      let data = {
        email_or_phone: email,
        first_name: firstName,
        last_name: lastName,
        username: email,
        password: password,
        device: 'mobile',
        refercode: refercode ?? '',
      };
      // console.log(data);

      dispatch(userSignup(data));
    }
  };

  return (
    <AppSafeAreaView style={styles.container} hidden>
      <KeyBoardAware>
      <View style={{flex:1,backgroundColor:"#F5F5F5"}}>
          <View style={styles.bottomContainer}>
          <Image
            style={{height:16,width:18,resizeMode:"contain",top:50}}
            source={require('../../../assets/images/leftArrow.png')}
          />
            <AppText
              type={THIRTY}
              weight={RUSSO}
              style={styles.referral(colors)}>
              Register
            </AppText>
            <AppText
              type={FORTEEN}
              weight={POPPINS}
              style={styles.enter(colors)}>
             Please enter your mobile number
            </AppText>
            <AppText
              type={FORTEEN}
              weight={POPPINS}
              style={{color:'rgba(141, 141, 141, 1)',
                }}>
             to register
            </AppText>
            <View style={{}}>
            <InputBox
            value={email}
            labelStyle={styles.label}
            label="Enter Mobile Number"
            returnKeyType="next"
            onChange={value => setEmail(value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          </View>
          <AppText
              type={TEN}
              weight={POPPINS}
              style={{  color:'rgba(141, 141, 141, 1)',
              marginTop:20,
              paddingHorizontal:8}}>
           You will recieve an OTP for verification
            </AppText>
            {/* <InputBox
              value={email}
              placeholder="example@gmail.com"
              labelStyle={styles.label}
              label="Email or Mobile Number"
             
              keyboardType="email-address"
              autoCapitalize="none"
            /> */}
            <View style={{bottom:40}}>
            <InputBox
              value={firstName}
              placeholder="Enter referral code(Optional)"
              labelStyle={styles.inputContainer}
              label="First Name"
              placeholderTextColor={'rgba(141, 141, 141, 1)'}
              onChange={value => setFirstName(value)}
            />
        </View>
          
            <View style={styles.checkboxContainer}>
              <Checkbox
                // onPress={() => setIsSelected(!isSelected)}
                // value={isSelected}
              />

              <AppText
                // onPress={() => setIsSelected(!isSelected)}
                type={TWELVE}
                style={styles.policy(colors)}>
             confirm that I am 18+ years in age
              </AppText>
            </View>
            <PrimaryButton
              // onPress={() => NavigationService.navigate(BOTTOM_NAVIGATION_STACK)}
              // onPress={onSubmit}
              title="Register"
              buttonStyle={styles.button}
            />
            <TouchableOpacityView
              // onPress={() => NavigationService.navigate(LOGIN_SCREEN)}
              style={{top:50}}>
              <AppText
                type={FORTEEN}
                weight={POPPINS}
                style={styles.account(colors)}>
                Already have any account?{' '}
                <AppText
                  type={FORTEEN}
                  weight={POPPINS}
                  type={FORTEEN}
                  style={styles.register(colors)}>
                  Log In
                </AppText>
              </AppText>
            </TouchableOpacityView>
          </View>
          </View>
      </KeyBoardAware>
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default Register;
