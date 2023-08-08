import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {appOperation} from '../../appOperation';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {
  AppText,
  FIFTEEN,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  TEN,
  THIRTEEN,
} from '../../common/AppText';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {
  DUMMY_USER,
  GROUND,
  LEFT_ARROW,
  LINEAR_GRADIENT,
  PANT,
} from '../../helper/image';
import {toastAlert} from '../../helper/utility';
import NavigationService from '../../navigation/NavigationService';
import {MY_CONTEST, PLAYER_PREVIEW} from '../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {getMyTeam} from '../../slices/matchSlice';
import Confirmation from '../../common/Confirmation';
const SelectCaptain = () => {
  const route = useRoute();
  // console.log('route?.params?.matchDetails', route?.params?.matchDetails);
  const [captainId, setCaptainId] = useState(null);
  const [viceCaptainId, setViceCaptainId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const myTeam = useSelector(state => state?.match?.myTeams);
  const selectedMatch = useSelector(state => state?.match?.selectedMatch);
  // console.log('selectedMatch', JSON.stringify(selectedMatch));

  const isContestEntry = useSelector(state => state?.match?.isContestEntry);
  const dispatch = useDispatch();
  const onSelectCaptain = id => {
    if (viceCaptainId == id) {
      setViceCaptainId(null);
    }
    setCaptainId(id);
  };
  const onSelectViceCaptain = id => {
    if (captainId == id) {
      setCaptainId(null);
    }
    setViceCaptainId(id);
  };
  const renderPlayer = ({item}) => {
    return (
      <View style={styles.playerContainer}>
        <FastImage
          source={DUMMY_USER}
          resizeMode="contain"
          style={styles.playerImage}
        />
        <View style={{width: '30%'}}>
          <AppText style={styles.playerName}>{item?.short_name}</AppText>
          <AppText style={{  color: 'rgba(0, 0, 0, 1)', fontSize: 10}}>
            <AppText
              style={{
                color: 'rgba(1, 156, 144, 1)',
                fontSize: 10,
              }}>{`${item?.playing_role} |`}</AppText>{' '}
            {item?.playing_role}
          </AppText>
        </View>
        <AppText style={{color: 'black', fontSize: 10}}>
          {item?.fantasy_player_rating}
        </AppText>
        <TouchableOpacityView
          onPress={() => onSelectCaptain(item?.pid)}
          style={[
            styles.roleBedge,
            item?.pid == captainId && {
              backgroundColor: 'rgba(27, 188, 185, 1)',
            },
          ]}>
          <AppText style={styles.playerRole}>
            {item?.pid == captainId ? '2X' : 'C'}
          </AppText>
        </TouchableOpacityView>
        <TouchableOpacityView
          onPress={() => onSelectViceCaptain(item?.pid)}
          style={[
            styles.roleBedge,
            item?.pid == viceCaptainId && {
              backgroundColor: 'rgba(27, 188, 185, 1)',
            },
          ]}>
          <AppText style={styles.playerRole}>
            {item?.pid == viceCaptainId ? '1.5X' : 'VC'}
          </AppText>
        </TouchableOpacityView>
      </View>
    );
  };
  const saveTeam = async () => {
    if (!captainId) {
      return toastAlert.showToastError('Plz Select Captain');
    }
    if (!viceCaptainId) {
      return toastAlert.showToastError('Plz Select Vice Captain');
    }
    try {
      setIsLoading(true);

      const res = await appOperation.customer.saveTeam({
        match_id: route?.params?.matchDetails?._id?.toString(),
        matchid: route?.params?.matchDetails?.MatchId?.toString(),
        name: `T${myTeam?.length + 1}`,
        caption: captainId,
        vice_caption: viceCaptainId,
        pid: route?.params?.selectedPlayers,
      });
      setIsLoading(false);
      if (res?.code == 200) {
        dispatch(getMyTeam(route?.params?.matchDetails?._id));
        if (isContestEntry) {
          setIsAdd(true);
        } else {
          setTimeout(() => {
            NavigationService.navigate(MY_CONTEST, route?.params?.matchDetails);
          }, 1000);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const onPreview = () => {
    NavigationService.navigate(PLAYER_PREVIEW, {
      selectedPlayerDetails: route?.params?.selctedPlayerDetails,
      oldData: route?.params?.matchDetails,
      selectedPlayers: route?.params?.selectedPlayers,
      captainId: captainId,
      viceCaptainId: viceCaptainId,
    });
  };
  return (
    <AppSafeAreaView statusColor={'black'}>
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <ImageBackground source={GROUND} style={styles.top}>
          <View style={styles.topContainer}>
            <TouchableOpacityView onPress={() => NavigationService.goBack()}>
              <FastImage source={LEFT_ARROW} style={styles.leftArrow} />
            </TouchableOpacityView>
            {/*<AppText
              weight={POPPINS_BOLD}
              type={FIFTEEN}
              style={[styles.text, styles.alignSelfCenter]}>
              3h 29m
  </AppText>**/}
          </View>
          <View style={styles.card}>
            <View
              style={{
                height: '100%',
                width: '100%',
              }}>
              <View style={styles.teamNameContainer}>
                <AppText weight={POPPINS} style={styles.teamName}>
                  {route?.params?.matchDetails?.TeamA}
                </AppText>

                <AppText weight={POPPINS} style={styles.teamName}>
                  {route?.params?.matchDetails?.TeamB}
                </AppText>
              </View>
              <View style={styles.midContainer}>
                <View style={styles.teamView}>
                  <FastImage
                    source={{uri: route?.params?.matchDetails?.TeamAlogo}}
                    style={styles.teamLogo}
                    resizeMode="contain"
                  />
                  <AppText style={{color: 'white'}}>
                    {route?.params?.matchDetails?.TeamsShortNames[0]}
                  </AppText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AppText
                    style={{color: 'white', fontSize: 11}}
                    weight={POPPINS}>
                    VS
                  </AppText>
                </View>
                <View style={styles.teamView}>
                  <AppText style={{color: 'white'}}>
                    {' '}
                    {route?.params?.matchDetails?.TeamsShortNames[1]}
                  </AppText>
                  <FastImage
                    source={{uri: route?.params?.matchDetails.TeamBlogo}}
                    style={styles.teamLogo}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <AppText weight={POPPINS_BOLD} style={styles.heading}>
          Choose Captain & Vice Captain
        </AppText>
        <AppText weight={POPPINS} style={styles.subHeading}>
          C will get 2x points & VC will get 1.5x points
        </AppText>
        <View style={styles.playerHeadingBar}>
          <AppText
            style={[
              styles.label,
              {
                width: '20%',
              },
            ]}
            weight={POPPINS}>
            Player
          </AppText>
          <AppText
            style={[
              [
                styles.label,
                {
                  width: '25%',
                },
              ],
            ]}
            weight={POPPINS}>
            Details
          </AppText>
          <AppText style={[styles.label]} weight={POPPINS}>
            Points
          </AppText>
          <AppText style={styles.label} weight={POPPINS}>
            CAP
          </AppText>
          <AppText style={styles.label} weight={POPPINS}>
            V.CAP
          </AppText>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            data={route?.params?.selctedPlayerDetails}
            renderItem={renderPlayer}
            contentContainerStyle={{paddingBottom: 120}}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacityView
            onPress={() => onPreview()}
            style={[
              styles.btn,
              styles.createContest,
              {
                width: '47%',
              },
            ]}>
            <AppText
              type={THIRTEEN}
              style={{
                color: 'rgba(1, 157, 145, 1)',
              }}
              weight={POPPINS_BOLD}>
              TEAM PREVIEW
            </AppText>
          </TouchableOpacityView>
          <TouchableOpacityView
            onPress={saveTeam}
            style={[
              styles.btn,
              {
                width: '47%',
              },
            ]}>
            <LinearGradient
              style={[
                styles.btn,
                {
                  width: '100%',
                },
              ]}
              start={{x: 0, y: 0}}
              colors={['rgba(27, 188, 185, 1)',
                'rgba(19, 179, 173, 1)',
                'rgba(0, 155, 143, 1)']}
                locations={[0.0,0.24,1.0]}>
              <AppText
                type={THIRTEEN}
                style={{
                  color: 'rgba(255, 255, 255, 1)',
                }}
                weight={POPPINS_BOLD}>
                SAVE
              </AppText>
            </LinearGradient>
          </TouchableOpacityView>
        </View>
      </View>
      <Confirmation
        isModalVisible={isAdd}
        details={selectedMatch}
        setIsModalVisible={setIsAdd}
        matchDetails={route?.params?.matchDetails}
      />
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default SelectCaptain;
