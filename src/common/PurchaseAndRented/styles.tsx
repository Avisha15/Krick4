import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#180B40',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    padding: 2,
  },
  wrapperContainer: {
    height: 40,
    // width: '100%',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 30,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    alignItems: 'center',
  },
  firstButton: {
    textAlign: 'center',
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  secondButton: {
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    borderRadius: 40,
    flex: 1,
  },
  btnStyle: {
    height: 40,
    width: '50%',
  },
  rentActive: {
    // backgroundColor: 'green',
  },
  grediant: {
    borderRadius: 20,
    padding: 1,
  },
});

export default styles;
