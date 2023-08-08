import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {
  AppText,
  FIFTEEN,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  SEMI_BOLD,
  THIRTEEN,
} from '../../common/AppText';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import LeaderBoardList from '../../components/leaderBoardList/LeaderBoardList';
import Winnings from '../../components/winnings/Winnings';
import {
  bellIcon,
  GROUND,
  LEFT_ARROW,
  SHORT_LINEAR_GRADIENT,
wallet1,
backIcon,
  noti
} from '../../helper/image';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';
import {numberWithCommas} from '../../helper/utility';
import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const LeaderBoard = () => {
  const route = useRoute();
  const firstTeamName = route?.params?.firstTeamName;
  const secondTeamName = route?.params?.secondTeamName;

  const TABS = ['Winnings', 'Leaderboard'];
  const [activeTab, setActiveTab] = useState(1);

  console.log('route?.params?.details', route?.params?.details);

  const renderTop = () => {
    return (
      <ImageBackground style={styles.container} source={GROUND}>
        <View style={styles.top}>
          <TouchableOpacityView
            onPress={() => NavigationService.goBack()}
            style={{height: 42, width: 42, justifyContent: 'center'}}>
            <FastImage
              source={backIcon}
              style={styles.leftArrow}
              resizeMode="contain"
            />
          </TouchableOpacityView>
          <View style={styles.rightIconContainer}>
            <FastImage
              source={noti}
              resizeMode="contain"
              style={styles.icon}
            />
            <FastImage
              source={wallet1}
              resizeMode="contain"
              style={[styles.walletIcon]}
            />
          </View>
        </View>
        <View style={styles.detailBox}>
          <View
            style={styles.matchDetails}>
            <AppText numberOfLines={2} style={styles.teamName}>
              {firstTeamName}
            </AppText>
            <AppText style={styles.vsText}>VS</AppText>
            <AppText
              numberOfLines={2}
              style={{paddingRight: 10, flex: 1, textAlign: 'right'}}>
              {secondTeamName}
            </AppText>
          </View>
          <View style={styles.contestDetails}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'rgba(0, 0, 0, 1)', opacity: 0.6}}>PRIZE POOL</Text>
              {route?.params?.details?.JoinWithMULT && (
                <Text style={{color: 'rgba(0, 0, 0, 1)', opacity: 0.6}}>
                  Multiple Entries
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 6,
              }}>
              <AppText
                style={{color: 'black'}}
                type={FIFTEEN}
                weight={POPPINS_BOLD}>
                ₹{numberWithCommas(route?.params?.details?.winning_amount)}
              </AppText>

              <View style={styles.bedge}>
                <AppText
                  style={{color: 'white'}}
                  weight={POPPINS_MEDIUM}
                  type={THIRTEEN}>
                  ₹{numberWithCommas(route?.params?.details?.EnteryFee)}
                </AppText>
              </View>
            </View>
            <View style={styles.progressBar}>
              <LinearGradient
                style={{
                  width: `${route?.params?.progressBarWidth}%`,
                  height: '100%',
                  borderRadius: 4,
                }}
               locations={[0.0,0.24,1.0]}
                colors={['rgba(27, 188, 185, 1)',
                 'rgba(19, 179, 173, 1)',
                  'rgba(0, 155, 143, 1)']}></LinearGradient>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 6,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'rgba(0, 0, 0, 1)', fontSize: 10, opacity: 0.6}}>
                {`${numberWithCommas(
                  route?.params?.details?.Contestsize,
                )} spots`}
              </Text>
              <Text style={{fontSize: 10, color: 'rgba(0, 184, 28, 1)'}}>
                {`${
                  route?.params?.details?.Contestsize -
                  (route?.params?.details?.joined || 0)
                } spots left`}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };
  const renderTabs = () => {
    return (
      <View style={styles.tabContainer}>
        {TABS.map((title, index) => {
          return index + 1 == activeTab ? (
            <LinearGradient
            locations={[0.0,0.24,1.0]}
              colors={['rgba(27, 188, 185, 1)',
                'rgba(19, 179, 173, 1)',
                'rgba(0, 155, 143, 1)']}
              style={styles.tabButton}>
              <AppText weight={SEMI_BOLD}>{title}</AppText>
            </LinearGradient>
          ) : (
            <TouchableOpacityView
              style={styles.tabButton}
              onPress={() => setActiveTab(index + 1)}>
              <AppText style={{color:"black"}} weight={SEMI_BOLD}>{title}</AppText>
            </TouchableOpacityView>
          );
        })}
      </View>
    );
  };
  const renderMain = () => {
    return activeTab == 1 ? (
      <Winnings id={route?.params?.details?.contest_category_id} />
    ) : (
      <LeaderBoardList
        matchId={route?.params?.matchDetails?.MatchId}
        id={route?.params?.details?.match_contest_category_id}
      />
    );
  };
  return (
    <AppSafeAreaView statusColor={'black'}>
      <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 10}}>
        {renderTop()}
        {renderTabs()}
        {renderMain()}
      </View>
    </AppSafeAreaView>
  );
};

export default LeaderBoard;
