import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    height: 140,
    width: '100%',
    overflow: 'hidden',
    marginBottom: 15,
    position: 'relative',
  },
  matchImage: {
    height:260,
    width: '100%',
    borderColor:"rgba(1, 157, 145, 0.3)",
    borderWidth:1,
    borderRadius:8,
  },
  bottom: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  shape: {
    width: 111,
    height: 29,
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  teamImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginTop: 10,
  },
  live: {
    color: '#15CE31',
    fontSize: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 10,
  },
  paddingLeft20: {
    paddingLeft: 20,
  },
  teamName: {
    // color: 'white',
    // fontSize: 10,
    // lineHeight: 15,
    textAlign: 'center',
    color:"rgba(0, 0, 0, 1)"
    // flex: 1,
    // width: 120,
  },
  today: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    // marginTop: 20,
  },
  lineUpOut: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineUpOutText: {
    color: 'rgba(0, 184, 28, 1)',
    fontSize: 10,
  },
  greenCircle: {
    height: 8,
    width: 8,
    backgroundColor: 'rgba(0, 184, 28, 1)',
    marginRight: 5,
    borderRadius: 50,
  },
  contestName: {
    height: 16,
    width: 'auto',
    minWidth: 38,
    borderWidth: 1,
    borderColor: 'rgba(0, 184, 28, 1)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  teamShortName: {
    fontSize: 12,
    color: 'white',
  },
});

export default styles;