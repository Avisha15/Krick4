import {StyleSheet} from 'react-native';

import {
  Battle_Infinity,
  Logo,
  Screen,
  universalPaddingHorizontal,
} from '../../theme/dimens';

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

export default styles;
