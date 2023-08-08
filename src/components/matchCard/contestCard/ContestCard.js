import React, {useRef, useState} from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppText,
  FIFTEEN,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  THIRTEEN,
} from '../../../common/AppText';
import {GLORY, GURANTEE, MULTI, SINGLE, WINNER} from '../../../helper/image';
import NavigationService from '../../../navigation/NavigationService';
import {LEADERBOARD, SELECT_PLAYER} from '../../../navigation/routes';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import SelectTeam from '../../selectTeam/SelectTeam';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMyJoinedContest,
  joinContest,
  setIsContestEntry,
  setSelectedMatch,
} from '../../../slices/matchSlice';
import {numberWithCommas} from '../../../helper/utility';
import Confirmation from '../../../common/Confirmation';

const ContestCard = ({details, totalTeamCount, matchDetails}) => {
  // console.log('details::::::', details);

  const dispatch = useDispatch();
  const selectTeam = useRef();
  const myTeam = useSelector(state => state?.match?.myTeams);
  const percentage = (details?.joined / (details?.Contestsize || 0)) * 100;

  const [isAdd, setIsAdd] = useState(false);

  const onClickContest = () => {
    NavigationService.navigate(LEADERBOARD, {
      details: {
        ...details,
        match_contest_category_id: details?.match_contest_category_id,
      },
      firstTeamName: matchDetails?.TeamA,
      secondTeamName: matchDetails?.TeamB,
      progressBarWidth: percentage,
      matchDetails: matchDetails,
    });
  };
  const onJoinContest = async () => {
    if (totalTeamCount === 0) {
      NavigationService.navigate(SELECT_PLAYER, matchDetails);
      dispatch(setIsContestEntry(true));
      dispatch(setSelectedMatch({...details}));
    } else if (totalTeamCount === 1) {
      setIsAdd(true);
    } else if (totalTeamCount > 1) {
      selectTeam?.current?.open();
    }
  };

  return (
    <Pressable style={styles.container} onPress={onClickContest}>
      <View style={styles.topContainer}>
        <View style={styles.top}>
          <AppText style={styles.contestName}>PRIZE POOL</AppText>
          {details?.JoinWithMULT && (
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
            style={{color: 'black'}}
            type={FIFTEEN}
            weight={POPPINS_BOLD}>
            ₹{numberWithCommas(details?.winning_amount)}
          </AppText>
          {!matchDetails?.isFromMyMatch && (
            <Pressable style={styles.bedge} onPress={onJoinContest}>
              <AppText style={{color:"white"}} weight={POPPINS_MEDIUM} type={THIRTEEN}>
                ₹{numberWithCommas(details?.EnteryFee)}
              </AppText>
            </Pressable>
          )}
        </View>
        <View style={styles.progressBar}>
          <LinearGradient
            style={{width: `${percentage}%`, height: '100%', borderRadius: 4}}
           locations={[0.0,0.24,1.0]}
            colors={['rgba(27, 188, 185, 1)',
              'rgba(19, 179, 173, 1)',
              'rgba(0, 155, 143, 1)']}></LinearGradient>
        </View>
        <View style={styles.flex}>
          <Text style={{color: 'black', opacity: 0.5, fontSize: 10}}>
            {`${numberWithCommas(details?.Contestsize)} spots`}
          </Text>
          <AppText
            style={{color: 'rgba(0, 184, 28, 1)', fontSize: 10}}
            type={POPPINS_MEDIUM}>
            {`${details?.Contestsize - (details?.joined || 0)} spots left`}
          </AppText>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.commonViewStyle}>
            <FastImage source={GLORY} style={styles.gloryIcon} />
            <Text style={styles.commonTextStyle}>
              {details?.EnteryType !== 'Paid'
                ? 'Glory awaits!'
                : `₹${numberWithCommas(details?.Rankdata[0]?.Price)}`}
            </Text>
          </View>
          <View style={styles.commonViewStyle}>
            <FastImage source={WINNER} style={styles.gloryIcon} />
            <Text style={styles.commonTextStyle}>
              {details?.UsableBonusPercantage
                ? details?.UsableBonusPercantage
                : 0}
              %
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              source={details?.JoinWithMULT ? MULTI : SINGLE}
              style={styles.gloryIcon}
            />
            <Text style={styles.commonTextStyle}>
              {details?.JoinWithMULT ? 'Upto 7' : 'Single'}
            </Text>
          </View>
        </View>
        {details?.ConfirmedWin && (
          <View style={styles.flex}>
            <FastImage source={GURANTEE} style={styles.gloryIcon} />
            <Text style={styles.commonTextStyle}>Guaranteed</Text>
          </View>
        )}
      </View>
      <RBSheet
        ref={selectTeam}
        closeOnDragDown={false}
        openDuration={100}
        height={Dimensions.get('window').height}
        customStyles={{
          container: {
            backgroundColor: 'black',
          },
          draggableIcon: {
            backgroundColor: 'transparent',
            display: 'none',
          },
        }}>
        <SelectTeam
          contestDetails={details}
          matchDetails={matchDetails}
          onClose={() => selectTeam?.current?.close()}
        />
      </RBSheet>
      <Confirmation
        isModalVisible={isAdd}
        details={details}
        setIsModalVisible={setIsAdd}
        matchDetails={matchDetails}
      />
    </Pressable>
  );
};

export default ContestCard;
