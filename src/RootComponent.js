import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setMyMatchesHome, setUpComingMatches} from './slices/matchSlice';
const RootComponent = ({children}) => {
  const dispatch = useDispatch();
  const wsRef = useRef(null);
  const userData = useSelector(state => {
    return state.profile.userData;
  });
  const {_id} = userData ?? '';
  const URL = `ws://api.appinopinfo.com/upcoming-matches?limit=10&skip=0&userid=${_id}`;
  console.log('URL', URL);

  useEffect(() => {
    if (_id) {
      wsRef.current = new WebSocket(URL);
      wsRef.current.onopen = () => {
        console.log('connected');
        // wsRef.current.send('1000000');
      };
      wsRef.current.onclose = e => {
        console.log('Connection Failed Plz Check Your Network');
        wsRef.current = new WebSocket(URL);
      };
      wsRef.current.onerror = e => {
        console.log('Something Went Wrong', e);
        wsRef.current = new WebSocket(URL);
      };
      return () => {
        // console.log('return');
        wsRef.current.close();
      };
    }
  }, [_id]);

  useEffect(() => {
    if (!wsRef.current) return;
    wsRef.current.onmessage = e => {
      console.log('df');
      const parseData = JSON.parse(e?.data);
      let temp = parseData?.upcoming?.sort((a, b) => {
        return a?.contest_details?.length < b?.contest_details?.length;
      });
      dispatch(setUpComingMatches(temp));
      dispatch(setMyMatchesHome(parseData?.mymatches));
    };
  });
  return <View style={{flex: 1}}>{children}</View>;
};

export default RootComponent;