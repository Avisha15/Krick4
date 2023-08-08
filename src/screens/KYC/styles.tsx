import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';
import {fontFamilyPoppins} from '../../theme/typography';

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  withdraw: colors => ({
    color: colors.white,
    marginTop: Screen.Height / 24,
  }),
  topText: colors => ({
    color: colors.white,
    marginTop: 15,
    marginHorizontal: 10,
  }),

  box: colors => ({
    borderWidth: 1,
    borderColor:'rgba(1, 157, 145, 0.3)',
    borderRadius:8,
    marginTop: 10,
    // padding: 2,
  }),
  textInputBox: {
    height: 45,
    width: 330,
  },
  boxContainer: {
    // marginHorizontal: 10,
    // marginBottom: 20,
  },
  button: {
    marginTop: Screen.Height / 3,
  },
  scan: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: Screen.Height / 14,
  },
  copy: {
    width: 54,
    height: 48,
    alignSelf: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: {
    alignSelf: 'center',
  },
  mobile: colors => ({
    color:'black',
    marginLeft: 10,
  }),
  topContainers: {
    flexDirection: 'row',
  },
  bottomBox: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  discription: colors => ({
    color: colors.white,
    marginTop: 10,
  }),
  getVerified: colors => ({
    color:'black',
    marginTop: 20,
  }),
  phone: {
    height:42,
    width:42,
  },
  phoneContainer: colors => ({
    backgroundColor: colors.whitefade,
    height: 45,
    width: 45,
    marginHorizontal: 3,
    marginVertical: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
  }),
  mobileContainer: {
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  verified: colors => ({
    color: colors.green,
    alignSelf: 'center',
    backgroundColor: colors.verified,
    marginLeft: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  }),

  editButton: {width: 70, alignSelf: 'center', marginHorizontal: 10},
  editButtonTitle: {
    fontSize: 12,
    fontFamily: fontFamilyPoppins,
  },
});

export default styles;
