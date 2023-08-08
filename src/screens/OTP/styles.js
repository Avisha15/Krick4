import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"  },
  referral: colors => ({
    color:'rgba(0, 0, 0, 1)',
    marginTop: Screen.Height / 10,
    fontWeight:"500"
  }),
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  enter: colors => ({
    color: colors.white,
    marginTop: 10,
  }),
  label: {
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
  account: {
    color:'rgba(1, 157, 145, 1)',
    fontWeight:"600",
    textDecorationLine:"underline",
    textDecorationColor:"rgba(1, 157, 145, 1)"
  },
  register:{
    color:'rgba(1, 157, 145, 1)',
    fontWeight:"500",
    textDecorationLine:"underline",
    textDecorationColor:"rgba(1, 157, 145, 1)"
   
  },
  underlineStyleBase: colors => ({
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor:'rgba(1, 157, 145, 1)',
  }),

  underlineStyleHighLighted: colors => ({
    borderColor: colors.textInput,
  }),
});

export default styles;
