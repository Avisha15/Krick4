import {Share, ToastAndroid} from 'react-native';
// import {Toast} from 'native-base';
import {poppinsMedium} from '../theme/typography';

export const shareToAny = (message: string) => {
  const shareOptions = {
    message: message,
  };

  Share.share(shareOptions);
};

export const validateEmail = (email: string) => {
  const expression =
    /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return expression.test(email);
};

export const validateMobile = (number: string) => {
  const expression = /^[0-9]*$/;

  return expression.test(number);
};

export const toastAlert = {
  showToastSuccess: (message, duration = 2500) => {
    // Toast.show({
    //   text: message,
    //   position: 'bottom',
    //   type: 'success',
    //   textStyle: {fontFamily: poppinsMedium},
    //   duration,
    //   // buttonText: "Okay",
    // });
  },
  showToastError: (message: string, duration = 2500) => {
    ToastAndroid.show(message, ToastAndroid.BOTTOM, ToastAndroid.LONG);
    // Toast.show({
    //   title: 'Error',
    //   description: message,
    //   duration,
    //   placement: 'bottom',
    //   avoidKeyboard: true,
    // });
  },
};

export const logError = error => {
  console.log(error);
};

export function numberWithCommas(x) {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var a = [
  '',
  '1 ',
  '2 ',
  '3 ',
  '4 ',
  '5 ',
  '6 ',
  '7 ',
  '8 ',
  '9 ',
  '10 ',
  '11 ',
  '12 ',
  '13 ',
  '14 ',
  '15 ',
  '16 ',
  '17 ',
  '18 ',
  '19 ',
];
var b = ['', '', '20 ', '30 ', '40 ', '50 ', '60 ', '70 ', '80 ', '90 '];

export function inWords(num) {
  if ((num = num.toString()).length > 9) return 'overflow';
  n = ('000000000' + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = '';
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore '
      : '';
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh '
      : '';
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand '
      : '';
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred '
      : '';
  str +=
    n[5] != 0
      ? (str != '' ? 'and ' : '') +
        (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])
      : '';
  return str;
}
