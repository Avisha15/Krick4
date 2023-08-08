import React, {useState} from 'react';
import {FlatList, ImageBackground, View,Image,StyleSheet} from 'react-native';
import {AppText, POPPINS_SEMI_BOLD, TWELVE, TWENTY} from '../common/AppText';
import PrimaryButton from '../common/primaryButton';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../common/Header';
import Modal from 'react-native-modal';
import {
  Battle_Infinity,
  Logo,
  Screen,
  universalPaddingHorizontal,
} from '../theme/dimens';
import SecondaryButton from '../common/secondaryButton';
import {
  bg,
  bell,
  battle,
  wallet,
  nft,
  right_arrow,
  refer_earn,
  terms_conditions,
  personIcon,
  walletIcon,
  Edit,
  Notify,
  refer,
  How,
  Contact,
  RIGHT_ARROW,
  About,
  Terms,
  Privacy
} from '../helper/image';
import {RootState} from '../libs/rootReducer';
import {AppSafeAreaView} from '../common/AppSafeAreaView';
import {KeyBoardAware} from '../common/KeyboardAware';
import FastImage from 'react-native-fast-image';
import {userLogout} from '../actions/authActions';
import {TouchableOpacityView} from '../common/TouchableOpacityView';
import NavigationService from '../navigation/NavigationService';
import {MY_BALANCE, NFC, REFER_EARN,PROFILE_EDIT} from '../navigation/routes';

const DATA = [
  {
    id: '1',
    source: About,
    heading: 'About Us ',
    type: RIGHT_ARROW,
  },
  {
    id: '2',
    source: Terms,
    heading: 'Terms & Conditions',
    type: RIGHT_ARROW,
  },
  {
    id: '3',
    source: Privacy,
    heading: 'Privacy Policy',
    type: RIGHT_ARROW,
  },
  
];

const Play = () => {
  const dispatch = useDispatch();
  const [mdlVisibile, setMdlVisible] = useState(false);
  const colors = useSelector((state) => {
    return state.theme.colors;
  });

  const onPressAction = id => {
    if (id == '1') return NavigationService.navigate(PROFILE_EDIT);
    if (id == '2') return NavigationService.navigate(REFER_EARN);
    if (id == '3') return NavigationService.navigate(REFER_EARN);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacityView
        key={item.id}
        // onPress={() => onPressAction(item.id)}
        style={styles.box(colors)}>
        <View style={styles.boxContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.phoneContainer(colors)}>
              <FastImage
                source={item.source}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <View style={styles.mobileContainer}>
              <AppText type={TWELVE} style={styles.mobile(colors)}>
                {item.heading}
              </AppText>
            </View>
          </View>
          <View style={styles.arrow}>
            <FastImage
              source={item.type}
              resizeMode="contain"
              style={styles.rightArrow}
            />
          </View>
        </View>
      </TouchableOpacityView>
    );
  };

  return (
    <AppSafeAreaView>
      <View style={styles.image}>
        <View style={styles.bottomContainer}>
        <View style={{right:18}}>
        <Header
          title={'Settings'}
          commonHeader
          style={{padding: universalPaddingHorizontal}}
        />
        </View>
          {/* <View style={styles.topContainer}>
          <FastImage source={personIcon} style={styles.userLogo} />
            <FastImage
              style={styles.logo}
              resizeMode="contain"
              source={battle}
            />
            <FastImage style={styles.bell} source={bell} resizeMode="contain" />
            <FastImage source={walletIcon} style={styles.walletIcon} />
          </View> */}
          {DATA.map(item => {
            return renderItem({item});
          })}
         
        </View>
      </View>
    </AppSafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor:"#F5F5F5"
  },
  box: colors => ({
    borderWidth: 1,
    borderColor:'rgba(1, 157, 145, 0.3)',
    borderRadius: 16,
    marginTop: 10,
  }),
  phoneContainer: colors => ({
    backgroundColor: colors.whitefade,
    height: 45,
    width: 45,
    marginHorizontal: 3,
    marginVertical: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  mobile: colors => ({
    color:'rgba(0, 0, 0, 1)',
    marginLeft: 10,
    fontWeight:"500"
  }),
  //   topContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //   },
  title: colors => ({
    color: colors.white,
    alignSelf: 'center',
    marginTop: Screen.Height / 2.2,
  }),
  rightArrow: {
    width: 15,
    height:10,
  },
  mobileContainer: {
    alignSelf: 'center',
  },

  logo: {
    height:24.57,
    width: 113,
    flex: 1,
  },
  register: colors => ({
    color: colors.white,
    alignSelf: 'center',
    marginTop: 10,
  }),
  referral: colors => ({
    color: colors.white,
  }),

  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  button: {
    marginTop: 40,
  },
  bottom: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: colors => ({
    color: colors.code,
  }),
  bell: {
    height: 17,
    width: 17,
   marginRight:10
  },
  userLogo: {
    height: 28,
    width: 28,
  },
  walletIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height:42,
    width:42,
  },
  arrow: {
    alignSelf: 'center',
    marginRight: 10,
  },
  modalText: colors => ({
    textAlign: 'center',
    color:'#000000',
  }),
  logout: {
    // width: 250,
  },
  cancel: {
    //  width: 250,
  },
  modalBox: colors => ({
    height: 240,
    width: '95%',
    padding: 30,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    // backgroundColor:"#F5F5F5"

  }),
});


export default Play;
