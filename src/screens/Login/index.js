import {Keyboard, View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  AppText,
  FORTEEN,
  POPPINS,
  RUSSO,
  SIXTEEN,
  THIRTY,
  TWELVE,
  TWENTY,
} from '../../common/AppText';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';
import InputBox from '../../common/InputBox';
import PrimaryButton from '../../common/primaryButton';
import {
  BOTTOM_NAVIGATION_STACK,
  REGISTER_SCREEN,
  OTP_SCREEN,
} from '../../navigation/routes';
import NavigationService from '../../navigation/NavigationService';
import CommonImageBackground from '../../common/commonImageBackground';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {toastAlert, validateEmail, validateMobile} from '../../helper/utility';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import {userLogin} from '../../actions/authActions';
import {poppinsBold} from '../../theme/typography';
import { KeyBoardAware } from '../../common/KeyboardAware';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const colors = useSelector((state) => {
    return state.theme.colors;
  });

  const isLoading = useSelector((state) => {
    return state.auth.isLoading;
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    if ((!validateEmail(email) && !validateMobile(email)) || !email) {
      toastAlert.showToastError(
        'Please provide a valid Email Address or Mobile Number',
      );
      return;
    }
    //  else if (password?.length < 6) {
    //   toastAlert.showToastError('password must be at least 6 character long');
    // } 
    else {
      let data = {email: email, password:'Abcd@1234'};
      dispatch(userLogin(data));
    }
  };

  return (
    <AppSafeAreaView hidden style={styles.container}>
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <KeyBoardAware>
        <View style={styles.bottomContainer}>
          <Image
            style={styles.imgs}
            source={require('../../../assets/images/loginbg.png')}
          />
          <Image
            style={styles.img}
            source={require('../../../assets/images/loginimg.png')}
          />
          <AppText weight={poppinsBold} style={styles.referral(colors)}>
            Welcome to
          </AppText>
          <AppText weight={RUSSO} style={styles.enter(colors)}>
            KRICK 4
          </AppText>
          <AppText
            type={SIXTEEN}
            weight={POPPINS}
            style={{color: 'rgba(141, 141, 141, 1)', bottom: 10}}>
            Login to Krick 4
          </AppText>
          <View style={{bottom:20}}>
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
        
          {/* <View style={{top:10}}>
          <InputBox
            placeholder="*************"
            value={password}
            labelStyle={styles.password}
            // label="Password"
            returnKeyType="done"
            onChange={value => setPassword(value)}
            isPassword
            onToggle={() => {
              setIsVisible(!isVisible);
            }}
            secureTextEntry={isVisible}
          />
          </View> */}
          <AppText
            onPress={() => NavigationService.navigate(FORGOT_PASSWORD)}
            type={TWELVE}
            style={styles.forgot(colors)}>
            Forgot Password?
          </AppText>
<View style={{top:5}}>
          <PrimaryButton
            onPress={() => onSubmit()}
            // onPress={() => NavigationService.navigate(OTP_SCREEN)}
            title="Get OTP"
            buttonStyle={styles.button}
          />
</View>
          <TouchableOpacityView
            // onPress={() => NavigationService.navigate(REGISTER_SCREEN)}
            style={{bottom:30,height:50}}>
            <AppText
              type={FORTEEN}
              weight={POPPINS}
              style={styles.account(colors)}>
              Don’t have any account?{' '}
              <AppText type={FORTEEN} weight={POPPINS} style={styles.register}>
                Register
              </AppText>
            </AppText>
          </TouchableOpacityView>
        </View>
        </KeyBoardAware>
      </View>
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default Login;
