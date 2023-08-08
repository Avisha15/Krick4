import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  top: {
    height: 54,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  closeIcon: {
    height: 12,
    width: 12,
  },
  label: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    marginBottom: 10,
  },
  entryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  entry: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(1, 157, 145, 1)',
    width: 83,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  amount: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4,
    marginTop: 10,
  },
});

export default styles;
