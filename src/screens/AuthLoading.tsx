import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {getUserProfile} from '../actions/profileAction';
import {AppSafeAreaView} from '../common/AppSafeAreaView';
import {KeyBoardAware} from '../common/KeyboardAware';
import {logo, splash} from '../helper/image';
import {USER_TOKEN_KEY} from '../libs/constants';
import NavigationService from '../navigation/NavigationService';
import {AUTHSTACK, BOTTOM_NAVIGATION_STACK} from '../navigation/routes';

const AuthLoading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
      if (token) {
        dispatch(getUserProfile());
        // NavigationService.reset(BOTTOM_NAVIGATION_STACK);
      } else {
        setTimeout(() => {
          NavigationService.reset(AUTHSTACK);
        }, 900);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AppSafeAreaView hidden>
      {/* <ImageBackground
        source={splash}
        resizeMode="stretch"
        style={styles.image}>
        <ActivityIndicator
          size={'large'}
          color={'orange'}
          style={{marginTop: 200}}
        />
      </ImageBackground> */}
    </AppSafeAreaView>
  );
};

export default AuthLoading;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
