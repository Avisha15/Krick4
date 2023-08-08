import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderWidth: 1,
    borderColor: 'rgba(1, 157, 145, 1)',
    marginTop: 30,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    width: '33%',
    height: 38,
    borderRadius: 16,
    justifyContent: 'center',
    padding: 5,

    alignItems: 'center',
  },
  tab: {
    fontSize: 12,
    color: 'white',
  },
});

export default styles;
