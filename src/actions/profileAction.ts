import {userLogout} from './authActions';
import {Dispatch} from 'redux';
import {appOperation} from '../appOperation';
import {logError, toastAlert} from '../helper/utility';
import NavigationService from '../navigation/NavigationService';
import {BOTTOM_NAVIGATION_STACK} from '../navigation/routes';
import {setLoading} from '../slices/authSlice';
import {setUserData} from '../slices/profileSlice';

export const getUserProfile =
  (isNavigate = true) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setLoading(true));
      const response: any = await appOperation.customer.get_profile();

      if (response?.success) {
        isNavigate ? NavigationService.reset(BOTTOM_NAVIGATION_STACK) : null;
        dispatch(setUserData(response?.data));
      } else {
        toastAlert.showToastError(response?.message);
      }
    } catch (e: any) {
      logError(e);
      dispatch(userLogout());
      // if (e?.message === 'jwt expired') {
      //   dispatch(userLogout());
      // }
      toastAlert.showToastError(e?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
