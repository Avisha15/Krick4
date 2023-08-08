import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 'auto',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom:20
  },
  top: {
    height: 46,
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  leftArrow: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  icon: {
    height:17,
    width: 17,
    marginRight: 10,
  },
  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    height: 17,
    width: 17,
  },
  detailBox: {
    overflow: 'hidden',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 'auto',
  },
  matchDetails: {
    height: 46,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contestDetails: {
    height: 98,
    backgroundColor: 'white',
    padding: 10,
    marginTop: -1,
  },
  teamName: {
    // color: 'white',
    // fontSize: 11,
    paddingLeft: 10,
    flex: 1,
  },
  vsText: {
    // color: 'white',
    opacity: 0.6,
    // fontSize: 10,
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
  tabContainer: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(1, 157, 145, 1)',
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 2,
    flexDirection: 'row',
  },
  tabButton: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  tabTitle: {
    color: 'white',
    fontSize: 12,
  },
  head: {
    height: 33,
    backgroundColor: '#161D23',
    paddingHorizontal: 10,
  },
});

export default styles;
