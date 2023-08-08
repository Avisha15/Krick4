import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AUTHSTACK,
  BOTTOM_NAVIGATION_STACK,
  BOTTOM_TAB_CONTEST_SCREEN,
  BOTTOM_TAB_HOMESCREEN,
  BOTTOM_TAB_MORE_SCREEN,
  BOTTOM_TAB_PROFILE_SCREEN,
  FORGOT_PASSWORD,
  LOGIN_SCREEN,
  NFC,
  OTP_SCREEN,
  PROFILE_EDIT,
  REFERRAL_SCREEN,
  REFER_EARN,
  REGISTER_SCREEN,
  RESET_PASSWORD,
  WELCOME_SCREEN,
  AUTH_LOADING_SCREEN,
  HOME_SCREEN_MAIN,
  CONTEST_SCREEN_MAIN,
  PROFILE_SCREEN_MAIN,
  MORE_SCREEN_MAIN,
  MY_BALANCE,
  DEPOSIT_IBAT_SCREEN,
  DEPOSIT_WITHDRAWAL_SCREEN,
  KYC_SCREEN,
  MANAGE_PAYMENTS_SCREEN,
  VERIFY_EMAIL_SCREEN,
  VERIFY_EMAIL_OTP_SCREEN,
  VERIFY_PAN_SCREEN,
  VERIFY_BANK_SCREEN,
  ADD_CARD_SCREEN,
  SELECT_PLAYER,
  PLAYER_PREVIEW,
  MY_CONTEST,
  ALL_CONTEST_LIST,
  SELECT_CAPTAIN,
  LEADERBOARD,
  ADD_MONEY_SCREEN,
  PAYMENT_OPTIONS_SCREEN,
  SETTING,
  PLAY_SCREEN
} from './routes';

import NavigationService from './NavigationService';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Referral from '../screens/Referral';
import ForgotPassword from '../screens/ForgotPassword';
import OTP from '../screens/OTP';
import ResetPassword from '../screens/ResetPassword';
import {useDispatch, useSelector} from 'react-redux';
import Setting from '../screens/Setting';
import MyContest from '../screens/MyContest';
import Profile from '../screens/Profile';
import More from '../screens/More';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  contest_icon,
  home_icon,
  more_icon,
  profile_icon,
} from '../helper/image';
import FastImage from 'react-native-fast-image';
import ReferAndEarn from '../screens/ReferAndEarn';
import EditProfile from '../screens/EditProfile/editProfile';
import Nfc from '../screens/NFC/Nfc';
import Home from '../screens/Home/Home';
import AuthLoading from '../screens/AuthLoading';
import MyBalance from '../screens/MyBalance';
import {fontFamilyPoppins} from '../theme/typography';
import DepositIbat from '../screens/DepositIbat';
import WithdrawIbat from '../screens/WithdrawIbat';
import KYC from '../screens/KYC';
import ManagePayment from '../screens/ManagePayment';
import VerifyEmail from '../screens/VerifyEmail';
import VerifyEmailOTP from '../screens/VerifyEmailOTP';
import VerifyBank from '../screens/VerifyBank';
import VerifyPAN from '../screens/VerifyPAN';
import AddCard from '../screens/AddCard';
import SelectPlayer from '../screens/selectPlayer/SelectPlayer';
import PlayerPreview from '../screens/playerPreview/PlayerPreview';
import AllContestList from '../screens/allContestList/AllContestList';
import SelectCaptain from '../screens/selectCaptain/SelectCaptain';
import LeaderBoard from '../screens/leaderBoard/LeaderBoard';
import {refreshToken} from '../actions/authActions';
import MyMatches from '../screens/myMatches/MyMatches';
import AddMoney from '../screens/AddMoney';
import PaymentOptions from '../screens/PaymentOptions';
import Play from '../screens/Play';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(refreshToken());
    }, 100000);
    return () => clearInterval(interval);
  }, []);
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;

const RootStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'flip',
    }}>
    <Stack.Screen
      name={AUTH_LOADING_SCREEN}
      component={AuthLoading}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={AUTHSTACK}
      component={AuthStack}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={BOTTOM_NAVIGATION_STACK}
      component={BottomMainTab}
      options={{headerShown: false}}
    />
    <Stack.Screen name={PROFILE_EDIT} component={EditProfile} />
    <Stack.Screen name={MY_BALANCE} component={MyBalance} />
    <Stack.Screen name={DEPOSIT_IBAT_SCREEN} component={DepositIbat} />
    <Stack.Screen name={DEPOSIT_WITHDRAWAL_SCREEN} component={WithdrawIbat} />
    <Stack.Screen name={KYC_SCREEN} component={KYC} />
    <Stack.Screen name={VERIFY_EMAIL_SCREEN} component={VerifyEmail} />
    <Stack.Screen name={VERIFY_EMAIL_OTP_SCREEN} component={VerifyEmailOTP} />
    <Stack.Screen name={VERIFY_PAN_SCREEN} component={VerifyPAN} />
    <Stack.Screen name={VERIFY_BANK_SCREEN} component={VerifyBank} />
    <Stack.Screen name={MANAGE_PAYMENTS_SCREEN} component={ManagePayment} />
    <Stack.Screen name={ADD_CARD_SCREEN} component={AddCard} />
    <Stack.Screen name={REFER_EARN} component={ReferAndEarn} />
    <Stack.Screen name={NFC} component={Nfc} />
    <Stack.Screen name={SELECT_PLAYER} component={SelectPlayer} />
    <Stack.Screen name={PLAYER_PREVIEW} component={PlayerPreview} />
    <Stack.Screen name={MY_CONTEST} component={MyContest} />
    <Stack.Screen name={ALL_CONTEST_LIST} component={AllContestList} />
    <Stack.Screen name={SELECT_CAPTAIN} component={SelectCaptain} />
    <Stack.Screen name={LEADERBOARD} component={LeaderBoard} />
    <Stack.Screen name={ADD_MONEY_SCREEN} component={AddMoney} />
    <Stack.Screen name={PAYMENT_OPTIONS_SCREEN} component={PaymentOptions} />
    <Stack.Screen name={SETTING} component={Setting} />
    <Stack.Screen name={PLAY_SCREEN} component={Play} />
  </Stack.Navigator>
);

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}>
      {/* <Stack.Screen name={WELCOME_SCREEN} component={Welcome} /> */}
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={OTP_SCREEN} component={OTP} />
      <Stack.Screen name={REGISTER_SCREEN} component={Register} />
      <Stack.Screen name={RESET_PASSWORD} component={ResetPassword} />
    </Stack.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={HOME_SCREEN_MAIN}
      component={Home}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const ContestStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={CONTEST_SCREEN_MAIN}
      component={MyContest}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={PROFILE_SCREEN_MAIN}
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const MoreStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={MORE_SCREEN_MAIN}
      component={More}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const BottomMainTab = () => {
  const BottomTab = createBottomTabNavigator();
  const colors = useSelector(state => state.theme.colors);
  return (
    <BottomTab.Navigator
      backBehavior="initialRoute"
      initialRouteName={HOME_SCREEN_MAIN}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor:'rgba(250, 255, 255, 1)',
          height: 60,
          borderTopWidth: 0,
          paddingVertical: 10,
        },
        tabBarAllowFontScaling: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          marginBottom: 5,
          fontFamily: fontFamilyPoppins,
          fontSize: 10,
        },
        tabBarActiveTintColor:'rgba(1, 157, 145, 1)',
        tabBarInactiveTintColor:'rgba(0, 0, 0, 1)',
      }}>
      <BottomTab.Screen
        name={BOTTOM_TAB_HOMESCREEN}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({focused}) => (
            <FastImage
              source={home_icon}
              tintColor={focused ? 'rgba(1, 157, 145, 1)' : 'rgba(0, 0, 0, 1)'}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={BOTTOM_TAB_CONTEST_SCREEN}
        component={MyMatches}
        options={{
          tabBarLabel: 'My Contest',

          tabBarIcon: ({focused}) => (
            <FastImage
              source={contest_icon}
              tintColor={focused ? 'rgba(1, 157, 145, 1)' : 'rgba(0, 0, 0, 1)'}
              style={{
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={BOTTOM_TAB_PROFILE_SCREEN}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',

          tabBarIcon: ({focused}) => (
            <FastImage
              source={profile_icon}
              tintColor={focused ? 'rgba(1, 157, 145, 1)' : 'rgba(0, 0, 0, 1)'}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <BottomTab.Screen
        name={BOTTOM_TAB_MORE_SCREEN}
        component={MoreStack}
        options={{
          tabBarLabel: 'More',

          tabBarIcon: ({focused}) => (
            <FastImage
              source={more_icon}
              tintColor={focused ? 'rgba(1, 157, 145, 1)' : 'rgba(0, 0, 0, 1)'}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
