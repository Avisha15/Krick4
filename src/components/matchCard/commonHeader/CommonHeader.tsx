import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  AppText,
  ELEVEN,
  FIFTEEN,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_LIGHT,
  POPPINS_SEMI_BOLD,
  SEMI_BOLD,
} from '../../../common/AppText';
import {TouchableOpacityView} from '../../../common/TouchableOpacityView';
import {
  bell,
  FILTER_ICON,
  GROUND,
  LEFT_ARROW,
  LINEAR_GRADIENT,
  walletIcon,
  backIcon,
  wall,
  noti,
  arrow
} from '../../../helper/image';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';
import {MY_BALANCE} from '../../../navigation/routes';
import {getDate} from '../MatchCard';
const DATA = [
  {
    id: 1,
    title: 'ENTRY',
  },
  {
    id: 2,
    title: 'SPORTS',
  },
  {
    id: 3,
    title: 'PRIZE POOL',
  },
  {
    id: 4,
    title: '%WINNER',
  },
];
const CommonHeader = ({showPopup, showFilter, details}) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getDate(details));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({item}) => {
    return <Text style={styles.entryTitle}>{item?.title}</Text>;
  };

  return (
    <View style={{flex:1}}>
    <ImageBackground
      style={styles.container}
      source={GROUND}
      resizeMode={'contain'}>
      <View style={styles.top}>
        <TouchableOpacityView onPress={() => NavigationService.goBack()}>
          <FastImage source={backIcon} style={styles.leftArrow} />
        </TouchableOpacityView>
        <AppText
          weight={POPPINS_BOLD}
          type={FIFTEEN}
          style={[styles.text, styles.alignSelfCenter]}>
          {time}
        </AppText>
        <View style={styles.rightImageContainer}>
          <TouchableOpacityView onPress={showPopup}>
            <FastImage source={noti} style={styles.bellIcon} />
          </TouchableOpacityView>
          <TouchableOpacityView onPress={() =>NavigationService.navigate(MY_BALANCE)}>
            <FastImage source={wall} style={styles.walletIcon} />
          </TouchableOpacityView>
        </View>
      </View>
      <View style={styles.card}>

          <AppText
            weight={SEMI_BOLD}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              top: 5,
              
            }}>
            {details?.SeriesName}
          </AppText>
          <View style={styles.teamContainer}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={{alignItems: 'center'}}>
                
                <FastImage
                  source={{uri: details?.TeamAlogo}}
                  style={styles.teamImage}
                  resizeMode="contain"
                />
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FastImage
                    source={{uri: details?.TeamAlogo}}
                    style={styles.teamImage}
                    resizeMode="contain"
                  />
                  <AppText
                    style={[
                      styles.teamShortName,
                      {
                        marginLeft: 5,
                      },
                    ]}
                    weight={POPPINS_BOLD}>
                    {details?.TeamsShortNames[0]}
                  </AppText>
                </View> */}
              </View>
              <AppText
                style={[
                  {
                    marginLeft: 5,
                    marginTop: 5,
                  },
                ]}
                weight={POPPINS_BOLD}>
                {details && details?.TeamsShortNames?.length !== 0
                  ? details?.TeamsShortNames[0]
                  : ''}
              </AppText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppText weight={POPPINS}>VS</AppText>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <AppText
                style={[
                  {
                    marginRight: 5,
                  },
                ]}
                weight={POPPINS_BOLD}>
                {details?.TeamsShortNames[1]}
              </AppText>
              <View style={{alignItems: 'center'}}>
              
                <FastImage
                  source={{uri: details?.TeamBlogo}}
                  style={styles.teamImage}
                  resizeMode="contain"
                />
              </View>
            </View>
           
          </View>
         
      </View>
      <View style={styles.filterContainer}>
          <AppText
            weight={POPPINS_LIGHT}
            style={{color: 'black', marginRight: 20}}
            type={ELEVEN}>
            Sort By:
          </AppText>
          <FlatList data={DATA} horizontal renderItem={renderItem} />
          <TouchableOpacityView onPress={showFilter}>
            <FastImage source={FILTER_ICON} style={styles.filterIcon} />
          </TouchableOpacityView>
        </View>
    </ImageBackground>
    </View>
  );
};

export default CommonHeader;
