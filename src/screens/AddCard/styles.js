import {StyleSheet} from 'react-native';

import {Primary, universalPaddingHorizontal} from '../../theme/dimens';
import {fontFamilyPoppins} from '../../theme/typography';

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  withdraw: colors => ({
    color:'black',
    marginTop: 20,
  }),
  wallet: colors => ({
    color: colors.code,
    marginTop: 15,
  }),

  box: colors => ({
    borderWidth: 1,
    borderColor:'rgba(1, 157, 145, 0.3)',
    borderRadius:8,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  }),
  InputBoxLabel: colors => ({
    color:'black',
    fontSize: 11,
    marginVertical: 6,
  }),
  calandar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  InputBox: {
    borderWidth: 1,
    borderColor:'rgba(1, 157, 145, 0.3)',
    borderRadius:8,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // borderColor: 'rgba(1, 157, 145, 0.3)',
    // borderRadius: 8,
    // borderWidth: 1,
    // width: '100%',
    // paddingLeft: 10,
    // fontFamily: fontFamilyPoppins,
    // fontSize: 12,
    // height: Primary.Height,
    // paddingHorizontal: 15,
  },
  label: colors => ({
    fontSize: 12,
    color:'rgba(1, 157, 145, 1)',
    marginTop: 0,
    marginBottom: 5,
  }),
  textInputBox: colors => ({
    fontFamily: fontFamilyPoppins,
    fontSize: 12,
  }),
  InputBoxContainer: {
  bottom:10
  },
  label: colors => ({
    fontSize: 12,
    color:'rgba(1, 157, 145, 1)',
    marginTop: 0,
    marginBottom: 5,
  }),
  boxContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  bottomBoxContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    marginTop: 30,
  },

  image: {
    height: 24,
    width: 22,
    alignSelf: 'center',
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    // marginBottom: 10,
  },
  textInputStyle: {
    height: 40,
    width: 157,
  },
});

export default styles;
