import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  AppText,
  FIFTEEN,
  POPPINS_BOLD,
  POPPINS_SEMI_BOLD,
  TEN,
  TWELVE,
} from '../../../common/AppText';
import {TouchableOpacityView} from '../../../common/TouchableOpacityView';
import {
  MATCH_REMAINDER,
  MATCH_REMAINDER_CLOSE_ICON,
  RADIO_BTN_OFF,
  RADIO_BTN_ON,
  noti
} from '../../../helper/image';
import {poppinsBold} from '../../../theme/typography';
import styles from './styles';

const MatchRemainder = ({onClose}) => {
  const [match, setMatch] = useState(false);
  const [ipl, setIpl] = useState(false);

  return (
    <View>
      <View style={styles.top}>
        <FastImage
          source={noti}
          style={styles.remainderLogo}
          resizeMode="contain"
        />
        <AppText
          style={{color: 'white', marginLeft: 20, flex: 1}}
          type={FIFTEEN}
          weight={POPPINS_SEMI_BOLD}>
          Set Match Reminder
        </AppText>
        <TouchableOpacityView onPress={() => onClose()}>
          <FastImage
            source={MATCH_REMAINDER_CLOSE_ICON}
            style={styles.closeIcon}
            resizeMode="contain"
          />
        </TouchableOpacityView>
      </View>
      <View style={styles.matchContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppText
            style={{color: 'black'}}
            weight={POPPINS_SEMI_BOLD}
            type={TWELVE}>
            Match - GT vs DC
          </AppText>
          <TouchableOpacityView onPress={() => setMatch(!match)}>
            <FastImage
              source={match ? RADIO_BTN_ON : RADIO_BTN_OFF}
              style={styles.radioBtn}
              resizeMode="contain"
            />
          </TouchableOpacityView>
        </View>
        <AppText type={TEN} style={{color: 'black', opacity: 0.5}}>
          will send reminder when lineup announced
        </AppText>
      </View>
      <View style={styles.matchContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppText
            style={{color: 'black'}}
            weight={POPPINS_SEMI_BOLD}
            type={TWELVE}>
            Indian Premier League
          </AppText>
          <TouchableOpacityView onPress={() => setIpl(!ipl)}>
            <FastImage
              source={ipl ? RADIO_BTN_ON : RADIO_BTN_OFF}
              style={styles.radioBtn}
              resizeMode="contain"
            />
          </TouchableOpacityView>
        </View>
        <AppText type={TEN} style={{color: 'black', opacity: 0.5}}>
          will send reminder when lineup announced
        </AppText>
      </View>
    </View>
  );
};

export default MatchRemainder;
