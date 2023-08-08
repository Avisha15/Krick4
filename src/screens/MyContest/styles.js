import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Battle_Infinity, Primary, Screen} from '../../theme/dimens';
import {SmallPrimary} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mainContainer: {
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
    top:30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
    height: 60,
  },
  btn: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  createContest: {
    borderWidth: 1,
    borderColor: '#4F7ABA',
  },
});

export default styles;
