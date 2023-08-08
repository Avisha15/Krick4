import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  balanceBg,
  bg,
  iBatIcon,
  managePayment,
  transactionIcon,
} from '../../helper/image';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import Headertop from '../../common/Headertop';
import {
  AppText,
  FORTEEN,
  POPPINS_LIGHT,
  TWENTY_FOUR,
} from '../../common/AppText';
import {Button} from '../../common/Button';
import Listing from '../../common/Profile/listing';
import CommonContainer from '../../common/Profile/commonContainer';
import ListingItem from '../../common/Profile/listingItem';
import {useSelector} from 'react-redux';
import {universalPaddingHorizontal} from '../../theme/dimens';
import PrimaryButton from '../../common/primaryButton';
import {poppinsBoldItalic} from '../../theme/typography';
import {KeyBoardAware} from '../../common/KeyboardAware';
import Primary from '../../common/Primary';
import SecondaryButton from '../../common/secondaryButton';
import NavigationService from '../../navigation/NavigationService';
import {
  DEPOSIT_IBAT_SCREEN,
  DEPOSIT_WITHDRAWAL_SCREEN,
  MANAGE_PAYMENTS_SCREEN,
} from '../../navigation/routes';

const MyBalance = () => {
  const colors = useSelector(state => state.theme.colors);
  return (
    <AppSafeAreaView hidden>
      <View style={styles.container}>
        <ImageBackground
          source={balanceBg}
          resizeMode="stretch"
          style={styles.ImageBackground}
          imageStyle={{}}>
          <View style={{paddingHorizontal: universalPaddingHorizontal}}>
            <Headertop title="My Wallet" commonHeader />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <AppText
                  style={styles.color(colors)}
                  type={FORTEEN}
                  weight={POPPINS_LIGHT}>
                  Your Total Balance
                </AppText>
                <AppText
                  style={styles.color(colors)}
                  type={TWENTY_FOUR}
                  weight={POPPINS_LIGHT}>
                  ₹50
                </AppText>
              </View>
              <Primary
                title="ADD CASH"
                //  buttonStyle={styles.button}
                titleStyle={styles.addCashButtonTitle}
                smallBtn={styles.smallBtn}
              />
            </View>
          </View>
        </ImageBackground>
        <KeyBoardAware style={{paddingHorizontal: universalPaddingHorizontal}}>
          {/* <CommonContainer
            style={{
              marginTop: 25,
            }}>
            <Listing imageBg Icon={iBatIcon} Name={'IBat'} lastName={'1.025'} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <SecondaryButton
                title="DEPOSIT"
                buttonStyle={{flex: 1, marginEnd: 10}}
                titleStyle={styles.editButtonTitle}
                buttonViewStyle={{height: 40}}
                onPress={() => NavigationService.navigate(DEPOSIT_IBAT_SCREEN)}
              />

              <PrimaryButton
                title="WITHDRAW"
                buttonStyle={{flex: 1, marginStart: 10}}
                titleStyle={styles.editButtonTitle}
                smallBtn={{height: 40}}
                onPress={() =>
                  NavigationService.navigate(DEPOSIT_WITHDRAWAL_SCREEN)
                }
              />
            </View>
          </CommonContainer> */}
          <CommonContainer
            style={{
              marginTop: 60,
            }}>
            <ListingItem title={'Amount added'} info={'$50'} />
            <ListingItem title={'Winnings'} info={'$0'} button />
            <ListingItem border={false} title={'Amount added'} info={'$50'} />
          </CommonContainer>
          <CommonContainer
            style={{
              marginTop: 15,
            }}>
            <Listing
              onPressMain={() => NavigationService.navigate('aa')}
              Icon={transactionIcon}
              Name={'Transaction History'}
              next
            />
          </CommonContainer>
          <CommonContainer
            style={{
              marginTop: 15,
            }}>
            <Listing
              onPressMain={() =>
                NavigationService.navigate(MANAGE_PAYMENTS_SCREEN)
              }
              Icon={managePayment}
              Name={'Manage Payments'}
              next
            />
          </CommonContainer>
        </KeyBoardAware>
      </View>
    </AppSafeAreaView>
  );
  60;
};

export default MyBalance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
  },
  ImageBackground: {
    height: 130,
  },
  color: colors => ({
    color: colors.white,
  }),
  addCashButtonTitle: {
    fontFamily: poppinsBoldItalic,
    fontSize: 12,
  },
  button: {width: 90},
  smallBtn: {height:40,},
  editButton: {width: 60,},
  editButtonTitle: {
    fontSize: 14,
    fontFamily: poppinsBoldItalic,
  },
});
