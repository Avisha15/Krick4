import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {appOperation} from '../../appOperation';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {
  AppText,
  FIFTEEN,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  POPPINS_SEMI_BOLD,
  TEN,
  THIRTEEN,
} from '../../common/AppText';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import CommonTabs from '../../components/matchCard/commonTabs/CommonTabs';
import PlayerRoleBadge from '../../components/playerRoleBedge/PlayerRoleBedge';
import {
  BAT,
  BAT_BOWL,
  BOWL,
  Delhi,
  DUMMY_USER,
  GLOVE,
  GREEN_PLUS_ICON,
  GROUND,
  Gujrat,
  LEFT_ARROW,
  LINEAR_GRADIENT,
  PANDYA,
  PANT,
  PLAYER_GRADIENT,
  RED_MINUS,
} from '../../helper/image';
import {toastAlert} from '../../helper/utility';
import NavigationService from '../../navigation/NavigationService';
import {PLAYER_PREVIEW, SELECT_CAPTAIN} from '../../navigation/routes';
import styles from './styles';

export const data = [
  {
    imageSource: GLOVE,
  },
  {
    imageSource: BAT,
  },
  {
    imageSource: BAT,
  },
  {
    imageSource: BAT,
  },
  {
    imageSource: BOWL,
  },
  {
    imageSource: BOWL,
  },
  {
    imageSource: BOWL,
  },
  {
    imageSource: BOWL,
  },
  {
    imageSource: BOWL,
  },
  {
    imageSource: BOWL,
  },
  {
    imageSource: BOWL,
  },
];
const SelectPlayer = () => {
  const route = useRoute();

  const [allPlayers, setAllPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('WK');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availableCredits, setAvailableCredits] = useState(100);
  const [Tabs, setTabs] = useState(['WK', 'BAT', 'AR ', 'BOWL']);
  const [random, setRandom] = useState(10);
  const [wicketKiper, setWicketKiper] = useState([]);
  const [batsman, setBatsman] = useState([]);
  const [allRounder, setAllRounder] = useState([]);
  const [bowler, setBowler] = useState([]);

  useEffect(async () => {
    try {
      const res = await appOperation.customer.getAllPlayers(route?.params?._id);
      if (res.code == 200) {
        const players = [];
        res?.data?.forEach(items => {
          items?.players?.forEach(player => {
            players.push(player);
          });
        });
        setAllPlayers(players);
      }
    } catch (e) {}
  }, []);
  console.log(allPlayers);
  useEffect(() => {
    let wicket_keepers_list = allPlayers?.filter(item => {
      return item?.playing_role === 'wk';
    });
    let bowlers_list = allPlayers?.filter(item => {
      return item?.playing_role === 'bowl';
    });
    let batsman_list = allPlayers?.filter(item => {
      return item?.playing_role === 'bat';
    });
    let all_rounder_list = allPlayers?.filter(item => {
      return item?.playing_role === 'all';
    });
    let selected_wicket_keepers_list = wicket_keepers_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    let selected_bowlers_list = bowlers_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    let selected_batsman_list = batsman_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    let selected_all_rounder_list = all_rounder_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    // console.log('selected_wicket_keepers_list', selected_wicket_keepers_list);
    setBatsman(new Array(selected_batsman_list?.length).fill(''));
    setWicketKiper(new Array(selected_wicket_keepers_list?.length).fill(''));
    setBowler(new Array(selected_bowlers_list?.length).fill(''));
    setAllRounder(new Array(selected_all_rounder_list?.length).fill(''));

    setTabs([
      `WK (${selected_wicket_keepers_list?.length})`,
      `BAT (${selected_batsman_list?.length})`,
      `AR (${selected_all_rounder_list?.length})`,
      `BOWL (${selected_bowlers_list?.length})`,
    ]);
    setRandom(Math.random());
  }, [selectedPlayers.length, selectedPlayers]);

  // console.log('allPlayers', allPlayers);

  const getPlayersData = () => {
    if (activeTab.includes('BAT')) {
      return allPlayers.filter(player => player?.playing_role == 'bat');
    } else if (activeTab.includes('BOWL')) {
      return allPlayers.filter(player => player?.playing_role == 'bowl');
    } else if (activeTab.includes('WK')) {
      return allPlayers.filter(player => player?.playing_role == 'wk');
    } else if (activeTab.includes('AR')) {
      return allPlayers.filter(player => player?.playing_role == 'all');
    }
  };

  const addPlayerInTeam = items => {
    let wicket_keepers_list = allPlayers?.filter(item => {
      return item?.playing_role === 'wk';
    });
    let bowlers_list = allPlayers?.filter(item => {
      return item?.playing_role === 'bowl';
    });
    let batsman_list = allPlayers?.filter(item => {
      return item?.playing_role === 'bat';
    });
    let all_rounder_list = allPlayers?.filter(item => {
      return item?.playing_role === 'all';
    });
    let selected_wicket_keepers_list = wicket_keepers_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    let selected_bowlers_list = bowlers_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    let selected_batsman_list = batsman_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    let selected_all_rounder_list = all_rounder_list?.filter(item => {
      return selectedPlayers?.includes(item?.pid);
    });
    if (
      selectedPlayers?.length === 11 &&
      selected_wicket_keepers_list?.length > 0 &&
      selected_bowlers_list?.length > 0 &&
      selected_batsman_list?.length > 0
    ) {
      return toastAlert.showToastError('You Have Selected Maximum Players');
    }
    if (items?.fantasy_player_rating > availableCredits) {
      return toastAlert.showToastError('Available Credit is Low');
    }

    //wicket keeper condition
    if (
      selectedPlayers?.length >= 9 &&
      selected_wicket_keepers_list.length !== 0 &&
      selected_batsman_list.length === 0 &&
      activeTab.includes('WK') &&
      !activeTab.includes('BAT')
    ) {
      return toastAlert.showToastError('Please Select at least one Bats Man ');
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_wicket_keepers_list.length !== 0 &&
      selected_all_rounder_list.length === 0 &&
      activeTab.includes('WK') &&
      !activeTab.includes('AR')
    ) {
      return toastAlert.showToastError(
        'Please Select at least one All Rounder',
      );
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_wicket_keepers_list.length !== 0 &&
      selected_bowlers_list.length === 0 &&
      activeTab.includes('WK') &&
      !activeTab.includes('BOWL')
    ) {
      return toastAlert.showToastError('Please Select at least one Bowler');
    }
    //batsman condition
    if (
      selectedPlayers?.length >= 9 &&
      selected_batsman_list.length !== 0 &&
      selected_wicket_keepers_list.length === 0 &&
      activeTab.includes('BAT') &&
      !activeTab.includes('WK')
    ) {
      return toastAlert.showToastError(
        'Please Select at least one Wicker Keeper',
      );
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_batsman_list.length !== 0 &&
      selected_all_rounder_list.length === 0 &&
      activeTab.includes('BAT') &&
      !activeTab.includes('AR')
    ) {
      return toastAlert.showToastError(
        'Please Select at least one All Rounder',
      );
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_batsman_list.length !== 0 &&
      selected_bowlers_list.length === 0 &&
      activeTab.includes('BAT') &&
      !activeTab.includes('BOWL')
    ) {
      return toastAlert.showToastError('Please Select at least one Bowler');
    }
    //all rounder condition
    if (
      selectedPlayers?.length >= 9 &&
      selected_all_rounder_list.length !== 0 &&
      selected_wicket_keepers_list.length === 0 &&
      activeTab.includes('AR') &&
      !activeTab.includes('WK')
    ) {
      return toastAlert.showToastError(
        'Please Select at least one Wicket Keeper',
      );
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_all_rounder_list.length !== 0 &&
      selected_batsman_list.length === 0 &&
      activeTab.includes('AR') &&
      !activeTab.includes('BAT')
    ) {
      return toastAlert.showToastError('Please Select at least one Bats Man');
    }

    if (
      selectedPlayers?.length >= 9 &&
      selected_all_rounder_list.length !== 0 &&
      selected_bowlers_list.length === 0 &&
      activeTab.includes('AR') &&
      !activeTab.includes('BOWL')
    ) {
      return toastAlert.showToastError('Please Select at least one Bowler');
    }

    //bowler condition

    if (
      selectedPlayers?.length >= 9 &&
      selected_bowlers_list.length !== 0 &&
      selected_wicket_keepers_list.length === 0 &&
      activeTab.includes('BOWL') &&
      !activeTab.includes('WK')
    ) {
      return toastAlert.showToastError(
        'Please Select at least one Wicket Keeper',
      );
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_bowlers_list.length !== 0 &&
      selected_batsman_list.length === 0 &&
      !activeTab.includes('BAT') &&
      activeTab.includes('BOWL')
    ) {
      return toastAlert.showToastError('Please Select at least one BatsMan');
    }
    if (
      selectedPlayers?.length >= 9 &&
      selected_bowlers_list.length !== 0 &&
      selected_all_rounder_list.length === 0 &&
      !activeTab.includes('AR') &&
      activeTab.includes('BOWL')
    ) {
      return toastAlert.showToastError(
        'Please Select at least one All Rounder',
      );
    }

    setSelectedPlayers([...selectedPlayers, items?.pid]);
    setAvailableCredits(availableCredits - items?.fantasy_player_rating);
  };

  const removePlayerFromTeam = item => {
    const filterTeam = selectedPlayers?.filter(data => data !== item?.pid);
    setAvailableCredits(availableCredits + item?.fantasy_player_rating);
    setSelectedPlayers(filterTeam);
  };
  const onContinueClick = () => {
    if (selectedPlayers?.length < 11) {
      return toastAlert.showToastError('Plz Select 11 Players');
    }
    const selctedPlayerDetails = [];
    allPlayers.forEach(player => {
      if (selectedPlayers.includes(player?.pid)) {
        selctedPlayerDetails.push(player);
      }
    });

    NavigationService.navigate(SELECT_CAPTAIN, {
      matchDetails: route?.params,
      selectedPlayers: selectedPlayers,
      selctedPlayerDetails: selctedPlayerDetails,
    });
  };
  const onPreview = () => {
    const selctedPlayerDetails = [];
    console.log('allPlayers:::', allPlayers);

    allPlayers.forEach(player => {
      if (selectedPlayers?.includes(player?.pid)) {
        selctedPlayerDetails.push(player);
      }
    });
    NavigationService.navigate(PLAYER_PREVIEW, {
      selectedPlayerDetails: selctedPlayerDetails,
      oldData: route?.params,
      selectedPlayers: selectedPlayers,
      availableCredits: availableCredits,
    });
  };
  const renderItem = ({item}) => {
    return selectedPlayers?.includes(item?.pid) ? (
      <ImageBackground
        source={PLAYER_GRADIENT}
        style={styles.selectPlayerContainer}>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => removePlayerFromTeam(item)}>
          <FastImage
            source={DUMMY_USER}
            style={styles.playerImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.playerName}>{item?.short_name}</Text>
            <Text style={styles.description}></Text>
          </View>
          <Text style={styles.points}>{item?.fantasy_player_rating}</Text>
          <View style={styles.creditBtnView}>
            <Text style={styles.credits}>{item?.fantasy_player_rating}</Text>

            <FastImage
              resizeMode="contain"
              source={RED_MINUS}
              style={styles.plusIcon}
            />
          </View>
        </Pressable>
      </ImageBackground>
    ) : (
      <Pressable
        style={styles.selectPlayerContainer}
        onPress={() => addPlayerInTeam(item)}>
        <FastImage
          source={DUMMY_USER}
          style={styles.playerImage}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.playerName}>{item?.short_name}</Text>
          <Text style={styles.description}>
            {/* <Text style={{color: '#21B5F6'}}>DC</Text> Sel By 91.84%**/}
          </Text>
        </View>
        <Text style={styles.points}>{item?.fantasy_player_rating}</Text>
        <View style={styles.creditBtnView}>
          <Text style={styles.credits}>{item?.fantasy_player_rating}</Text>

          <FastImage
            resizeMode="contain"
            source={GREEN_PLUS_ICON}
            style={styles.plusIcon}
          />
        </View>
      </Pressable>
    );
  };
  return (
    <AppSafeAreaView statusColor={'black'}>
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <ImageBackground source={GROUND} style={styles.top}>
          <View style={styles.topContainer}>
            <TouchableOpacityView onPress={() => NavigationService.goBack()}>
              <FastImage source={LEFT_ARROW} style={styles.leftArrow} />
            </TouchableOpacityView>
          </View>
          <View style={styles.card}>
            <View
             
              style={{
                height: '100%',
                width: '100%',
              }}>
              <View style={styles.teamNameContainer}>
                <AppText weight={POPPINS} style={[styles.teamName]}>
                  {route?.params?.TeamA}
                </AppText>
                <AppText
                  style={{color: 'white', opacity: 0.6, fontSize: 8}}
                  type={TEN}
                  weight={POPPINS}>
                  Max 7 player from a team
                </AppText>
                <AppText weight={POPPINS} style={styles.teamName}>
                  {route?.params?.TeamB}
                </AppText>
              </View>
              <View style={styles.midContainer}>
                <View style={styles.teamView}>
                  <FastImage
                    source={{uri: route?.params?.TeamAlogo}}
                    style={styles.teamLogo}
                    resizeMode="contain"
                  />
                  <AppText style={{color: 'white', paddingLeft: 5}}>
                    {route?.params?.TeamsShortNames &&
                      route?.params?.TeamsShortNames.length > 0 &&
                      route?.params?.TeamsShortNames[0]}
                  </AppText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AppText
                    style={{color: 'white', fontSize: 10}}
                    weight={POPPINS}>
                    VS
                  </AppText>
                </View>
                <View style={styles.teamView}>
                  <AppText style={{color: 'white', paddingRight: 5}}>
                    {' '}
                    {route?.params?.TeamsShortNames &&
                      route?.params?.TeamsShortNames.length > 0 &&
                      route?.params?.TeamsShortNames[1]}
                  </AppText>
                  <FastImage
                    source={{uri: route?.params?.TeamBlogo}}
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
                    {`${selectedPlayers?.length}/11`}
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
                    marginHorizontal: 15,
                  }}>
                  {wicketKiper?.map(_ => {
                    return <PlayerRoleBadge icon={GLOVE} />;
                  })}
                  {batsman?.map(_ => {
                    return <PlayerRoleBadge icon={BAT} />;
                  })}
                  {bowler?.map(_ => {
                    return <PlayerRoleBadge icon={BOWL} />;
                  })}
                  {allRounder?.map(_ => {
                    return <PlayerRoleBadge icon={BAT_BOWL} />;
                  })}
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <AppText
                    type={TEN}
                    weight={POPPINS_BOLD}
                    style={styles.colorWhite}>
                    {availableCredits}
                  </AppText>
                  <AppText
                    style={{color: 'white', fontSize: 9}}
                    weight={POPPINS_BOLD}>
                    Credit
                  </AppText>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <View style={styles.tabContainer}>
            {Tabs?.map(data => {
              return data?.includes(activeTab) ? (
                <View
                  style={[styles.tab]}
                 >
                  <Text
                    style={[
                      styles.colorWhite,
                      {
                        fontSize: 10,
                      },
                    ]}>
                    {data}
                  </Text>
                </View>
              ) : (
                <TouchableOpacityView
                  style={{ width: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '98%',
                  borderRadius: 20,
              }}
                  onPress={() => {
                    console.log('dt', data);
                    setActiveTab(data);
                  }}>
                  <Text
                    style={[
                      styles.colorWhite,
                      {
                        fontSize: 10,
                      },
                    ]}>
                    {data}
                  </Text>
                </TouchableOpacityView>
              );
            })}
          </View>
        </View>
        <View style={styles.playerListingHead}>
          <Text style={styles.playerListingHeadTitle}>INFO</Text>
          <Text style={styles.playerListingHeadTitle}>PLAYERS</Text>
          <Text style={styles.playerListingHeadTitle}>POINTS</Text>
          <Text style={styles.playerListingHeadTitle}>CREDITS</Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={getPlayersData()}
            renderItem={renderItem}
            contentContainerStyle={{paddingBottom: 120}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacityView
            onPress={onPreview}
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
            onPress={onContinueClick}
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
             locations={[0.0,0.24,1.0]}
              colors={['rgba(27, 188, 185, 1)',
               'rgba(19, 179, 173, 1)',
                'rgba(0, 155, 143, 1)']}>
              <AppText
                type={THIRTEEN}
                style={{
                  color: 'white',
                }}
                weight={POPPINS_BOLD}>
                CONTINUE
              </AppText>
            </LinearGradient>
          </TouchableOpacityView>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default SelectPlayer;
