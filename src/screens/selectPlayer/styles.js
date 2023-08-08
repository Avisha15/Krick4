import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  top: {
    height: 190,
    width: Dimensions.get('window').width,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 10,
  },
  leftArrow: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    marginLeft: Dimensions.get('window').width / 2.8,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  matchCard: {
    resizeMode: 'contain',
  },
  card: {
    height: 144,
    width: '100%',
    overflow: 'hidden',
    marginTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  teamNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 10,
  },
  teamName: {
    color: 'white',
    opacity: 0.9,
  },
  teamLogo: {
    height: 50,
    width: 50,
  },
  midContainer: {
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorWhite: {
    color: 'rgba(0, 0, 0, 1)',
  },
  bottomContainer: {
    padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabContainer: {
    height: 42,
    borderWidth: 1,
    borderColor: 'rgba(1, 157, 145, 1)',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '98%',
    borderRadius: 20,
    backgroundColor:"rgba(27, 188, 185, 1)"
  
  
  },
  playerListingHead: {
    height: 40,
    backgroundColor: 'rgba(22, 29, 35, 0.05)',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  playerListingHeadTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 9,
    opacity: 0.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
  backgroundColor: '#F5F5F5',
    height: 60,
  },
  btn: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  createContest: {
    borderWidth: 1,
    borderColor: 'rgba(1, 157, 145, 1)',
  },
  playerImage: {
    height: 65,
    width: 53,
  },
  playerName: {
    color: 'black',
    fontSize: 12,
  },
  selectPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
    width: Dimensions.get('window').width,
  },
  description: {
    color: 'black',
    fontSize: 10,
  },
  points: {
    color: 'black',
    fontSize: 12,
  },
  credits: {
    color: 'black',
    fontSize: 12,
  },
  plusIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  creditBtnView: {
    flexDirection: 'row',
  },
});

export default styles;
