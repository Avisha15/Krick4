import {View, Text, StatusBar, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {
  AppText,
  EIGHT,
  ELEVEN,
  FORTEEN,
  POPPINS_LIGHT,
  POPPINS_MEDIUM,
  POPPINS_SEMI_BOLD,
  SIXTEEN,
  TEN,
  THIRTEEN,
  TWELVE,
} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import {RootState} from '../../libs/rootReducer';
import {scan, copy} from '../../helper/image';
import FastImage from 'react-native-fast-image';
import {phone, email, bank, panCard} from '../../helper/image';
import {universalPaddingHorizontal} from '../../theme/dimens';
import SecondaryButton from '../../common/secondaryButton';
import NavigationService from '../../navigation/NavigationService';
import {
  VERIFY_BANK_SCREEN,
  VERIFY_EMAIL_SCREEN,
  VERIFY_PAN_SCREEN,
} from '../../navigation/routes';

const DATA = [
  {
    id: '0',
    source: phone,
    heading: 'Mobile Number',
    subHeading: '+91 8628****282',
    type: 'Verified',
  },
  {
    id: '1',
    source: email,
    heading: 'Email Address',
    subHeading: 'To get latest information',
    type: 'notVerified',
  },
  {
    id: '2',
    source: panCard,
    heading: 'PAN Card',
    subHeading: 'For safety ans security of all transactions.',
    type: 'notVerified',
  },
  {
    id: '3',
    source: bank,
    heading: 'Bank Account',
    subHeading: 'For withdrawals to your bank account.',
    type: 'notVerified',
  },
];

const KYC = () => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });

  const onPressAction = item => {
    if (item.id == '1') return NavigationService.navigate(VERIFY_EMAIL_SCREEN);
    if (item.id == '2') return NavigationService.navigate(VERIFY_PAN_SCREEN);
    if (item.id == '3') return NavigationService.navigate(VERIFY_BANK_SCREEN);
  };

  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.box(colors)}>
        <View style={[styles.topContainer]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.phoneContainer(colors)}>
              <FastImage
                source={item.source}
                resizeMode="contain"
                style={styles.phone}
              />
            </View>
            <View style={styles.mobileContainer}>
              <View style={{flexDirection: 'row'}}>
                <AppText type={TWELVE} style={styles.mobile(colors)}>
                  {item.heading}
                </AppText>
                {item.type == 'Verified' ? (
                  <AppText
                    type={EIGHT}
                    weight={POPPINS_MEDIUM}
                    style={styles.verified(colors)}>
                    Verified
                  </AppText>
                ) : (
                  <></>
                )}
              </View>
              <AppText type={TEN} style={styles.mobile(colors)}>
                {item.subHeading}
              </AppText>
            </View>
          </View>
          {item.type == 'Verified' ? (
            <></>
          ) : (
            <SecondaryButton
              title="Verify"
              onPress={() => onPressAction(item)}
              buttonStyle={styles.editButton}
              titleStyle={styles.editButtonTitle}
              buttonViewStyle={{height: 30}}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <AppSafeAreaView style={{flex:1,backgroundColor:"#F5F5F5"}}>
        <Header
          commonHeader
          title="Verify Account"
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.getVerified(colors)}>
            Get Verified
          </AppText>
          {DATA.map((item, index) => {
            return renderItem({item});
          })}
        </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default KYC;
