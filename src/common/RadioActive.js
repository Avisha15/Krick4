import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const RadioActive = () => {
  return (
    <View style={styles.radio}>
      <View style={styles.radionInner}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  radio: {
    height: 18,
    width: 18,
    borderColor: 'rgba(27, 188, 185, 1)',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radionInner: {
    height: 12,
    width: 12,
    backgroundColor: 'rgba(27, 188, 185, 1)',
    borderRadius: 50,
  },
});
export default RadioActive;
