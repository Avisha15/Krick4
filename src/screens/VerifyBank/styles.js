import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';
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
    borderColor:'rgba(63, 139, 238, 0.3)',
    borderRadius:8,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  }),
  label: colors => ({
    fontSize: 12,
    color: 'rgba(1, 157, 145, 1)',
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
    marginTop: 30,
  },
  upload: colors => ({
    color: colors.white,
    marginTop: 10,
  }),
  image: {
    height: 34,
    width: 34,
    alignSelf: 'center',
    marginTop: 50,
  },
  uploadContainer: colors => ({
    borderWidth: 2,
    borderColor: colors.dot,
    borderRadius: 16,
    marginTop: 10,
    height: 139,
  }),
});

export default styles;
