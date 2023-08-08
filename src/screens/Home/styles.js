import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userLogo: {
    height: 28,
    width: 28,
  },
  logo: {
    height:24.57,
    width: 113,
  },
  rightImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
    marginRight: 15,
  },
  rightImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
  },
  btn: {
    height: 32,
    width: '47%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circketKit: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 20,
  },
  btnText: {
    color: 'white',
    letterSpacing: 1,
  },
  footbalButton: {
    borderWidth: 1,
    borderColor: '#0C4E9B',
    backgroundColor: '#101124',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
  },
  viewAllBtn: {
    height: 25,
    width: 78,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0C4E9B',
    borderRadius: 16,
  },
  bottom: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  rightArrow: {
    height: 3,
    width: 6,
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000CC',
  },
  modalContainer: {
    width: Dimensions.get('window').width - 20,
    height: 243,
    backgroundColor: '#172C66',
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  modalTopSection: {
    height: 54,
    backgroundColor: 'rgba(0, 2, 17, 0.38)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  closeWhiteIcon: {
    height: 12,
    width: 12,
  },
  modalBottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginRight: 3,
  },
  nextBtn: {
    width: 73,
    height: 30,
    backgroundColor: '#6A37FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    right: 10,
  },
});

export default styles;