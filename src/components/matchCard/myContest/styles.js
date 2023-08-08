import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 131,
    borderRadius:8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(1, 157, 145, 0.3)',
    marginBottom: 10,
  },
  topContainer: {
    height: 131 - 33,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contestName: {
    color: 'black',
    fontSize: 10,
    opacity: 0.5,
  },
  entryType: {
    color: 'black',
    fontSize: 9,
    opacity: 0.5,
  },
  bedge: {
    height: 25,
    width: 56,
    backgroundColor: 'rgba(0, 184, 28, 1)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: 3,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,

    overflow: 'hidden',
  },
  bottomContainer: {
    height: 32,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:"rgba(0, 0, 0, 0.05)"
  },
  gloryIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  commonViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 10,
    opacity: 0.5,
    marginLeft: 6,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grayContainer: {
    height: 18,
    width: 18,
    backgroundColor: 'rgba(136, 209, 242, 0.3)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamLabel: {
    fontSize: 9,
    color: 'black',
  },
  marginRight7: {
    marginRight: 7,
  },
});

export default styles;
