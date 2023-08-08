import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  ScrollView,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {useSelector} from 'react-redux';
import {appOperation} from '../../appOperation';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {
  AppText,
  POPINS_THIN_ITALIC,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  POPPINS_MEDIUM,
  SIXTEEN,
  THIRTEEN,
} from '../../common/AppText';
import {SpinnerSecond} from '../../common/SpinnerSecond';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import MatchCard from '../../components/matchCard/MatchCard';
import ViewAll from '../../components/matchCard/viewAll/ViewAll';
import {
  battle,
  bell,
  BET_BOWL,
  CLOSE_WHITE_ICON,
  FOOTBALL,
  personIcon,
  Stadium,
  walletIcon,
} from '../../helper/image';
import styles from './styles';
import NavigationService from '../../navigation/NavigationService';
import {MY_BALANCE, NFC, REFER_EARN,PROFILE_EDIT,SETTING} from '../../navigation/routes';
const Home = () => {
  const upcomingMatches = useSelector(state => state.match.upcomingMatches);
  const myMatchesHome = useSelector(state => state.match.myMatchesHome);
  const loading = useSelector(state => state.match.loading);
  const [isMoadlVisible, setIsModalVisible] = useState(false);
  const [intro, setIntro] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderUpcomingMatches = ({item}) => {
    return <MatchCard details={item} />;
  };
  const getIntro = async () => {
    try {
      const res = await appOperation.customer.getIntro();
      if (res?.success) {
        setIntro(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getIntro();
    modalOpenCheck();
  }, []);

  const modalOpenCheck = async () => {
    try {
      const isSeen = await AsyncStorage.getItem('isSeen');
      if (!isSeen) {
        setIsModalVisible(true);
        await AsyncStorage.setItem('isSeen', 'true');
      }
    } catch (error) {}
  };

  const onNext = () => {
    if (activeIndex == intro?.length - 1) {
      setIsModalVisible(false);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  return (
    <AppSafeAreaView statusColor={'black'} hidden={false}>
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <View
          style={[
            styles.container,
            {height: myMatchesHome?.length !== 0 ? 280 : 140},
          ]}>
          <View style={styles.topBar}>
            <FastImage source={personIcon} style={styles.userLogo} />
            <FastImage
              source={battle}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.rightImageContainer}>
              <FastImage source={bell} style={styles.bellIcon} />
              <TouchableOpacityView onPress={() =>NavigationService.navigate(MY_BALANCE)}>
              <FastImage source={walletIcon} style={styles.walletIcon} />
              </TouchableOpacityView>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacityView style={{width: '47%'}}>
              <LinearGradient
                style={[
                  styles.btn,
                  {
                    width: '100%',
                    borderColor: '#0C4E9B',
                    borderWidth: 1,
                  },
                ]}
                start={{x: 0, y: 0}}
                colors={['#003E9B', '#AD53CC']}>
                <FastImage source={BET_BOWL} style={styles.circketKit} />
                <AppText
                  style={styles.btnText}
                  type={THIRTEEN}
                  weight={POPINS_THIN_ITALIC}>
                  CRICKET
                </AppText>
              </LinearGradient>
            </TouchableOpacityView>
            <TouchableOpacityView style={[styles.btn, styles.footbalButton]}>
              <FastImage source={FOOTBALL} style={styles.circketKit} />
              <AppText
                style={styles.btnText}
                type={THIRTEEN}
                weight={POPINS_THIN_ITALIC}>
                FOOTBALL
              </AppText>
            </TouchableOpacityView>
          </View> */}
          <View style={styles.heading}>
            <AppText
              style={{color: 'rgba(0, 0, 0, 1)', opacity: 0.8}}
              type={THIRTEEN}
              weight={POPPINS_BOLD}>
              My Matches
            </AppText>
            <ViewAll />
          </View>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={5}
            automaticallyAdjustContentInsets
            key={Math.random()}
            removeClippedSubviews={false}
            activeDotColor={'#88D1F2'}
            paginationStyle={{bottom: -15}}
            dotColor={'#55596A'}>
            {upcomingMatches?.slice(0, 2).map(data => {
              return <MatchCard details={data} />;
            })}
          </Swiper>
        </View>
        <AppText
          style={{color: 'rgba(0, 0, 0, 1)', padding: 15, paddingTop: 20}}
          type={SIXTEEN}
          weight={POPPINS_MEDIUM}>
          Upcoming Matches
        </AppText>
        <FlatList
          data={upcomingMatches}
          renderItem={renderUpcomingMatches}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          keyExtractor={item => item?._id}
        />
        {/* <Modal
          animationType="fade"
          transparent={true}
          visible={isMoadlVisible}
          onRequestClose={() => {
            setIsModalVisible(!isMoadlVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTopSection}>
                <AppText
                  style={{color: 'white', fontSize: 16}}
                  weight={POPPINS_BOLD_ITALIC}>
                  {intro[activeIndex]?.title}
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
              <ScrollView style={{paddingHorizontal: 20}}>
                <View
                  style={{
                    height: 140,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText
                    style={{color: 'white', fontSize: 11, lineHeight: 18}}
                    weight={POPPINS_MEDIUM}>
                    {intro[activeIndex]?.content}
                  </AppText>
                </View>
              </ScrollView>
              <View style={styles.modalBottomContainer}>
                <View style={styles.dotContainer}>
                  {intro.map((_, i) => {
                    return (
                      <View
                        key={i}
                        style={[
                          styles.dot,
                          activeIndex == i && {
                            backgroundColor: '#88D1F2',
                          },
                        ]}></View>
                    );
                  })}
                </View>
                <Pressable style={styles.nextBtn} onPress={onNext}>
                  <AppText
                    style={{color: 'white'}}
                    weight={POPPINS_BOLD_ITALIC}>
                    NEXT
                  </AppText>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
      <SpinnerSecond loading={loading} />
    </AppSafeAreaView>
  );
};

export default Home;
