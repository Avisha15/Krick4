import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FlatSlider from '../../../common/FlatSlider/FlatSlider';
import Swipper from '../../../common/Swipper/Swipper';
import styles from './styles';

const UpcomingMatches = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatSlider />
    </ScrollView>
  );
};

export default UpcomingMatches;
