import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {appOperation} from '../../appOperation';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {AppText, POPPINS} from '../../common/AppText';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import CommonHeader from '../../components/matchCard/commonHeader/CommonHeader';
import ContestCard from '../../components/matchCard/contestCard/ContestCard';
import styles from './styles';
const AllContestList = ({}) => {
  const route = useRoute();
  const [allContestList, setAllContestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllContestList = async () => {
    try {
      const res = await appOperation.customer.getAllContest(
        route?.params?.matchDetails?._id,
        route?.params?.contestId,
      );
      setIsLoading(false);
      if (res.success) {
        setAllContestList(res?.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllContestList();
  }, []);
  const renderAllContestList = ({item}) => {
    return (
      <ContestCard details={item} matchDetails={route?.params?.matchDetails} />
    );
  };

  return (
    <AppSafeAreaView statusColor={'black'}>
      <View style={styles.container}>
        <CommonHeader details={route?.params?.matchDetails} />
        <View style={{marginTop: 20, marginHorizontal: 10}}>
          <AppText style={{fontSize: 16, color: 'white'}} weight={POPPINS}>
            {route?.params?.contestName}
          </AppText>
          <AppText
            style={{
              fontSize: 10,
              color: 'white',
              opacity: 0.6,
              marginBottom: 15,
            }}
            weight={POPPINS}>
            {allContestList?.length} Contest available
          </AppText>
          <FlatList data={allContestList} renderItem={renderAllContestList} />
        </View>
      </View>
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default AllContestList;
