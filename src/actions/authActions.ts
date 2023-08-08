import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'redux';
import {appOperation} from '../appOperation';
import {logError, toastAlert} from '../helper/utility';
import {USER_TOKEN_KEY} from '../libs/constants';
import NavigationService from '../navigation/NavigationService';
import {
  AUTHSTACK,
  BOTTOM_NAVIGATION_STACK,
  OTP_SCREEN,
} from '../navigation/routes';
import {setLoading} from '../slices/authSlice';
import {setUserData} from '../slices/profileSlice';
import {getUserProfile} from './profileAction';
//done
export const userLogin = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(setLoading(true));
    const response: any = await appOperation.guest.login(data);
    if (response?.success) {
      appOperation.setCustomerToken(response?.data?.accessToken);
      dispatch(getUserProfile());
      await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.accessToken);
      dispatch(setUserData(response?.data));
      NavigationService.navigate(BOTTOM_NAVIGATION_STACK);
    } else {
      toastAlert.showToastError(response?.message);
    }
  } catch (e: any) {
    logError(e);
    toastAlert.showToastError(e?.message);
  } finally {
    dispatch(setLoading(false));
  }
};
//done
export const userSignup =
  (data: any, isAlert = false) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setLoading(true));
      const response: any = await appOperation.guest.register(data);
      console.log('response:::::::', response);
      if (response?.success) {
        appOperation.setCustomerToken(response?.data?.accessToken);
        await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.accessToken);
        dispatch(setUserData(response?.data));
        NavigationService.navigate(BOTTOM_NAVIGATION_STACK);
      } else {
        toastAlert.showToastError(response?.message);
      }

      // if (response?.success) {
      //   isAlert
      //     ? toastAlert.showToastError(response?.message)
      //     : NavigationService.navigate(OTP_SCREEN, {
      //         data: response?.data,
      //         id: 'register',
      //       });
      // } else {
      //   toastAlert.showToastError(response?.message);
      // }
    } catch (e: any) {
      logError(e);
      toastAlert.showToastError(e?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
//done
export const otpVerification =
  (data: any) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setLoading(true));
      const response: any = await appOperation.guest.otp_verification(data);
      if (response?.success) {
        
        appOperation.setCustomerToken(response?.data?.accessToken);
        
        await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.accessToken);
        dispatch(setUserData(response?.data));
        NavigationService.navigate(BOTTOM_NAVIGATION_STACK);
      } else {
        toastAlert.showToastError(response?.message);
      }
    } catch (e: any) {
      logError(e);
      toastAlert.showToastError(e?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

//done
export const forgotPassword =
  (data: any, isAlert = false) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setLoading(true));
      const response: any = await appOperation.guest.forgot_password(data);
      if (response?.success) {
        isAlert
          ? toastAlert.showToastError(response?.message)
          : NavigationService.navigate(OTP_SCREEN, {data: data, id: 'forgot'});
      } else {
        toastAlert.showToastError(response?.message);
      }
    } catch (e: any) {
      logError(e);
      toastAlert.showToastError(e?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

//done
export const resetPassword = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(setLoading(true));
    const response: any = await appOperation.guest.reset_password(data);
    if (response?.success) {
      toastAlert.showToastError(response?.message);
      NavigationService.reset(AUTHSTACK);
    } else {
      toastAlert.showToastError(response?.message);
    }
  } catch (e: any) {
    logError(e);
    toastAlert.showToastError(e?.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export const resetSignUpOtp =
  (id: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setLoading(true));
      const response: any = await appOperation.guest.resend_otp(id);
      if (response?.success) {
        toastAlert.showToastError(response?.message);
      } else {
        toastAlert.showToastError(response?.message);
      }
    } catch (e: any) {
      logError(e);
      toastAlert.showToastError(e?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const refreshToken = () => async (dispatch: Dispatch<any>) => {
  try {
    const response: any = await appOperation.customer.refresh_token();
    if (response?.success) {
      appOperation.setCustomerToken(response?.data?.accessToken);
      await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.accessToken);
    }
  } catch (e: any) {
    logError(e);
    // toastAlert.showToastError(e?.message);
  }
};

//done
export const userLogout = () => async (dispatch: Dispatch<any>) => {
  appOperation.setCustomerToken('');
  await AsyncStorage.removeItem(USER_TOKEN_KEY);
  NavigationService.reset(AUTHSTACK);
};
