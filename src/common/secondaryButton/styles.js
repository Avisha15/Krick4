import {StyleSheet} from 'react-native';
import React from 'react';
import {Primary} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: 'center',
  },
  grediant: {
    padding: 1,
  },
  buttonContainer: {
    height: Primary.Height,
   borderColor:"rgba(1, 157, 145, 1)",
   borderWidth:2,
   borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  },

  buttonText: colors => ({
    color:'rgba(1, 157, 145, 1)',
  }),
  touchableopacityview: colors => ({
    backgroundColor: colors.purple,
    height: 50,
    //width: 310,
    borderRadius: 5,
  }),
  textstyle: colors => ({
    textAlign: 'center',
    color: colors.white,
    // fontSize: 18,
    marginVertical: 10,
  }),
});

export default styles;
