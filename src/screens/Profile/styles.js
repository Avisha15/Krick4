import {universalPaddingHorizontal} from '../../theme/dimens';
import {StyleSheet,Dimensions} from 'react-native';
import {fontFamilyPoppins} from '../../theme/typography';

const styles = StyleSheet.create({
  container: colors => ({
    flex: 1,
    backgroundColor:'#F5F5F5',
  }),
  containers:{
  width: Dimensions.get('window').width,
  paddingTop: 15,
  paddingHorizontal: 10,
  },
  backgroundColorContainer: {
    height: 280,
    width: '100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    alignSelf:"center",
  },
  ImageBackground: {
    height: 270,
    width: '100%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height:24.57,
    width: 113,
  },
  bellIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
    marginRight: 15,
  },
  walletIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
  },
  userLogo: {
    height: 28,
    width: 28,
  },
  color: colors => ({
    color:'rgba(0, 0, 0, 1)',
  }),
  backGroundImageStyle: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  rightImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topView: {
    paddingHorizontal: universalPaddingHorizontal,
  },
  secondView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageView: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 45,
    borderColor:"rgba(1, 157, 145, 1)",
    borderWidth:1
    // padding: 1,
  },
  profileImage: {
    width: 83,
    height: 83,
    borderRadius: 45,
    margin: 1,
  },
  informationView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  editButton: {width: 60},
  editButtonTitle: {
    fontSize: 12,
    fontFamily: fontFamilyPoppins,
  },
  balanceCard: {
    height: 200,
    width: '100%',
    // width: '105%',
    // marginEnd: 30,
  },
  balanceCardFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 25,
  },
  balanceCardSecond: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  secondContainer: {
    paddingHorizontal: universalPaddingHorizontal,
  },
});

export default styles;
