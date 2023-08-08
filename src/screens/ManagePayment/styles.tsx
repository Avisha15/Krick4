import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
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
  cardContainer: {
    flexDirection: 'row',
  },
  add: colors => ({
    color: colors.red,
    padding: 15,
  }),

  box: colors => ({
    borderWidth: 1,
    borderColor: colors.textInput,
    borderRadius: 16,
    marginTop: 10,
  }),
  textInputBox: {
    height: 45,
    width: 330,
  },
  delete: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    marginRight: 10,
  },
  deleteContainer: {
    alignSelf: 'center',
  },
  button: {
    marginTop: Screen.Height / 3,
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
    color: colors.grey,
    marginLeft: 10,
  }),
  mobile2: colors => ({
    color:'black',
    marginLeft: 10,
  }),
  topContainers: {
    flexDirection: 'row',
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
    color:'black',
    marginTop: 20,
  }),
  card: {
    height:42,
    width: 42,
  },
  phoneContainer: colors => ({
    backgroundColor: colors.whitefade,
    height: 45,
    width: 45,
    marginHorizontal: 3,
    marginVertical: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  mobileContainer: {
    alignSelf: 'center',
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
  number: colors => ({
    color:"rgba(30, 98, 188, 1)",
  }),
  options: colors => ({
    color:'black',
    marginTop: 20,
  }),
  link: colors => ({
    color:'rgba(0, 109, 236, 1)',
    alignSelf: 'center',
    marginRight: 10,
  }),
  modalBox: colors => ({
    height: 240,
    width: '95%',
    padding: 30,
    marginHorizontal: 20,
    backgroundColor: colors.black,
    justifyContent: 'space-between',
  }),
  modalText: colors => ({
    textAlign: 'center',
    color: colors.white,
  }),
});

export default styles;
