import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FlatSlider from '../../../common/FlatSlider/FlatSlider';

import styles from './styles';

const LiveMatches = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatSlider />
    </ScrollView>
  );
};

export default LiveMatches;
