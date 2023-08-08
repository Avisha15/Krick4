import {StyleSheet} from 'react-native';
import React from 'react';
import {Primary} from '../../theme/dimens';

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 10,
    height:51,
    alignItems: 'center',
    justifyContent: 'center',
    width:353,
    bottom:60
  },
  linearGradientWrapper: {
    borderRadius: 5,
    padding: 1,
  },
  smallBtn: {
    height: 50,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: colors => ({
    color: colors.white,
    fontWeight:"600"
  }),
});

export default styles;
