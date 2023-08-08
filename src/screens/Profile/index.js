import {View, ImageBackground, Image, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {
  contest_position,
  cricketKit,
  placeholderImage,
  PriceCupBlue,
  PriceCupRed,
  ProfileBackgroundImage,
  profileCard,
  reward,
  rightArrow,
  smallGift,
} from '../../helper/image';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {
  AppText,
  FORTEEN,
  POPPINS,
  POPPINS_MEDIUM,
  POPPINS_SEMI_BOLD,
  SIXTEEN,
  TWELVE,
  TWENTY_FOUR,
} from '../../common/AppText';
import {useSelector} from 'react-redux';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import LinearGradient from 'react-native-linear-gradient';
import ActivityCard from '../../common/Profile/activityCard';
import Activity from '../../common/Profile/activity';
import Level from '../../common/Profile/level';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import SecondaryButton from '../../common/secondaryButton';
import NavigationService from '../../navigation/NavigationService';
import {MY_BALANCE, PROFILE_EDIT} from '../../navigation/routes';
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
import ViewAll from '../../components/matchCard/viewAll/ViewAll';

const data = [
  {
    image: PriceCupBlue,
    title: 'Played Contest',
    earning: '10',
  },
  {
    image: cricketKit,
    title: 'Match Played',
    earning: '10',
  },
  {
    image: reward,
    title: 'Total Series',
    earning: '14',
  },
  {
    image: contest_position,
    title: 'Total Sports',
    earning: '21',
  },
];

const Profile = () => {
  const colors = useSelector(state => {
    return state.theme.colors;
  });
  const userData = useSelector(state => {
    return state.profile.userData;
  });

  const {
    first_name,
    last_name,
    email_or_phone,
    total_balance,
    cash_bonus,
    winning_amount,
  } = userData ?? '';
  const data1 = [
    {
      image: smallGift,
      title: 'Cash Bonus',
      earning: `${cash_bonus}`,
    },
    {
      image: PriceCupRed,
      title: 'Winning Amount',
      earning: `₹${winning_amount}`,
    },
  ];
  return (
    <AppSafeAreaView statusColor={'black'}>
      <ScrollView style={styles.container(colors)}>
      <View
          style={
            styles.containers}>
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
          </View>
        <View style={styles.backgroundColorContainer}>
          <View
            imageStyle={styles.backGroundImageStyle}
            style={styles.ImageBackground}>
            <View style={styles.topView}>
              <View style={styles.secondView}>
                <View
                  style={styles.profileImageView}>
                  <FastImage
                    style={styles.profileImage}
                    source={placeholderImage}
                    resizeMode={'cover'}
                  />
                </View>
                <View style={styles.informationView}>
                  <AppText
                    style={styles.color(colors)}
                    type={SIXTEEN}
                    numberOfLines={1}
                    weight={POPPINS_MEDIUM}>
                    {first_name ?? ''} {last_name ?? ''}
                  </AppText>
                  <AppText
                    style={styles.color(colors)}
                    type={TWELVE}
                    numberOfLines={1}
                    weight={POPPINS}>
                    {email_or_phone}
                  </AppText>
                  {/* <AppText
                    style={styles.color(colors)}
                    type={TWELVE}
                    numberOfLines={1}
                    weight={POPPINS}>
                    example@gmail.com
                  </AppText> */}
                </View>
                <SecondaryButton
                  title="Edit"
                  onPress={() => NavigationService.navigate(PROFILE_EDIT)}
                  buttonStyle={styles.editButton}
                  titleStyle={styles.editButtonTitle}
                  buttonViewStyle={{height: 30}}
                />
              </View>
              <ImageBackground
                source={profileCard}
                resizeMode="stretch"
                style={styles.balanceCard}>
                <TouchableOpacityView
                  onPress={() => NavigationService.navigate(MY_BALANCE)}
                  style={styles.balanceCardFirst}>
                  <View style={{}}>
                    <AppText
                      style={{color:'rgba(255, 255, 255, 1)',}}
                      type={TWENTY_FOUR}
                      weight={POPPINS_SEMI_BOLD}>
                      {total_balance}
                    </AppText>
                    <AppText
                         style={{color:'rgba(255, 255, 255, 1)',}}
                      type={FORTEEN}
                      weight={POPPINS}>
                      Total Balance
                    </AppText>
                  </View>
                  <Image
                    style={{width: 15, height: 17}}
                    resizeMode="contain"
                    source={rightArrow}
                  />
                </TouchableOpacityView>
                <View style={styles.balanceCardSecond}>
                  {data1.map((item, index) => {
                    return (
                      <ActivityCard
                        key={index}
                        title={item.title}
                        image={item.image}
                        value={item.earning}
                        rowReverse={true}
                        index={index}
                      />
                    );
                  })}
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.topView}>
          <AppText
            type={SIXTEEN}
            weight={POPPINS_SEMI_BOLD}
            style={{color: 'rgba(0, 0, 0, 1)'}}>
            Your Activity
          </AppText>

          <FlatList
            data={data}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item, index}) => (
              <Activity
                key={item?.title}
                rowReverse={false}
                title={item.title}
                image={item.image}
                value={item.earning}
                index={index}
              />
            )}
          />
          <Level data={userData} />
        </View>
      </ScrollView>
    </AppSafeAreaView>
  );
};

export default Profile;
