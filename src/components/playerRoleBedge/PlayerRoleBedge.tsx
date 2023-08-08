import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const PlayerRoleBadge = ({icon}) => {
  return (
    <View style={styles.container}>
      <FastImage resizeMode="contain" source={icon} style={styles.image} />
    </View>
  );
};

export default PlayerRoleBadge;
