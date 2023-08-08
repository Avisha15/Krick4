import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppText} from '../AppText';
import styles from './styles';

const TripleToggle = props => {
  const {
    label1,
    label2,
    label3,
    onPress,
    extraContainerStyle,
    extraJob,
    extraDetail,
    selectedLabel,
  } = props;

  // const [selectedLabel, setSelectedLabel] = useState('upcoming');

  const onClick = upcoming => {
    // setSelectedLabel(upcoming);
    onPress(upcoming);
  };

  return (
    <View style={[styles.container, extraContainerStyle]}>
      <TouchableOpacity
        onPress={() => onClick('upcoming')}
        style={
          selectedLabel === 'upcoming'
            ? [styles.detailContainer, extraDetail]
            : [styles.jobContainer, extraJob]
        }>
        <AppText
          style={selectedLabel === 'upcoming' ? styles.detail : styles.job}>
          {label1}
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onClick('live')}
        style={
          selectedLabel === 'live'
            ? [styles.detailContainer, extraDetail]
            : styles.jobContainer
        }>
        <Text style={selectedLabel === 'live' ? styles.detail : styles.job}>
          {label2}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          selectedLabel === 'completed'
            ? [styles.detailContainer, extraDetail]
            : styles.jobContainer
        }
        onPress={() => onClick('completed')}>
        <Text
          style={selectedLabel === 'completed' ? styles.detail : styles.job}>
          {label3}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TripleToggle;
