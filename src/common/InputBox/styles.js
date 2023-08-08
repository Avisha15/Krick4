import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Primary} from '../../theme/dimens';
import {poppinsBold, poppinsLight, poppinsSemiBold} from '../../theme/typography';
// import {colors} from '../../theme/color';

const styles = StyleSheet.create({
  textinputstyle: colors => ({
    height: Primary.Height,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: 'black',
    fontSize: 14,
    fontFamily: poppinsLight,
  }),
  gradient: {
    height: Primary.Height,
    top:10,
    backgroundColor:"#F5F5F5",
   
    // marginTop: 10,
  },

  eyeIcon: {
    height: 20,
    width: 20,
  },
  toggleButton: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    height: Primary.Height,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
    NameLabel: colors => ({
    color:'rgba(232, 236, 244, 1)',
    // marginTop: 10,
    marginVertical: 10,
  }),
});

export default styles;
