import {useFocusEffect, useRoute} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {appOperation} from '../../appOperation';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {AppText, POPPINS_BOLD, POPPINS_BOLD_ITALIC, THIRTEEN} from '../../common/AppText';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import FilterSheet from '../../components/filterSheet/FilterSheet';
import CommonHeader from '../../components/matchCard/commonHeader/CommonHeader';
import CommonTabs from '../../components/matchCard/commonTabs/CommonTabs';
import Contest from '../../components/matchCard/contest/Contest';
import MatchRemainder from '../../components/matchCard/matchRemainder/MatchRemainder';
import MyContestList from '../../components/matchCard/myContest/MyContestList';
import MyTeam from '../../components/matchCard/myTeam/MyTeam';
import NavigationService from '../../navigation/NavigationService';
import {SELECT_PLAYER} from '../../navigation/routes';
import {
  getMyJoinedContest,
  getMyTeam,
  setIsContestEntry,
} from '../../slices/matchSlice';
import styles from './styles';
const MyContest = () => {
  const dispatch = useDispatch();
  const sheet = useRef();
  const route = useRoute();
  const filterSheet = useRef();
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [contestList, setContestList] = useState([]);
  const myTeam = useSelector(state => state?.match?.myTeams);
  const myContest = useSelector(state => state?.match?.myContest);
  const getContestList = async () => {
    try {
      setIsLoading(true);
      const res = await appOperation.customer.getContestList(
        route?.params?._id,
      );

      if (res.code == 200) {
        setIsLoading(false);
        setContestList(res?.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getContestList();
      dispatch(getMyTeam(route?.params?._id));
      dispatch(getMyJoinedContest(route?.params?._id));
    }, []),
  );

  const renderItem = ({item}) => {
    return (
      <Contest
        details={item}
        matchDetails={route?.params}
        totalTeamCount={contestList?.teams}
      />
    );
  };
  const renderMyTeam = ({item}) => {
    return <MyTeam item={item} />;
  };
  const renderMyContest = ({item}) => {
    return <MyContestList item={item} matchDetails={route?.params} />;
  };
  return (
    <AppSafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 120}}>
        <CommonHeader
          details={route?.params}
          showFilter={() => filterSheet.current.open()}
          showPopup={() => sheet.current?.open()}
        />
        <View style={styles.mainContainer}>
          <CommonTabs
            totalCount={[myContest?.length, myTeam?.length]}
            activeTab={activeTab}
            setActiveTab={e => setActiveTab(e)}
          />
          {activeTab === 1 && (
            <FlatList
              data={contestList?.data}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
            />
          )}
          {activeTab === 2 && (
            <View style={{marginTop: 15}}>
              <FlatList
                data={myContest}
                showsVerticalScrollIndicator={false}
                renderItem={renderMyContest}
              />
            </View>
          )}
          {activeTab === 3 && (
            <View style={{marginTop: 15}}>
              <FlatList
                data={myTeam}
                renderItem={renderMyTeam}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <RBSheet
        ref={sheet}
        closeOnDragDown={true}
        height={201}
        customStyles={{
          container: {
            backgroundColor:'rgba(255, 255, 255, 1)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: 'transparent',
            display: 'none',
          },
        }}>
        <MatchRemainder onClose={() => sheet?.current?.close()} />
      </RBSheet>
      <RBSheet
        ref={filterSheet}
        closeOnDragDown={true}
        height={450}
        customStyles={{
          container: {
            // backgroundColor: '#172C66',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: 'transparent',
            display: 'none',
          },
        }}>
        <FilterSheet onClose={() => filterSheet?.current?.close()} />
      </RBSheet>
      {activeTab !== 2 && !route?.params?.isFromMyMatch && (
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacityView
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
              weight={POPPINS_BOLD_ITALIC}>
              Create Contest
            </AppText>
          </TouchableOpacityView> */}
          <TouchableOpacityView
            onPress={() => {
              NavigationService.navigate(SELECT_PLAYER, route?.params);
              dispatch(setIsContestEntry(false));
            }}
            style={[
              styles.btn,
              {
                width: '95%',
                alignContent:"center"
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
             'rgba(0, 155, 143, 1)'
                ]}>
              <AppText
                type={THIRTEEN}
                style={{
                  color: 'white',
                }}
                weight={POPPINS_BOLD}>
                Create Team
              </AppText>
            </LinearGradient>
          </TouchableOpacityView>
        </View>
      )}
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default MyContest;
