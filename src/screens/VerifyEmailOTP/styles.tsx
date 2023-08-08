import {StyleSheet} from 'react-native';

import {Screen} from '../../theme/dimens';

const styles = StyleSheet.create({
  bottomContainer: {
    marginHorizontal: 20,
  },
  withdraw: colors => ({
    color:'black',
    marginTop: 20,
  }),
  otp: colors => ({
    color:'rgba(1, 157, 145, 1)',
    marginTop: 0,
    alignSelf: 'center',
    marginBottom: 5,
  }),

  box: colors => ({
    borderWidth: 1,
    borderColor:'rgba(1, 157, 145, 0.3)',
    borderRadius:8,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  }),
  textInputBox: {
    height: 45,
    width: 330,
  },
  boxContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: Screen.Height / 3,
  },
  underlineStyleBase: colors => ({
    width: 40,
    height: 40,
    // borderWidth: 0,
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    borderColor:'rgba(1, 157, 145, 0.3)',
  }),

  underlineStyleHighLighted: colors => ({

  }),
  account: colors => ({
    color:'black',
    alignSelf: 'center',
    marginTop: 15,
  }),
  register: colors => ({
    color:'rgba(1, 157, 145, 1)',
  }),
});

export default styles;
