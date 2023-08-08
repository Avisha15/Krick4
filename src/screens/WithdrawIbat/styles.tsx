import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';
import {fontFamilyPoppins} from '../../theme/typography';

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  withdraw: colors => ({
    color: colors.white,
    marginTop: 20,
  }),
  wallet: colors => ({
    color: colors.code,
    // marginTop: 15,
  }),

  box: colors => ({
    borderWidth: 1,
    borderColor: colors.textInput,
    borderRadius: 16,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  }),

  boxContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    marginTop: Screen.Height / 4,
  },
  label: colors => ({
    fontSize: 12,
    color: colors.code,
    marginTop: 0,
    marginBottom: 5,
  }),
  textInputBox: colors => ({
    fontFamily: fontFamilyPoppins,
    fontSize: 12,
  }),
});

export default styles;
