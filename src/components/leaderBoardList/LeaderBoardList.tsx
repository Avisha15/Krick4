import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';

import {AppText, SEMI_BOLD} from '../../common/AppText';
import {DUMMY_USER} from '../../helper/image';
import styles from './styles';
import {useSelector} from 'react-redux';
import {SpinnerSecond} from '../../common/SpinnerSecond';

const LeaderBoardList = ({matchId, id}) => {
  const wsRef = useRef(null);

  const userData = useSelector(state => {
    return state.profile.userData;
  });
  const [leaderBoards, setLeaderBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  let url = `ws://api.appinopinfo.com/leader-board?limit=10&skip=0&matchid=${matchId}&match_contest_category_id=${id}`;
  console.log(url);

  useEffect(() => {
    if (matchId && id) {
      wsRef.current = new WebSocket(url);
      wsRef.current.onopen = () => {
        console.log('connected');
        // wsRef.current.send('1000000');
      };
      wsRef.current.onclose = e => {
        console.log('Connection Failed Plz Check Your Network');
        setLoading(false);
        wsRef.current = new WebSocket(url);
      };
      wsRef.current.onerror = e => {
        console.log('Something Went Wrong', e);
        setLoading(false);
        wsRef.current = new WebSocket(url);
      };
      return () => {
        // console.log('return');
        wsRef.current.close();
      };
    }
  }, [matchId, id]);

  useEffect(() => {
    if (!wsRef.current) return;
    wsRef.current.onmessage = e => {
      const parseData = JSON.parse(e?.data);
      console.log(parseData);
      setLeaderBoards(parseData?.data);
      setLoading(false);
      // setTimeout(() => {
      //   wsRef.current.send(
      //     JSON.stringify({
      //       limit: 10,
      //       skip: 0,
      //       userid: userData?._id,
      //     }),
      //   );
      // }, 2000);
    };
  });

  const renderLeaderBoard = ({item, index}) => {
    console.log('item', JSON.stringify(item));

    return (
      <View style={styles.leaderBoardContainer}>
        <FastImage
          style={styles.userImg}
          resizeMode="contain"
          source={DUMMY_USER}
        />
        <View style={{flex: 1, marginLeft: 5}}>
          <AppText>{`${item?.username} (${item?.total_points})`}</AppText>
          <AppText style={{fontSize: 9, opacity: 0.7}}>
            {item?.team_details?.name}
          </AppText>
        </View>
        <AppText style={{}}>{index + 1}</AppText>
      </View>
    );
  };
  return (
    <>
      <View style={styles.head}>
        <AppText
          weight={SEMI_BOLD}>{`ALL TEAMS (${leaderBoards?.length})`}</AppText>
        <AppText weight={SEMI_BOLD}>Rank</AppText>
      </View>
      <View style={{flex: 1}}>
        {loading ? (
          <SpinnerSecond loading />
        ) : (
          <FlatList
            data={leaderBoards}
            renderItem={renderLeaderBoard}
            contentContainerStyle={{paddingHorizontal: 10}}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

export default LeaderBoardList;
