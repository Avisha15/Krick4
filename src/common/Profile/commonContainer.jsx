import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CommonContainer = ({children, style}) => {
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: 'rgba(1, 157, 145, 0.3)',
          borderRadius:8,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default CommonContainer;
