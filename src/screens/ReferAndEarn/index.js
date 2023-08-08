import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import Clipboard from '@react-native-community/clipboard';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {
  AppText,
  BOLD,
  EIGHTEEN,
  FORTEEN,
  NORMAL,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_EXTRA_BOLD_ITALIC,
  SIXTEEN,
  TEN,
  TWELVE,
  TWENTY_FOUR,
  WHITE,
} from '../../common/AppText';
import Header from '../../common/Header';
import {shareToAny} from '../../helper/utility';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {
  facebook,
  giftBox,
  referbackground,
  sparkel,
  telegram,
  whatsapp,
} from '../../helper/image';
import {Button} from '../../common/Button';
import {SolidButton} from '../../common/SolidButton';
import {KeyBoardAware} from '../../common/KeyboardAware';
import PrimaryButton from '../../common/primaryButton';
import {universalPaddingHorizontal} from '../../theme/dimens';
import Headertop from '../../common/Headertop';

export default function ReferAndEarn() {
  const colors = useSelector(state => state.theme.colors);
  return (
    <AppSafeAreaView style={styles.container}>
      <KeyBoardAware style={[styles.container, {backgroundColor:"#F5F5F5"}]}>
        <ImageBackground
          style={styles.bgIMAGE}
          resizeMode="stretch"
          source={referbackground}>
          <View style={{paddingHorizontal: universalPaddingHorizontal}}>
            <Headertop commonHeader={true} title="Refer & Earn"/>
          </View>
          <View style={styles.shareContainer}>
            <Image
              style={{
                width: 120,
                height: 120,
                position: 'absolute',
                bottom: 20,
              }}
              source={giftBox}></Image>
          </View>
          <View style={{alignItems: 'center'}}>
            <AppText
              style={styles.text(colors)}
              color={WHITE}
              weight={NORMAL}
              type={FORTEEN}>
              For every friend that plays,you both{'\n'} get ₹50 for free
            </AppText>
          </View>
          <View style={styles.referralContainer}>
            <View style={styles.referralWrapper}>
              <View style={styles.referCode}>
                <AppText
                  style={styles.color(colors)}
                  weight={POPPINS}
                  type={TEN}>
                  Your referral code
                </AppText>
                <AppText
                  style={styles.color(colors)}
                  weight={NORMAL}
                  type={SIXTEEN}>
                  {'abdsakjdasjdna'}
                </AppText>
              </View>
              <Image
            style={{height:36,width:37,resizeMode:"contain"}}
            source={require('../../../assets/images/line.png')}
          />
              <TouchableOpacityView
                onPress={() => Clipboard.setString('heduhdausda')}
                style={styles.code}>
                <AppText
                  style={{ color:'rgba(1, 157, 145, 1)'}}
                  weight={NORMAL}
                  type={TWELVE}>
                  Copy Code
                </AppText>
              </TouchableOpacityView>
            </View>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <AppText
              style={{  textAlign: 'center',
              color:'white',}}
              weight={POPPINS}
              color={WHITE}
              type={FORTEEN}>
              Share your Referral Code via
            </AppText>
          </View>
          <View style={styles.mediaBtnContainer}>
            <SolidButton
              size={TEN}
              color={WHITE}
              style={[styles.mediaBtn]}
              nogradient={true}
              ImageStyle={{width: 24, height: 24, marginRight: 5}}
              Icon={facebook}>
              {' '}
              facebook
            </SolidButton>
            <SolidButton
              color={WHITE}
              style={[styles.mediaBtn, {backgroundColor: 'rgba(28, 138, 219, 1)'}]}
              nogradient={true}
              ImageStyle={styles.commonBtn}
              Icon={telegram}
              size={TEN}>
              telegram
            </SolidButton>

            <SolidButton
              size={TEN}
              color={WHITE}
              style={[styles.mediaBtn, {backgroundColor: 'rgba(31, 169, 0, 1)'}]}
              nogradient={true}
              ImageStyle={styles.commonBtn}
              Icon={whatsapp}>
              whatsApp
            </SolidButton>
          </View>
        </ImageBackground>
        <View style={{alignItems: 'center',}}>
          <View style={[styles.linerBtnContainer, {marginTop: 60}]}>
            <View style={styles.TextContainer}>
              <AppText
                type={FORTEEN}
                weight={POPPINS}
                style={styles.RewardText(colors)}>
                TOTAL REFFERALS
              </AppText>
              <AppText
                type={EIGHTEEN}
                weight={POPPINS_BOLD}
                style={styles.RewardText(colors)}>
                ₹500
              </AppText>
            </View>
          </View>
          <View style={[styles.linerBtnContainer]}>
            <View style={styles.TextContainer}>
              <AppText
                type={FORTEEN}
                weight={POPPINS}
                style={styles.RewardText(colors)}>
                TOTAL REWARDS
              </AppText>
              <AppText
                type={EIGHTEEN}
                weight={POPPINS_BOLD}
                style={styles.RewardText(colors)}>
                ₹1002000
              </AppText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 214,
              height: 18,
              padding: 2,
              justifyContent: 'space-evenly',
              marginTop: 22,
            }}>
            <AppText
              type={TWELVE}
              weight={POPPINS}
              style={[
                styles.ruleText(colors),
                {
                  borderRightWidth: 1,
                  borderRightColor:'rgba(1, 157, 145, 1)',
                  paddingRight: 10,
                },
              ]}>
              How it works
            </AppText>
            <AppText
              type={TWELVE}
              weight={POPPINS}
              style={styles.ruleText(colors)}>
              Rules of Fair Play
            </AppText>
          </View>
        </View>
        <View style={{top:70}}> 
        <PrimaryButton
          onPress={() => shareToAny(`"ANNSKJJKsJKASJKAJSDJKASJKDASJKDJASJASK`)}
          buttonStyle={styles.buttonContainer}
          title="Invite Now"
        />
        </View>
      </KeyBoardAware>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgContainer: {
    width: '100%',
    // height: 480,
    // justifyContent: 'center',
    // alignContent: 'center',
    // borderRadius: 50,
  },
  bgIMAGE: {
    width: '100%',
    height: 450,
  },
  shareContainer: {
    marginTop: 30,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  referralContainer: {
    width: '100%',
    alignItems: 'center',
    
  },
  referralWrapper: {
    width: 295,
    height: 60,
    borderRadius:57,
    borderStyle: 'dashed',
    borderColor: 'rgba(1, 157, 145, 1)',
    borderWidth: 2,
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor:"rgba(255, 255, 255, 1)"
  },
  referCode: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  code: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: -15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaBtn: {
    backgroundColor: 'rgba(59, 89, 152, 1)',
    maxWidth: '30%',
    borderRadius: 50,
    height: 45,
    marginLeft: 7,
    borderWidth:1,
    borderColor:"rgba(255, 255, 255, 1)"
  },
  commonBtn: {
    width: 18,
    height: 18,
    marginRight: 2,
    resizeMode: 'contain',
  },
  linerBtnContainer: {
    width: '90%',
    height: 60,
    marginTop: 10,
    borderRadius: 16,
    flexDirection: 'row',
    borderColor: 'rgba(1, 157, 145, 0.3)',
    borderWidth: 1,
  },
  linerBtn: {
    width: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  TextContainer: {
    flex: 1,
    paddingTop: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    // flex: 1,
  },
  title: colors => ({
    color: colors.white,
    textAlign: 'center',
    // marginTop: 30,
  }),
  text: colors => ({
    // width: 263,
    textAlign: 'center',
    color: colors.white,
  }),
  color: colors => ({
    color:'black',
  }),
  RewardText: colors => ({
    textAlign: 'center',
    color:'black',
  }),
  ruleText: colors => ({
    textAlign: 'center',
    color:'rgba(1, 157, 145, 1)',
  }),
});
