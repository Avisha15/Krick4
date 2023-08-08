import {View} from 'react-native';
import React, {useState} from 'react';

import {
  AppText,
  FORTEEN,
  FORTY,
  POPPINS,
  RUSSO,
  SIXTEEN,
  THIRTY,
  TWENTY,
} from '../../common/AppText';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';
import PrimaryButton from '../../common/primaryButton';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CommonImageBackground from '../../common/commonImageBackground';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import NavigationService from '../../navigation/NavigationService';
import {
  RESET_PASSWORD,
  BOTTOM_NAVIGATION_STACK,
  LOGIN_SCREEN,
} from '../../navigation/routes';
import {
  forgotPassword,
  otpVerification,
  resetSignUpOtp,
} from '../../actions/authActions';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import {toastAlert} from '../../helper/utility';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';

const OTP = ({route}) => {
  const dispatch = useDispatch();
  const {data, id} = route?.params ?? '';
  const colors = useSelector((state) => {
    return state.theme.colors;
  });
  const isLoading = useSelector((state) => {
    return state.auth.isLoading;
  });
  const [code, setCode] = useState('');

  const onSubmit = () => {
    if (!code.length < 6) {
      toastAlert.showToastError('Please provide a valid OTP');
    } 
    // else if (id == 'forgot') {
    //   data['otp'] = code;
    //   // NavigationService.navigate(RESET_PASSWORD, {data: data});
    // } 
    else if (id == 'register') {
      let _data = {
        _id: data?._id,
        otp:'123456',
      };
      dispatch(otpVerification(_data));
    }
  };

  const onResend = () => {
    id == 'register'
      ? dispatch(resetSignUpOtp(data?._id))
      : dispatch(forgotPassword(data, true));
  };

  return (
    <AppSafeAreaView style={styles.container}>
      <View style={styles.bottomContainer}>
        <AppText type={TWENTY} weight={RUSSO} style={styles.referral(colors)}>
          Verify
        </AppText>
        <AppText
          type={FORTY}
          weight={RUSSO}
          style={{color: 'rgba(1, 157, 145, 1)', fontWeight: '800'}}>
          OTP
        </AppText>
        <AppText
          type={SIXTEEN}
          weight={POPPINS}
          style={{color: 'rgba(141, 141, 141, 1)', fontWeight: '500'}}>
          Please enter your mobile number
        </AppText>
        <AppText
          type={SIXTEEN}
          weight={POPPINS}
          style={{color: 'rgba(141, 141, 141, 1)', fontWeight: '500'}}>
          to login
        </AppText>
        <OTPInputView
          style={{width: '100%', height: 180, borderRadius: 8}}
          pinCount={6}
          code={code}
          autoFocusOnLoad={false}
          editable
          onCodeChanged={value => setCode(value)}
          // onCodeFilled={code => {
          //   if (code.length == 6) {
          //     if (id == 'register') {
          //       let _data = {
          //         _id: data?._id,
          //         otp:'123456',
          //       };
          //       dispatch(otpVerification(_data));
          //     } 
          //     // else {
          //     //   data['otp'] = code;
          //     //   NavigationService.navigate(RESET_PASSWORD, {data: data});
          //     // }
          //   }
          // }}
          placeholderTextColor={colors.code}
          codeInputFieldStyle={styles.underlineStyleBase(colors)}
          codeInputHighlightStyle={styles.underlineStyleHighLighted(colors)}
        />
        <TouchableOpacityView
          style={{
            top: 90,
            height: 50,
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AppText
            // onPress={() => NavigationService.navigate(LOGIN_SCREEN)}
            // onPress={onResend}
            type={SIXTEEN}
            weight={POPPINS}
            style={styles.account}>
            Edit Number{' '}
          </AppText>
          <AppText
            // onPress={onResend}
            type={SIXTEEN}
            weight={POPPINS}
            style={styles.register}>
            Resend OTP
          </AppText>
        </TouchableOpacityView>
        <PrimaryButton
          title="Get OTP"
          onPress={() => NavigationService.navigate(BOTTOM_NAVIGATION_STACK)}
          // onPress={onSubmit}
          buttonStyle={styles.button}
        />
      </View>

      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default OTP;
