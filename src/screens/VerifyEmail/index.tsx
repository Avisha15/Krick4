import {View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {
  AppText,
  ELEVEN,
  FORTEEN,
  POPPINS_LIGHT,
  TEN,
  THIRTEEN,
} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import PrimaryButton from '../../common/primaryButton';
import {RootState} from '../../libs/rootReducer';
import {universalPaddingHorizontal} from '../../theme/dimens';
import NavigationService from '../../navigation/NavigationService';
import {VERIFY_EMAIL_OTP_SCREEN} from '../../navigation/routes';

const VerifyEmail = () => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const [email, setEmail] = useState('');

  return (
    <AppSafeAreaView style={{flex:1,backgroundColor:"#F5F5F5"}}>
        <Header
          commonHeader
          title="Verify Email Address"
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.withdraw(colors)}>
            Get Verified your Email
          </AppText>
          <View style={styles.box(colors)}>
            <InputBox
              placeholder="Enter your email"
              value={email}
              placeholderTextColor={colors.grey}
              labelStyle={styles.label(colors)}
              label="Email"
              returnKeyType="next"
              onChange={value => setEmail(value)}
              textInputBox={styles.textInputBox(colors)}
            />
            <AppText
              type={TEN}
              weight={POPPINS_LIGHT}
              style={styles.otp(colors)}>
              Send One Time Password(OTP) to your mail.
            </AppText>
          </View>
          <PrimaryButton
            onPress={() => NavigationService.navigate(VERIFY_EMAIL_OTP_SCREEN)}
            buttonStyle={styles.button}
            title="GET OTP"
          />
        </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default VerifyEmail;
