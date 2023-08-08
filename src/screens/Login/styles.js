import {StyleSheet} from 'react-native';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  img:{
    width:55,
    height:67,
    resizeMode:"contain",
    marginTop: Screen.Height / 10,
  },
  imgs:{
    top:50,
    width:393,
    height:277,
    resizeMode:"contain",
    alignSelf:"center",
    
    
  },
  referral: colors => ({
    color:'rgba(0, 0, 0, 1)',
    marginTop: Screen.Height /40,
    fontSize:20,
    fontWeight:"500",
  }),
  bottomContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  enter: colors => ({
    color:'rgba(1, 157, 145, 1)',
    marginTop:5,
    fontSize:40,
    fontWeight:"800",
    bottom:20
  }),
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
    textAlign:"center"
  },
  button: {
    marginTop: 50,
  },
  account: colors => ({
    color:'rgba(0, 0, 0, 1)',
    alignSelf: 'center',
   
  }),
  register:{
    color:'rgba(1, 157, 145, 1)',
  },
  forgot: colors => ({
    color: colors.white,
    alignSelf: 'flex-end',
    marginTop: 15,
  }),
  password: {
    marginTop: 15,
  },
});

export default styles;
