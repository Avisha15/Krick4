import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: Dimensions.get('window').width,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor:'black'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrow: {
    height: 16,
    width: 16,
  },
  timeLeft: {
    color: 'white',
  },
  text: {
    color: 'white',
    marginLeft: Dimensions.get('window').width / 2.8,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  teamNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 5,
    // paddingBottom: 10,
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
    color: 'white',
  },
  bottomContainer: {
    padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondImage: {
    flex: 1,
  },
  groundContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  playerImage: {
    height: 40,
    width: 40,
  },
  singlePlayerContainer: {
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
  playerName: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  playerContainer: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
  },
  title2: {
    textAlign: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    // backgroundColor: 'black',
    height: 60,
  },
  btn: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  createContest: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  captainBedge: {
    height: 22,
    width: 22,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captain: {
    fontSize: 11,
    color: 'black',
  },
});

export default styles;
