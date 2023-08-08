import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    height: 162,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 10,
  },
  topContainer: {
    height: 162 - 33,
    width: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  top: {
    height: 33,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 33,
  },
  midContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 96,
  },
  playerContainer: {
    flexDirection: 'row',
  },
  captainBedge: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  playerImage: {
    height: 60,
    width: 53,
    resizeMode: 'contain',
  },
  playerName: {
    height: 'auto',
    minHeight: 22,
    width: 70,
    backgroundColor: 'rgba(1, 155, 143, 1)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
