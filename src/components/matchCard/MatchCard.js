import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import {LINEAR_GRADIENT} from '../../helper/image';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {
  AppText,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  SEMI_BOLD,
} from '../../common/AppText';
import NavigationService from '../../navigation/NavigationService';
import {MY_CONTEST} from '../../navigation/routes';
import {inWords, toastAlert} from '../../helper/utility';
import {useDispatch} from 'react-redux';
import {setSelectedMatch} from '../../slices/matchSlice';

export const getDate = details => {
  let a = moment();
  let b = moment(details?.StartDateTime);
  const duration = moment.duration(b.diff(a));
  const diffInHours = Math.floor(duration.asHours());
  const diffInDays = Math.floor(duration.asDays());
  const diffInMin = duration.minutes();
  const diffInSec = duration.seconds();
  if (diffInHours > 24) {
    return `${diffInDays}d`;
  } else {
    return `${diffInHours}h ${diffInMin}m ${diffInSec}s`;
  }
};

const MatchCard = ({details, isFromMyMatch = false, tab = null}) => {
  let isMatchToday = moment().isSame(details?.StartDateTime, 'day');
  const [contestDetails, setContestDetails] = useState(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getDate(details));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const contest = details?.contest_details[0]?.data?.reduce(
      (prev, current) => {
        return Number(prev.winning_amount) > Number(current.winning_amount)
          ? prev
          : current;
      },
    );

    setContestDetails(contest);
  }, []);
  const onNavigateContest = () => {
    if (details?.contest_details?.length === 0) {
      return toastAlert.showToastError('There Are No Contest For This Match');
    }

    NavigationService.navigate(MY_CONTEST, {...details, isFromMyMatch, tab});
  };

  return (
    <Pressable style={styles.cardContainer}
     onPress={onNavigateContest}
     >
      <View
        style={[styles.matchImage, {height: contestDetails ? 111 -5: 111}]}>
        <AppText
          weight={SEMI_BOLD}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            top: 5,
            color:"rgba(0, 0, 0, 1)"
          }}>
          {details?.SeriesName}
        </AppText>
        <View style={styles.teamContainer}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-start',
            }}>
            <View style={{alignItems: 'center'}}>
              <AppText numberOfLines={2} style={styles.teamName}>
                {details?.TeamA}
              </AppText>
              <FastImage
                source={{uri: details?.TeamAlogo}}
                style={styles.teamImage}
                resizeMode="contain"
              />
            </View>
            <AppText
              style={[
                {
                  marginLeft: 5,
                  marginTop: 5,
                  color:"rgba(0, 0, 0, 1)"
                },
              ]}
              weight={POPPINS_BOLD}>
              {details && details?.TeamsShortNames?.length !== 0
                ? details?.TeamsShortNames[0]
                : ''}
            </AppText>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.live}>{time}</Text>
            {isMatchToday && <Text style={styles.today}>Today</Text>}
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <AppText
              style={[
                // styles.teamShortName,
                {
                  marginRight: 5,
                  color:"rgba(0, 0, 0, 1)"
                },
              ]}
              weight={POPPINS_BOLD}>
              {details?.TeamsShortNames[1]}
            </AppText>

            <View style={{alignItems: 'center'}}>
              <AppText style={styles.teamName}>{details?.TeamB}</AppText>
              <FastImage
                source={{uri: details?.TeamBlogo}}
                style={styles.teamImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
      {contestDetails && (
        <View style={styles.bottom}>
          {contestDetails?.contest_type && (
            <View style={styles.contestName}>
              <AppText
                style={{color: 'rgba(0, 184, 28, 1)', fontSize: 9}}
                weight={POPPINS_MEDIUM}>
                {contestDetails?.contest_type}
              </AppText>
            </View>
          )}
          <Text
            style={[
              styles.textStyle,
              {
                flex: 1,
                paddingLeft: 5,
                fontWeight: '700',
                color:"rgba(0, 0, 0, 1)"
              },
            ]}>
            ₹ {inWords(contestDetails?.winning_amount)}
          </Text>
          {details?.contest_details[0]?.lineup_out && (
            <View style={styles.lineUpOut}>
              <View style={styles.greenCircle}></View>
              <Text style={styles.lineUpOutText}>LINEUP OUT</Text>
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
};

export default MatchCard;