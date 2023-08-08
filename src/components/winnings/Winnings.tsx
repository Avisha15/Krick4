import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {appOperation} from '../../appOperation';
import {AppText, SEMI_BOLD} from '../../common/AppText';
import {toastAlert} from '../../helper/utility';
import styles from './styles';
import {SpinnerSecond} from '../../common/SpinnerSecond';
const Winnings = ({id}) => {
  const [prizeList, setPrizeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPrizeList = async () => {
    try {
      const res = await appOperation.customer.getPrizeList(id);
      // console.log(res);
      if (res.code == 200) {
        // toastAlert.showToastError(res?.message);
        setPrizeList(res?.data);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPrizeList();
  }, []);
  const renderWinnings = ({item}) => {
    return (
      <View style={styles.winningContainer}>
        <AppText  style={{color:"black"}}>{`#${item?.StartRank}-${item?.EndRank}`}</AppText>
        <AppText  style={{color:"black"}}>{item?.Price}</AppText>
      </View>
    );
  };
  return (
    <>
      <View style={styles.head}>
        <AppText style={{color:"black"}} weight={SEMI_BOLD}>RANK</AppText>
        <AppText style={{color:"black"}}  weight={SEMI_BOLD}>WINNINGS</AppText>
      </View>
      <View style={{flex: 1}}>
        {loading ? (
          <SpinnerSecond loading />
        ) : (
          <FlatList
            data={prizeList}
            renderItem={renderWinnings}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

export default Winnings;
