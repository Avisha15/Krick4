import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  referral: colors => ({
    color:'rgba(1, 157, 145, 1)',
    marginTop: Screen.Height / 10,
  }),
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
   width:"100%",
   alignSelf:"center"
  },
  enter: colors => ({
    color:'rgba(141, 141, 141, 1)',
    marginTop: 10,
  }),
  label: {
    marginTop: 50,
  },
  button: {
    top:50,
    marginVertical: 20,
    alignSelf:"center"
  },
  account: colors => ({
    color:'rgba(0, 0, 0, 1)',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  }),
  register: colors => ({
    color:'rgba(1, 157, 145, 1)',
  }),
  forgot: colors => ({
    color: colors.white,
    alignSelf: 'flex-end',
    marginTop: 13,
  }),
  inputContainer: {
    marginTop: 15,
  },
  label: {
    top:28,
    color:"rgba(0, 0, 0, 1)",
    zIndex:1,
    backgroundColor:"#F5F5F5",
    height:18,
    width:155,
    fontSize:14,
    fontWeight:"400",
    left:41,
    textAlign:"center",
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    bottom:10
  },
  policy: colors => ({
    color:'rgba(0, 0, 0, 1)',
    marginStart: 10,
    flex: 1,
  }),
});

export default styles;
