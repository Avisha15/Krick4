/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Dimensions, Modal, Pressable, StyleSheet, View} from 'react-native';
import {
  AppText,
  FORTEEN,
  POPPINS_BOLD_ITALIC,
  SEMI_BOLD,
  SIXTEEN,
} from './AppText';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {CLOSE_WHITE_ICON} from '../helper/image';
import SecondaryButton from './secondaryButton';
import {fontFamilyPoppins} from '../theme/typography';
import {poppinsBoldItalic} from '../theme/typography';
import {getMyJoinedContest, joinContest} from '../slices/matchSlice';
import NavigationService from '../navigation/NavigationService';
import {ADD_MONEY_SCREEN, MY_CONTEST} from '../navigation/routes';
import {getUserProfile} from '../actions/profileAction';

const Confirmation = ({
  isModalVisible,
  setIsModalVisible,
  details,
  matchDetails,
  onClose,
}) => {
  const dispatch = useDispatch();
  const myTeam = useSelector(state => state?.match?.myTeams);
  const userData = useSelector(state => {
    return state.profile.userData;
  });

  const {EnteryFee, UsableBonusPercantage, contest_category_id, inner_data_id} =
    details ?? '';
  const {_id: matchDetails_id} = matchDetails ?? '';
  const {match_id, matchid, _id} = myTeam[0] ?? '';
  const {cash_bonus, winning_amount, total_balance} = userData ?? '';

  let usable = (Number(EnteryFee) * Number(UsableBonusPercantage)) / 100;
  let usableBonus = `${
    EnteryFee == 0 ? 0 : cash_bonus >= usable ? usable : cash_bonus
  }`;
  let payAmount = `${
    Number(EnteryFee) - (Number(winning_amount) + Number(usableBonus))
  }`;

  const onSubmit = () => {
    if (payAmount <= 0) {
      const data = {
        match_id: match_id,
        matchid: matchid,
        teams_id: [_id],
        contest_category_id: contest_category_id,
        match_contest_category_id: inner_data_id,
      };
      setIsModalVisible(false);
      dispatch(joinContest(data));
      dispatch(getMyJoinedContest(matchDetails_id));
      dispatch(getUserProfile(false));
      onClose ? onClose() : null;
      setTimeout(() => {
        NavigationService.navigate(MY_CONTEST, matchDetails);
      }, 1000);
    } else {
      setIsModalVisible(false);
      onClose ? onClose() : null;
      NavigationService.navigate(ADD_MONEY_SCREEN, {
        ...details,
        ...matchDetails,
        usableBonus,
        payAmount,
        winning_amount,
      });
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTopSection}>
            <AppText type={SIXTEEN} weight={POPPINS_BOLD_ITALIC}>
              CONFIRMATION
            </AppText>
            <Pressable
              style={{
                position: 'absolute',
                right: 10,
                height: 42,
                width: 42,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setIsModalVisible(false)}>
              <FastImage
                source={CLOSE_WHITE_ICON}
                style={styles.closeWhiteIcon}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(217, 217, 217, 0.1)',
              paddingBottom: 10,
            }}>
            <View style={styles.center}>
              <AppText type={SIXTEEN} weight={SEMI_BOLD}>
                Entry
              </AppText>
              <AppText type={SIXTEEN} style={{opacity: 0.5}} weight={SEMI_BOLD}>
                ₹{`${EnteryFee}`}
              </AppText>
            </View>
            <View style={[styles.center, {marginTop: 15}]}>
              <AppText type={FORTEEN} weight={SEMI_BOLD}>
                Current Balance
              </AppText>
              <AppText type={FORTEEN} style={{opacity: 0.5}} weight={SEMI_BOLD}>
                ₹{`${winning_amount}`}
              </AppText>
            </View>
            <View style={[styles.center, {marginTop: 5}]}>
              <AppText type={FORTEEN} weight={SEMI_BOLD}>
                Usable Cash Bonus
              </AppText>
              <AppText type={FORTEEN} style={{opacity: 0.5}} weight={SEMI_BOLD}>
                - ₹ {usableBonus}
              </AppText>
            </View>
          </View>
          <View style={[styles.center, {marginTop: 10, paddingHorizontal: 10}]}>
            <AppText
              type={FORTEEN}
              style={{color: '#4DFF7F'}}
              weight={SEMI_BOLD}>
              To Pay
            </AppText>
            <AppText
              style={{color: '#4DFF7F'}}
              type={FORTEEN}
              weight={SEMI_BOLD}>
              ₹{payAmount <= 0 ? 0 : payAmount}
            </AppText>
          </View>
          <SecondaryButton
            title={payAmount <= 0 ? 'Join' : 'Add cash'}
            onPress={onSubmit}
            buttonStyle={styles.editButton}
            titleStyle={styles.editButtonTitle}
            buttonViewStyle={{height: 45}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Confirmation;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000CC',
  },
  modalContainer: {
    width: Dimensions.get('window').width - 20,
    // height: 243,
    backgroundColor: '#172C66',
    borderRadius: 16,
    overflow: 'hidden',
    // justifyContent: 'space-between',
    paddingBottom: 20,
  },
  modalTopSection: {
    height: 54,
    backgroundColor: 'rgba(0, 2, 17, 0.38)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  closeWhiteIcon: {
    height: 12,
    width: 12,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editButton: {width: 120, alignSelf: 'center', marginTop: 10, height: 50},
  editButtonTitle: {
    fontSize: 14,
    fontFamily: poppinsBoldItalic,
    // fontStyle: 'italic',
  },
});
