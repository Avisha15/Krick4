import {StyleSheet} from 'react-native';
import {Primary} from '../../theme/dimens';
import {fontFamilyPoppins} from '../../theme/typography';

const styles = StyleSheet.create({
  background: colors => ({
    backgroundColor: 'transparent',
    height: Primary.Height,
    borderRadius: 5,
  }),
  placeholderText: colors => ({
    fontFamily: fontFamilyPoppins,
    fontSize: 12,
  }),
  dropDownContainerStyle: colors => ({
    color:'black',
  }),
  textStyle: colors => ({
    color:'rgba(0, 0, 0, 1)',
  }),
  NameLabel: colors => ({
    color:'rgba(1, 157, 145, 1)',
    marginTop: 20,
    marginBottom: 5,
  }),
  gradient: {height: Primary.Height},
  arrowIcon: colors => ({tintColor: colors.black}),
});

export default styles;
