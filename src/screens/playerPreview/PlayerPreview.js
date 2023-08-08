import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {
  AppText,
  BLACK,
  FIFTEEN,
  FORTEEN,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  TEN,
  THIRTEEN,
  WHITE,
} from '../../common/AppText';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import PlayerRoleBadge from '../../components/playerRoleBedge/PlayerRoleBedge';
import {
  BAT,
  BAT_BOWL,
  BOWL,
  DUMMY_USER,
  GLOVE,
  green_ground,
  LEFT_ARROW,
  LINEAR_GRADIENT,
  player_placeholder,
  BackIcon,
  PREVIEW_GRADIENT,
} from '../../helper/image';
import {toastAlert} from '../../helper/utility';
import NavigationService from '../../navigation/NavigationService';
import {SELECT_CAPTAIN} from '../../navigation/routes';
import {data} from '../selectPlayer/SelectPlayer';
import styles from './styles';

const PlayerPreview = () => {
  const route = useRoute();
  let players_List = route?.params?.selectedPlayerDetails ?? [];

  let wicket_keepers_list = players_List?.filter(item => {
    return item?.playing_role === 'wk';
  });
  let bowlers_list = players_List?.filter(item => {
    return item?.playing_role === 'bowl';
  });
  let batsman_list = players_List?.filter(item => {
    return item?.playing_role === 'bat';
  });
  let all_rounder_list = players_List?.filter(item => {
    return item?.playing_role === 'all';
  });
  const onContinueClick = () => {
    if (players_List?.length < 11) {
      return toastAlert.showToastError('Plz Select 11 Players');
    }

    NavigationService.navigate(SELECT_CAPTAIN, {
      matchDetails: route?.params?.oldData,
      selectedPlayers: route?.params?.selectedPlayers,
      selctedPlayerDetails: route?.params?.selectedPlayerDetails,
    });
  };
  return (
    <AppSafeAreaView statusColor={'black'}>
      <ImageBackground
        resizeMode="cover"
        style={styles.secondImage}
        source={green_ground}>
        <View
          style={styles.card}>
          <View style={styles.top}>
            <TouchableOpacityView onPress={() => NavigationService.goBack()}>
              <FastImage
                source={BackIcon}
                resizeMode="contain"
                style={styles.leftArrow}
              />
            </TouchableOpacityView>
          </View>
          <View style={styles.teamNameContainer}>
            <AppText weight={POPPINS} style={styles.teamName}>
              {route?.params?.oldData?.TeamA}
            </AppText>
            <AppText
              style={{color: 'white', opacity: 0.6}}
              type={TEN}
              weight={POPPINS}>
              Max 7 player from a team
            </AppText>
            <AppText weight={POPPINS} style={styles.teamName}>
              {route?.params?.oldData?.TeamB}
            </AppText>
          </View>
          <View style={styles.midContainer}>
            <View style={styles.teamView}>
              <FastImage
                source={{uri: route?.params?.oldData?.TeamAlogo}}
                style={styles.teamLogo}
                resizeMode="contain"
              />
              <AppText style={{color: 'white'}}>
                {route?.params?.oldData?.TeamsShortNames &&
                  route?.params?.oldData?.TeamsShortNames.length > 0 &&
                  route?.params?.oldData?.TeamsShortNames[0]}
              </AppText>
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppText
                weight={POPPINS_BOLD}
                type={TEN}
                style={styles.colorWhite}>
                127/15
              </AppText>
              <AppText
                type={TEN}
                weight={POPPINS_BOLD}
                style={[
                  styles.colorWhite,
                  {
                    paddingHorizontal: 10,
                  },
                ]}>
                :
              </AppText>
              <AppText
                weight={POPPINS_BOLD}
                type={TEN}
                style={styles.colorWhite}>
                128/19
              </AppText>
            </View> */}
            <View style={styles.teamView}>
              <AppText style={{color: 'white'}}>
                {' '}
                {route?.params?.oldData?.TeamsShortNames &&
                  route?.params?.oldData?.TeamsShortNames.length > 0 &&
                  route?.params?.oldData?.TeamsShortNames[1]}
              </AppText>
              <FastImage
                source={{uri: route?.params?.oldData?.TeamBlogo}}
                style={styles.teamLogo}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AppText
                type={TEN}
                weight={POPPINS_BOLD}
                style={styles.colorWhite}>
                {`${route?.params?.selectedPlayers?.length}/11`}
              </AppText>
              <AppText
                style={{color: 'white', fontSize: 9}}
                weight={POPPINS_BOLD}>
                Selection
              </AppText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              {wicket_keepers_list?.map(_ => {
                return <PlayerRoleBadge icon={GLOVE} />;
              })}
              {batsman_list?.map(_ => {
                return <PlayerRoleBadge icon={BAT} />;
              })}

              {all_rounder_list?.map(_ => {
                return <PlayerRoleBadge icon={BAT_BOWL} />;
              })}
              {bowlers_list?.map(_ => {
                return <PlayerRoleBadge icon={BOWL} />;
              })}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AppText
                type={TEN}
                weight={POPPINS_BOLD}
                style={styles.colorWhite}>
                {route?.params?.availableCredits}
              </AppText>
              <AppText
                style={{color: 'white', fontSize: 9}}
                weight={POPPINS_BOLD}>
                Credit
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.groundContainer}>
          <AppText
            type={FORTEEN}
            style={styles.title}
            weight={POPPINS}
            color={WHITE}>
            WICKET KEEPERS ({wicket_keepers_list?.length})
          </AppText>
          <View style={styles.playerContainer}>
            {wicket_keepers_list.length > 0 ? (
              wicket_keepers_list?.map((item, index) => {
                let space =
                  index % 2 == 0
                    ? {backgroundColor: 'rgba(1, 155, 143, 1)'}
                    : {backgroundColor: 'rgba(255, 255, 255, 1)'};

                return (
                  <View style={styles.singlePlayerContainer} key={item?._id}>
                    {item.pid == route?.params?.captainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          C
                        </AppText>
                      </View>
                    )}
                    {item.pid == route?.params?.viceCaptainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          VC
                        </AppText>
                      </View>
                    )}
                    <FastImage
                      source={DUMMY_USER}
                      style={styles.playerImage}
                      resizeMode="contain"
                    />
                    <AppText
                      style={[styles.playerName, space]}
                      type={TEN}
                      color={BLACK}>
                      {item?.short_name}
                    </AppText>
                  </View>
                );
              })
            ) : (
              <FastImage
                source={player_placeholder}
                style={styles.playerImage}
                resizeMode="contain"
              />
            )}
          </View>
          <AppText
            type={FORTEEN}
            style={styles.title2}
            weight={POPPINS}
            color={WHITE}>
            BATSMEN ({batsman_list?.length})
          </AppText>
          <View style={styles.playerContainer}>
            {batsman_list.length > 0 ? (
              batsman_list?.map((item, index) => {
                let space =
                  index % 2 == 0
                    ? {backgroundColor: 'rgba(1, 155, 143, 1)'}
                    : {backgroundColor: 'rgba(255, 255, 255, 1)'};

                return (
                  <View style={styles.singlePlayerContainer} key={item?._id}>
                    {item.pid == route?.params?.captainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          C
                        </AppText>
                      </View>
                    )}
                    {item.pid == route?.params?.viceCaptainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          VC
                        </AppText>
                      </View>
                    )}
                    <FastImage
                      source={DUMMY_USER}
                      style={styles.playerImage}
                      resizeMode="contain"
                    />
                    <AppText
                      style={[styles.playerName, space]}
                      type={TEN}
                      color={BLACK}>
                      {item?.short_name}
                    </AppText>
                  </View>
                );
              })
            ) : (
              <FastImage
                source={player_placeholder}
                style={styles.playerImage}
                resizeMode="contain"
              />
            )}
          </View>
          <AppText
            type={FORTEEN}
            style={styles.title2}
            weight={POPPINS}
            color={WHITE}>
            ALL ROUNDERS ({all_rounder_list?.length})
          </AppText>
          <View style={styles.playerContainer}>
            {all_rounder_list.length > 0 ? (
              all_rounder_list?.map((item, index) => {
                let space =
                  index % 2 == 0
                  ? {backgroundColor: 'rgba(1, 155, 143, 1)'}
                  : {backgroundColor: 'rgba(255, 255, 255, 1)'};
                return (
                  <View style={styles.singlePlayerContainer} key={item?._id}>
                    {item.pid == route?.params?.captainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          C
                        </AppText>
                      </View>
                    )}
                    {item.pid == route?.params?.viceCaptainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          VC
                        </AppText>
                      </View>
                    )}
                    <FastImage
                      source={DUMMY_USER}
                      style={styles.playerImage}
                      resizeMode="contain"
                    />
                    <AppText
                      style={[styles.playerName, space]}
                      type={TEN}
                      color={BLACK}>
                      {item?.short_name}
                    </AppText>
                  </View>
                );
              })
            ) : (
              <FastImage
                source={player_placeholder}
                style={styles.playerImage}
                resizeMode="contain"
              />
            )}
          </View>
          <AppText
            type={FORTEEN}
            style={styles.title2}
            weight={POPPINS}
            color={WHITE}>
            BOWLERS ({bowlers_list?.length})
          </AppText>
          <View style={styles.playerContainer}>
            {bowlers_list.length > 0 ? (
              bowlers_list?.map((item, index) => {
                let space =
                  index % 2 == 0
                  ? {backgroundColor: 'rgba(1, 155, 143, 1)'}
                  : {backgroundColor: 'rgba(255, 255, 255, 1)'};

                return (
                  <View style={styles.singlePlayerContainer} key={item?._id}>
                    {item.pid == route?.params?.captainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          C
                        </AppText>
                      </View>
                    )}
                    {item.pid == route?.params?.viceCaptainId && (
                      <View style={styles.captainBedge}>
                        <AppText style={styles.captain} weight={POPPINS_BOLD}>
                          VC
                        </AppText>
                      </View>
                    )}
                    <FastImage
                      source={DUMMY_USER}
                      style={styles.playerImage}
                      resizeMode="contain"
                    />
                    <AppText
                      style={[styles.playerName, space]}
                      type={TEN}
                      color={BLACK}>
                      {item?.short_name}
                    </AppText>
                  </View>
                );
              })
            ) : (
              <FastImage
                source={player_placeholder}
                style={styles.playerImage}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacityView
            onPress={() => NavigationService.goBack()}
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
                color: 'white',
              }}
              weight={POPPINS_BOLD}>
              CLOSE
            </AppText>
          </TouchableOpacityView>
          <TouchableOpacityView
            onPress={onContinueClick}
            style={[
              styles.btn,
              {
                width: '47%',
              },
            ]}>
            <View
              style={[
                styles.btn,
                {
                  width: '100%',
                  backgroundColor:"rgba(255, 255, 255, 1)"
                },
              ]}
             >
              <AppText
                type={THIRTEEN}
                style={{
                  color: 'rgba(12, 75, 160, 1)',
                }}
                weight={POPPINS_BOLD}>
                SAVE TEAM
              </AppText>
            </View>
          </TouchableOpacityView>
        </View>
      </ImageBackground>
    </AppSafeAreaView>
  );
};

export default PlayerPreview;
