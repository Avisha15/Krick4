import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: Dimensions.get('window').width,
    paddingTop: 42,
    bottom:5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  leftArrow: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
  },
  flex1: {
    flex: 1,
  },
  alignSelfCenter: {
    alignSelf: 'center',
    marginStart: 40,
  },
  rightImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    height:17,
    width:17,
    resizeMode: 'contain',
    marginRight: 10,
  },
  walletIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
  },
  live: {
    color: 'white',
    fontSize: 10,
    opacity: 0.7,
  },
  matchImage: {
    resizeMode: 'contain',
    height: 100,
    width: '100%',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
    bottom:20
  },
  shape: {
    width: 111,
    height: 29,
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  teamImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  filterContainer: {
    height:33,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor:"red",
    width:"100%",
    bottom:10
  },
  entryTitle: {
    color: 'black',
    fontSize: 8,
    marginRight: 15,
  },
  filterIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  card: {
    height: 133,
    width: '100%',
    overflow: 'hidden',
    marginTop: 14,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  teamName: {
    // color: 'white',
    // fontSize: 10,
  },
  teamShortName: {
    fontSize: 12,
    color: 'white',
  },
});

export default styles;
