import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacityView} from '../../../common/TouchableOpacityView';
import FastImage from 'react-native-fast-image';
import {RIGHT_ARROW} from '../../../helper/image';
import styles from './styles';
const ViewAll = ({onPress}) => {
  return (
    <TouchableOpacityView style={styles.viewAllBtn} onPress={onPress}>
      <Text style={{color: 'rgba(0, 0, 0, 1)', fontSize: 11, marginRight: 5}}>
        View all
      </Text>
      <FastImage
        source={RIGHT_ARROW}
        style={styles.rightArrow}
        resizeMode="contain"
      />
    </TouchableOpacityView>
  );
};

export default ViewAll;
