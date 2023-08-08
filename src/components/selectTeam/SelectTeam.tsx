import {
  Dimensions,
  FlatList,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';

import {CLOSE_WHITE_ICON} from '../../helper/image';
import {
  AppText,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  THIRTEEN,
} from '../../common/AppText';
import {useDispatch, useSelector} from 'react-redux';
import MyTeam from '../matchCard/myTeam/MyTeam';
import LinearGradient from 'react-native-linear-gradient';
import {toastAlert} from '../../helper/utility';
import {getMyJoinedContest, joinContest} from '../../slices/matchSlice';
import Confirmation from '../../common/Confirmation';
const SelectTeam = ({onClose, contestDetails, matchDetails}) => {
  const dispatch = useDispatch();
  const myTeam = useSelector(state => state?.match?.myTeams);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  // console.log(contestDetails);
  const onSelectTeam = item => {
    setSelectedTeam(item);
  };
  const onJoinContest = async () => {
    if (!selectedTeam) {
      return toastAlert.showToastError('Plz Select Team Before Join Contest');
    }
    // const data = {
    //   match_id: selectedTeam?.match_id,
    //   matchid: selectedTeam?.matchid,
    //   teams_id: [selectedTeam?._id],
    //   contest_category_id: contestDetails?.contest_category_id,
    //   match_contest_category_id: contestDetails?.inner_data_id,
    // };
    // await dispatch(joinContest(data));
    // dispatch(getMyJoinedContest(matchDetails?._id));
    setIsAdd(true);
    // onClose();
  };
  const renderMyTeam = ({item}) => {
    return (
      <MyTeam
        item={item}
        isFromSelect={true}
        onSelectTeam={data => onSelectTeam(data)}
        isTeamSelected={selectedTeam?._id == item?._id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeImageContainer} onPress={onClose}>
        <FastImage
          source={CLOSE_WHITE_ICON}
          style={styles.closeIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{height: 42, justifyContent: 'center'}}>
        <AppText
          weight={POPPINS_BOLD}
          style={{textAlign: 'center', fontSize: 15}}>
          Select Your Team
        </AppText>
      </View>
      <View
        style={{marginTop: 20, height: Dimensions.get('window').height - 60}}>
        <FlatList
          data={myTeam}
          renderItem={renderMyTeam}
          contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 120}}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[]} onPress={onJoinContest}>
          <LinearGradient
            style={styles.btn}
            start={{x: 0, y: 0}}
            colors={['#00B4C3', '#7B57D0']}>
            <AppText
              type={THIRTEEN}
              style={{
                color: 'white',
              }}
              weight={POPPINS_BOLD_ITALIC}>
              Join Contest
            </AppText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Confirmation
        isModalVisible={isAdd}
        details={contestDetails}
        setIsModalVisible={setIsAdd}
        matchDetails={matchDetails}
        onClose={onClose}
      />
    </View>
  );
};

export default SelectTeam;
