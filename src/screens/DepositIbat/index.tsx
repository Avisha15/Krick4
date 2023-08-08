import {View, StatusBar} from 'react-native';
import React from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {
  AppText,
  ELEVEN,
  POPPINS_LIGHT,
  POPPINS_SEMI_BOLD,
  SIXTEEN,
  TWELVE,
} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';
import {scan, copy} from '../../helper/image';
import FastImage from 'react-native-fast-image';
import {universalPaddingHorizontal} from '../../theme/dimens';
import CommonContainer from '../../common/Profile/commonContainer';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';

const DepositIbat = () => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <AppSafeAreaView>
      <CommonImageBackground common>
        <Header
          commonHeader
          title="Deposit IBAT"
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={{paddingHorizontal: universalPaddingHorizontal}}>
          <FastImage style={styles.scan} resizeMode="contain" source={scan} />
          <CommonContainer style={{marginTop: 25}}>
            <View style={styles.topContainer}>
              <AppText
                type={TWELVE}
                weight={POPPINS_LIGHT}
                style={styles.topText(colors)}>
                fnwejfowvdkjfijsdnjdncsd9762hdhdfsd
              </AppText>
              <TouchableOpacityView>
                <FastImage style={styles.copy} source={copy} />
              </TouchableOpacityView>
            </View>
          </CommonContainer>
          <AppText
            type={TWELVE}
            style={[styles.topText(colors), styles.code(colors)]}>
            Click above to copy the code
          </AppText>
          <CommonContainer
            style={{marginTop: 40, paddingHorizontal: 10, paddingVertical: 20}}>
            <AppText
              type={SIXTEEN}
              weight={POPPINS_SEMI_BOLD}
              style={styles.disclaimer(colors)}>
              Disclaimer:
            </AppText>

            <AppText type={ELEVEN} style={styles.discription(colors)}>
              • Minimum deposit of 0.250 IBAT, deposit below that cannot be
              recovered.
            </AppText>
            <AppText type={ELEVEN} style={styles.discription(colors)}>
              • Please deposit only IBAT on this address. If you deposit any
              other coin, it will be lost forever.
            </AppText>
            <AppText type={ELEVEN} style={styles.discription(colors)}>
              • This is IBAT deposit address type. Transferring to an
              unsupported network could result in loss of deposit.
            </AppText>
          </CommonContainer>
        </KeyBoardAware>

        {/* <View style={styles.bottomContainer}>
          <View style={styles.box(colors)}>
            <View style={[styles.boxContainer, styles.topContainer]}>
              <AppText
                type={TWELVE}
                weight={POPPINS_LIGHT}
                style={styles.topText(colors)}>
                fnwejfowvdkjfijsdnjdncsd9762hdhdfsd
              </AppText>

              <View></View>
            </View>
          </View>
         

          <View style={styles.box(colors)}>
            <View style={styles.bottomBox}>
            
            </View>
          </View>
        </View> */}
      </CommonImageBackground>
    </AppSafeAreaView>
  );
};

export default DepositIbat;
