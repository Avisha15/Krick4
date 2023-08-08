import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import MatchCard from '../../components/matchCard/MatchCard';
import {battle, bell, GROUND, personIcon, walletIcon} from '../../helper/image';
import {getMyMatches} from '../../slices/matchSlice';
import styles from './styles';
import {MY_BALANCE, NFC, REFER_EARN,PROFILE_EDIT,SETTING} from '../../navigation/routes';
import NavigationService from '../../navigation/NavigationService';

const MyMatches = () => {
  const dispatch = useDispatch();
  const tabData = ['Upcoming', 'Live', 'Completed'];
  const [activeTab, setActiveTab] = useState('Upcoming');
  const data = useSelector(state => state?.match?.myMatchesData);
  const isLoading = useSelector(state => state?.match?.isLoading);
  useEffect(() => {
    dispatch(getMyMatches(activeTab == 'Upcoming' ? 'Scheduled' : activeTab));
  }, []);
  const renderItem = ({item}) => {
    return <MatchCard details={item} isFromMyMatch={true} tab={activeTab} />;
  };
  const changeTab = title => {
    setActiveTab(title);
    dispatch(getMyMatches(title == 'Upcoming' ? 'Scheduled' : title));
  };
  return (
    <AppSafeAreaView statusColor={'black'}>
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <View  style={styles.top}>
          <View style={styles.topBar}>
            <FastImage source={personIcon} style={styles.userLogo} />
            <FastImage
              source={battle}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.rightImageContainer}>
              <FastImage source={bell} style={styles.bellIcon} />
              <TouchableOpacityView onPress={() => NavigationService.navigate(MY_BALANCE)}>
              <FastImage source={walletIcon} style={styles.walletIcon} />
              </TouchableOpacityView>
            </View>
          </View>
          <View style={styles.tabContainer}>
            {tabData.map(title => {
              return title == activeTab ? (
                <LinearGradient
                  style={[styles.tabs]}
                locations={[0.0,0.24,1.0]}
                  colors={['rgba(27, 188, 185, 1)',
                  'rgba(19, 179, 173, 1)',
                    'rgba(0, 155, 143, 1)']}>
                  <Text style={{fontSize: 12,
    color: '#fff'}}>{title}</Text>
                </LinearGradient>
              ) : (
                <TouchableOpacityView
                  style={styles.tabs}
                  onPress={() => changeTab(title)}>
                  <Text style={styles.tab}>{title}</Text>
                </TouchableOpacityView>
              );
            })}
          </View>
        </View>
        <View style={{marginTop: -100, paddingBottom: 120}}>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </View>
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default MyMatches;
