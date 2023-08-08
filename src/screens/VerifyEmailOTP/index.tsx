import {View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {AppText, ELEVEN, FORTEEN, THIRTEEN, TWELVE} from '../../common/AppText';

import {useSelector} from 'react-redux';
import PrimaryButton from '../../common/primaryButton';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {RootState} from '../../libs/rootReducer';
import {universalPaddingHorizontal} from '../../theme/dimens';
import NavigationService from '../../navigation/NavigationService';
import {KYC_SCREEN} from '../../navigation/routes';

const VerifyEmailOTP = () => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const [code, setCode] = useState('');
  return (
    <AppSafeAreaView style={{flex:1,backgroundColor:"#F5F5F5"}}>
        <Header
          commonHeader
          title="Verify Email Address"
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.withdraw(colors)}>
            OTP sent to example@gmail.com
          </AppText>
          <View style={styles.box(colors)}>
            <View style={styles.boxContainer}>
              <AppText type={TWELVE} style={styles.otp(colors)}>
                Enter the OTP
              </AppText>

              <OTPInputView
                style={{width: '100%', height: 60, borderRadius: 8}}
                pinCount={6}
                code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => {
                  setCode(code);
                }}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase(colors)}
                codeInputHighlightStyle={styles.underlineStyleHighLighted(
                  colors,
                )}
              />
            </View>
          </View>
          <TouchableOpacityView
            onPress={() => NavigationService.navigate(KYC_SCREEN)}>
            <AppText type={TWELVE} style={styles.account(colors)}>
              Didn’t receive the OTP?{' '}
              <AppText type={TWELVE} style={styles.register(colors)}>
                Resend OTP
              </AppText>
            </AppText>
          </TouchableOpacityView>
          <PrimaryButton buttonStyle={styles.button} title="SUBMIT" />
        </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default VerifyEmailOTP;
