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
    color: 'white',
  },
  heading: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  subHeading: {
    color: 'rgba(22, 64, 111, 1)',
    fontSize: 10,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 10,
  },
  playerHeadingBar: {
    width: Dimensions.get('window').width,
    height: 40,
    backgroundColor: 'rgba(22, 29, 35, 0.05)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
  },
  btnContainer: {
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
  playerContainer: {
    height: 60,
    width: Dimensions.get('window').width,
    borderBottomColor: 'rgba(79, 122, 186, 1)',
    borderBottomWidth: 0.2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playerImage: {
    height: 55,
    width: 53,
  },
  playerName: {
    color: 'rgba(0, 0, 0, 1)',
  },
  roleBedge: {
    height: 29,
    width: 29,
    borderWidth: 1,
    borderColor: 'rgba(204, 204, 204, 1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerRole: {
    color: 'black',
    fontSize: 10,
  },
});

export default styles;
