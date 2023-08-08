import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacityView} from '../TouchableOpacityView';
import FastImage from 'react-native-fast-image';
import MumbaiIndianImg from '../../../assets/images/MumbaiIndian.png';
import OpponentTeamImg from '../../../assets/images/sunriseHyd.png';

import {AppSafeAreaView} from '../AppSafeAreaView';
import HomeTopHeader from '../../HomeTopHeader/HomeTopHeader';
import {contextBgNew, forwardIcon} from '../../helper/image';
import SingleCard from '../SingleCard/SingleCard';
import LinearGradient from 'react-native-linear-gradient';

import PrimaryButton from '../primaryButton';
import SecondaryButton from '../secondaryButton';
import ContestCommonCard from '../ContestCommonCard/ContestCommonCard';
import PracticeCommonCard from '../practiceContestCommonCard/PracticeContestCard';

import {AppText} from '../AppText';

import {ContestCommonCardData} from '../../../src/DummyData';

import {
  personIcon,
  VectorLogo,
  BATTLEINFINITY,
  bellIcon,
  walletIcon,
  BackIcon,
} from '../../helper/image';

const SingleIplCard = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.wrapperContainer}>
        <View style={styles.backgroundImageContainer}>
          <FastImage
            source={contextBgNew}
            style={styles.bgImage}
            resizeMode="cover">
            <HomeTopHeader
              personIcon={personIcon}
              BATTLEINFINITY={BATTLEINFINITY}
              bellIcon={bellIcon}
              walletIcon={walletIcon}
            />
          </FastImage>
        </View>
        <View>
          <View style={styles.swipperContainer}>
            <SingleCard
              IPL="IPL"
              firstTeamImg={MumbaiIndianImg}
              firstTeamName="Mumbai"
              shortName="MI"
              live="LIVE"
              opponentTeamName="Hyderabad"
              opponentShortName="SRH"
              opponentImg={OpponentTeamImg}
              totalTeam="2"
              totalContest="3"
            />
          </View>
        </View>
        <LinearGradient
          colors={['#172c66', '#172c66']}
          style={styles.gradientButtonContainer}>
          <TouchableOpacityView style={styles.eachGradientButton}>
            <LinearGradient
              colors={['#00B4C3', '#7B57D0']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={styles.insideButtonGradientStyle}>
              <AppText style={{textAlign: 'center'}}>Contest</AppText>
            </LinearGradient>
          </TouchableOpacityView>

          <View style={styles.myContestTextContainer}>
            <AppText style={styles.myText}>My Contest(2)</AppText>
          </View>
          <View style={styles.myTeamTextContainer}>
            <AppText style={styles.myText}>My Team(3)</AppText>
          </View>
        </LinearGradient>
        {/* MEGA CONTEST */}
        <View style={styles.megaContestFlexContainer}>
          <AppText style={styles.megaContestText}>Mega Contest</AppText>
          <View style={styles.contestCommonCradContainer}>
            <ContestCommonCard contestCommonCardData={true} />
          </View>
        </View>

        {/* PRACTICE CONTEST */}
        <View style={styles.practiceContestContainer}>
          <View style={styles.practiceTextFlexContainer}>
            <AppText style={styles.practiceContestText}>
              Practice Contest
            </AppText>
            <View style={styles.viewAllView}>
              <AppText style={styles.viewAllText}>View all</AppText>
              <FastImage
                source={forwardIcon}
                style={styles.forwardIcon}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.practiceSliderContainer}>
            <PracticeCommonCard />
          </View>
        </View>
        {/* BUTTON */}

        <View style={styles.contestButtonContainer}>
          <View style={styles.buttonWrapperContainer}>
            <SecondaryButton
              smallBtn={styles.btnStyle}
              title="CREATE CONTEST"
            />
          </View>
          <View style={styles.insideButtonWrapper}>
            <PrimaryButton smallBtn={styles.btnStyle} title="CREATE TEAM" />
          </View>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default SingleIplCard;
