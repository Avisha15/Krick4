import {StyleSheet} from 'react-native';

import {Screen} from '../../theme/dimens';

const styles = StyleSheet.create({
  bottomContainer: {
    marginHorizontal: 10,
  },
  withdraw: colors => ({
    color: colors.white,
    marginTop: Screen.Height / 24,
  }),
  topText: colors => ({
    color: colors.white,
    marginTop: 15,
    marginHorizontal: 10,
  }),

  box: colors => ({
    borderWidth: 1,
    borderColor: '#4C5199',
    borderRadius: 16,
    marginTop: 10,
    padding: 15,
  }),
  textInputBox: {
    height: 40,
    // flex: 1,
    // width: '100%',
  },
  boxContainer: {
    // marginHorizontal: 10,
    // marginBottom: 20,
  },
  button: {
    marginTop: Screen.Height / 3,
    marginHorizontal: 10,
  },
  scan: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: Screen.Height / 14,
  },
  copy: {
    width: 54,
    height: 48,
    alignSelf: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: {
    alignSelf: 'center',
  },
  mobile: colors => ({
    color: colors.white,
  }),
  entry: colors => ({
    color: colors.code,
    marginTop: 10,
  }),
  topContainers: {
    flexDirection: 'row',
  },
  horizontalLine: {
    height: 3,
    width: 323,
    marginHorizontal: 15,
    marginTop: 10,
  },
  bottomBox: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  discription: colors => ({
    color: colors.white,
    marginTop: 10,
  }),
  getVerified: colors => ({
    color: colors.white,
    marginTop: 25,
  }),
  phone: {
    height: 18,
    width: 18,
    alignSelf: 'center',
    top: 10,
  },
  phoneContainer: colors => ({
    backgroundColor: colors.white,
    height: 42,
    width: 42,
    marginHorizontal: 3,
    marginVertical: 3,
    borderRadius: 13,
    alignSelf: 'center',
  }),
  mobileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verified: colors => ({
    color: colors.green,
    alignSelf: 'center',
    backgroundColor: colors.verified,
    marginLeft: 13,
    paddingVertical: 2,
    paddingHorizontal: 4,
  }),
  verify: colors => ({
    color: colors.white,
    alignSelf: 'center',
    backgroundColor: colors.verified,
    paddingHorizontal: 10,
    borderRadius: 4,
    paddingVertical: 4,
    marginHorizontal: 10,
  }),
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  heading: colors => ({
    color: colors.code,
    textAlign: 'right',
  }),
  smallBtn: {
    width: 70,
    height: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rsContainer: colors => ({
    backgroundColor: colors.grey,
    alignSelf: 'center',
    borderRadius: 4,
  }),
  rsContainer2: colors => ({
    backgroundColor: '#00B4C3',
    alignSelf: 'center',
    borderRadius: 4,
  }),
  rs: colors => ({
    color: colors.white,

    textAlign: 'center',

    textAlignVertical: 'center',
    width: 70,
    height: 30,
  }),
});

export default styles;
