import {StyleSheet} from 'react-native';

import {Screen} from '../../theme/dimens';
import {fontFamilyPoppins} from '../../theme/typography';

const styles = StyleSheet.create({
  bottomContainer: {
    marginHorizontal: 20,
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
  boxContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: Screen.Height / 2,
  },
  otp: colors => ({
    color:'black',
    marginTop:20,
  }),
});

export default styles;
