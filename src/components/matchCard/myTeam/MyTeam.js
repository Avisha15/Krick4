import React, {useEffect, useState} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  AppText,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_SEMI_BOLD,
  TEN,
  TWELVE,
} from '../../../common/AppText';
import {TouchableOpacityView} from '../../../common/TouchableOpacityView';
import {
  CAPTAIN,
  COPY,
  DUMMY_USER,
  GRASS,
  PENCIL,
  SHARE,
  VICE_CAPTAIN,
} from '../../../helper/image';
import styles from './styles';

const MyTeam = ({item, isFromSelect = false, onSelectTeam, isTeamSelected}) => {
  const [wiketKiper, setWiketKiper] = useState(0);
  const [batsman, setBatsman] = useState(0);
  const [allRounder, setAllRounder] = useState(0);
  const [bowler, setBowler] = useState(0);
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const [teamDetails, setTeamDetails] = useState(null);

  console.log(teamDetails);
  useEffect(() => {
    const batsman = item?.players?.filter(
      player => player.playing_role === 'bat',
    );
    const bowler = item?.players?.filter(
      player => player.playing_role === 'bowl',
    );
    const wicketKiper = item?.players?.filter(
      player => player.playing_role === 'wk',
    );
    const allRounder = item?.players?.filter(
      player => player.playing_role === 'all',
    );
    const captain = item?.players?.find(item => item.caption);
    const viceCaptain = item?.players?.find(item => item?.vice_caption);
    setCaptain(captain);
    setViceCaptain(viceCaptain);
    setBatsman(batsman.length);
    setBowler(bowler.length);
    setWiketKiper(wicketKiper?.length);
    setAllRounder(allRounder?.length);
  }, []);
  useEffect(() => {
    const teams = [...new Set(item?.players?.map(data => data?.country))];
    console.log('rekfksd', teams);

    const firstTeamName = teams[0];
    const secondTeamName = teams[1];
    const firstTeamCount = item?.players?.filter(
      item => item?.country === firstTeamName,
    )?.length;
    const secondTeamCount = item?.players?.filter(
      item => item?.country === secondTeamName,
    )?.length;
    setTeamDetails({
      firstTeamName: firstTeamName,
      secondTeamName: secondTeamName,
      firstTeamCount: firstTeamCount,
      secondTeamCount: secondTeamCount,
    });
  }, []);
  const onCardClick = () => {
    if (isFromSelect) {
      return onSelectTeam(item);
    }
  };

  return (
    <Pressable
      style={[
        styles.card,
        isFromSelect &&
          isTeamSelected && {
            borderColor: '#21B5F6',
          },
      ]}
      onPress={onCardClick}>
      <ImageBackground style={styles.topContainer} source={GRASS}>
        <View style={styles.top}>
          <AppText style={{color: 'white'}} type={TWELVE} weight={POPPINS}>
            {item?.name}
          </AppText>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacityView>
              <FastImage source={PENCIL} style={styles.icon} />
            </TouchableOpacityView>
            <FastImage source={COPY} style={styles.icon} />
            <FastImage source={SHARE} style={styles.icon} />
          </View>
        </View>
        <View style={styles.midContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AppText style={{fontSize: 15,color:"white"}} weight={POPPINS_BOLD}>
                {teamDetails?.firstTeamCount}
              </AppText>
              <AppText style={{color:"white"}} weight={POPPINS_SEMI_BOLD}>
                {teamDetails?.firstTeamName}
              </AppText>
            </View>
            <View style={styles.playerContainer}>
              <FastImage source={CAPTAIN} style={styles.captainBedge} />
              <View style={{alignItems: 'center'}}>
                <FastImage source={DUMMY_USER} style={styles.playerImage} />
                <View style={styles.playerName}>
                  <AppText
                    style={{color: 'white', fontSize: 8}}
                    weight={POPPINS_SEMI_BOLD}>
                    {captain?.short_name}
                  </AppText>
                </View>
              </View>
            </View>
            <View style={styles.playerContainer}>
              <FastImage source={VICE_CAPTAIN} style={styles.captainBedge} />
              <View style={{alignItems: 'center'}}>
                <FastImage source={DUMMY_USER} style={styles.playerImage} />
                <View style={styles.playerName}>
                  <AppText
                    style={{color: 'white', fontSize: 8}}
                    weight={POPPINS_SEMI_BOLD}>
                    {viceCaptain?.short_name}
                  </AppText>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <AppText style={{fontSize: 15,color:"white"}} weight={POPPINS_BOLD}>
                {teamDetails?.secondTeamCount}
              </AppText>
              <AppText weight={POPPINS_SEMI_BOLD} style={{color:"white"}}>
                {teamDetails?.secondTeamName}
              </AppText>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.bottom}>
        <AppText type={TEN} weight={POPPINS} style={{color: 'black'}}>
          {` WK (${wiketKiper})`}
        </AppText>
        <AppText type={TEN} weight={POPPINS} style={{color: 'black'}}>
          {`BAT (${batsman})`}
        </AppText>
        <AppText type={TEN} weight={POPPINS} style={{color: 'black'}}>
          {`AR (${allRounder})`}
        </AppText>
        <AppText type={TEN} weight={POPPINS} style={{color: 'black'}}>
          {`BOWL(${bowler})`}
        </AppText>
      </View>
    </Pressable>
  );
};

export default MyTeam;
