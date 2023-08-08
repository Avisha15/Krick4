import {AppOperation} from '../..';

import {GUEST_TYPE} from '../../types';

export default (appOperation: AppOperation) => ({
  login: (data: any) => appOperation.post('user/login', data, GUEST_TYPE),
  register: (data: any) => appOperation.post('user/signup', data, GUEST_TYPE),

  otp_verification: (data: any) =>
    appOperation.post('user/verify-otp', data, GUEST_TYPE),

  forgot_password: (data: any) =>
    appOperation.post('user/forget-password', data, GUEST_TYPE),
  reset_password: (data: any) =>
    appOperation.post('user/reset-password', data, GUEST_TYPE),
  resend_otp: (id: string) =>
    appOperation.get(`user/resend-otp/${id}`, undefined, undefined, GUEST_TYPE),
});
