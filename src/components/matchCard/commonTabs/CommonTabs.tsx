import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacityView} from '../../../common/TouchableOpacityView';
import styles from './styles';
import {AppText, SEMI_BOLD} from '../../../common/AppText';

const CommonTabs = ({activeTab, setActiveTab, totalCount}) => {
  const data = [
    {
      id: 1,
      title: 'Contest',
    },
    {
      id: 2,
      title: `My Contest (${totalCount[0]})`,
    },
    {
      id: 3,
      title: `My Team (${totalCount[1]})`,
    },
  ];

  return (
    <View style={styles.container}>
      {data?.map(item => {
        return item.id == activeTab ? (
          <LinearGradient
            style={[styles.tabs]}
           locations={[0.0,0.24,1.0]}
            colors={['rgba(27, 188, 185, 1)',
              'rgba(19, 179, 173, 1)',
              'rgba(0, 155, 143, 1)']}>
            <AppText weight={SEMI_BOLD}>{item?.title}</AppText>
          </LinearGradient>
        ) : (
          <TouchableOpacityView
            style={styles.tabs}
            onPress={() => setActiveTab(item?.id)}>
            <AppText style={{color:"black"}} weight={SEMI_BOLD}>{item?.title}</AppText>
          </TouchableOpacityView>
        );
      })}
    </View>
  );
};

export default CommonTabs;
