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
  InputBoxContainer: {
  top:20,
  },
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
    borderColor: 'rgba(1, 157, 145, 0.3)',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    fontFamily: fontFamilyPoppins,
    fontSize: 12,
    height: Primary.Height,
    // paddingHorizontal: 15,
  },
  boxContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
  },
  upload: colors => ({
    color:'black',
    marginTop: 10,
  }),
  image: {
    height: 34,
    width: 34,
    alignSelf: 'center',
    marginTop: 50,
  },
  uploadContainer: colors => ({
    borderWidth: 1,
    borderColor: colors.textInput,
    borderRadius: 16,
    marginTop: 10,
    height: 150,
  }),
});

export default styles;
