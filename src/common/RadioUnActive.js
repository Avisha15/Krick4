import React from 'react';
import {View, StyleSheet} from 'react-native';

const RadioUnActive = () => {
  return <View style={styles.radio}></View>;
};
const styles = StyleSheet.create({
  radio: {
    height: 18,
    width: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: 10,
    borderRadius: 50,
  },
});
export default RadioUnActive;
