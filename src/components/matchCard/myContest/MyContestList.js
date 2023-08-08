import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppText,
  FIFTEEN,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  TEN,
  THIRTEEN,
} from '../../../common/AppText';
import {TouchableOpacityView} from '../../../common/TouchableOpacityView';
import NavigationService from '../../../navigation/NavigationService';
import {LEADERBOARD} from '../../../navigation/routes';
import styles from './styles';
import {numberWithCommas} from '../../../helper/utility';
const MyContestList = ({item, matchDetails}) => {
  console.log('item:::::', item);

  const percentage =
    (item?.contest_details?.joined / (item?.data?.Contestsize || 0)) * 100;
  const onNavigate = () => {
    NavigationService.navigate(LEADERBOARD, {
      details: {
        winning_amount: item?.contest_details?.winning_amount,
        JoinWithMULT: item?.data?.JoinWithMULT,
        EnteryFee: item?.data?.EnteryFee,
        Contestsize: item?.data?.Contestsize,
        joined: item?.contest_details?.joined,
        contest_category_id: item?.contest_category_id,
        match_contest_category_id: item?.match_contest_category_id,
      },
      firstTeamName: matchDetails?.TeamA,
      secondTeamName: matchDetails?.TeamB,
      progressBarWidth: percentage,
      matchDetails: matchDetails,
    });
  };

  return (
    <TouchableOpacityView style={styles.container} onPress={onNavigate}>
      <View style={styles.topContainer}>
        <View style={styles.top}>
          <AppText style={styles.contestName}>PRIZE POOL</AppText>
          {item?.JoinWithMULT && (
            <AppText style={styles.entryType}>Multiple Entries</AppText>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AppText
            style={{color:"black"}}
            type={FIFTEEN}
            weight={POPPINS_BOLD}>
            ₹{numberWithCommas(item?.contest_details?.winning_amount)}
          </AppText>

          <View style={styles.bedge}>
            <AppText style={{color:"black"}} weight={POPPINS_MEDIUM} type={THIRTEEN}>
              ₹{item?.data?.EnteryFee}
            </AppText>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View
            style={{width: `${percentage}%`, height: '100%', borderRadius: 4,backgroundColor:"rgba(0, 155, 143, 1)"}}
           ></View>
        </View>
        <View style={styles.flex}>
          <Text style={{color: 'black', opacity: 0.5, fontSize: 10}}>
            {numberWithCommas(item?.data?.Contestsize)} spots
          </Text>
          <AppText
            style={{color: 'rgba(0, 184, 28, 1)', fontSize: 10}}
            type={POPPINS_MEDIUM}>
            {item?.data?.Contestsize - (item?.contest_details?.joined || 0)}{' '}
            left
          </AppText>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <AppText style={{opacity: 0.5,color:"rgba(0, 0, 0, 1)"}} type={TEN} weight={POPPINS}>
          JOINED WITH {item?.joined_with} TEAM
        </AppText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.grayContainer, styles.marginRight7]}>
            <Text style={styles.teamLabel}>T2</Text>
          </View>
          <View style={styles.grayContainer}>
            <Text style={styles.teamLabel}>T1</Text>
          </View>
        </View>
      </View>
    </TouchableOpacityView>
  );
};
export default MyContestList;
