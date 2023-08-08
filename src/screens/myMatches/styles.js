import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  top: {
    height: 250,
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
  walletIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
  },
  tabContainer: {
    height: 42,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(1, 157, 145, 1)',
    padding: 2,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabs: {
    width: '33.33%',
    height: 38,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 5,

    alignItems: 'center',
  },
  tab: {
    fontSize: 12,
    color: '#000000',
  },
});

export default styles;
