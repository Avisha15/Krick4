import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {
  fontFamilyPoppins,
  fontFamilyRusso,
  poppinsBold,
  poppinsBoldItalic,
  poppinsExtraBoldItalic,
  poppinsLight,
  poppinsMedium,
  poppinsSemiBold,
} from '../theme/typography';
import {TextPropsTemp} from '../types/common';

export const THIRTEEN = 'THIRTEEN';
export const FIFTEEN = 'FIFTEEN';
export const SIXTEEN = 'SIXTEEN';
export const TWENTY = 'TWENTY';
export const TWENTY_FOUR = 'TWENTY_FOUR';
export const FORTEEN = 'FORTEEN';
export const EIGHTEEN = 'EIGHTEEN';
export const NINETEEN = 'NINETEEN';
export const TWELVE = 'TWELVE';
export const FORTY = 'FORTY';
export const TWENTY_TWO = 'TWENTY_TWO';
export const TEN = 'TEN';
export const ELEVEN = 'ELEVEN';

export const NORMAL = 'normal';
export const SEMI_BOLD = 'semibold';
export const BOLD = 'bold';
export const RUSSO = 'russo';
export const POPPINS = 'poppins';
export const POPPINS_BOLD = 'POPPINS_BOLD';
export const POPPINS_MEDIUM = 'POPPINS_MEDIUM';
export const POPPINS_BOLD_ITALIC = 'POPPINS_BOLD_ITALIC';
export const POPPINS_LIGHT = 'POPPINS_LIGHT';
export const POPPINS_SEMI_BOLD = 'POPPINS_SEMI_BOLD';
export const POPPINS_EXTRA_BOLD_ITALIC = 'POPPINS_EXTRA_BOLD_ITALIC';
export const POPINS_THIN_ITALIC = 'Poppins-ThinItalic';
export const WHITE = 'WHITE';
export const BLACK = 'BLACK';
export const FIRST = 'FIRST';
export const SECOND = 'SECOND';
export const FORTH = 'FORTH';
export const SIXTH = 'SIXTH';
export const SEVEN = 'SEVEN';
export const EIGHT = 'EIGHT';
export const THIRTEENTH = 'THIRTEENTH';
export const FIFTEENTH = 'FIFTEENTH';
export const THIRTY = 'THIRTY';

export const TWENTY_ONE_L = 'TWENTY_ONE_L';
export const THIRTY_SIX_L = 'THIRTY_SIX_L';

const AppText = ({
  type,
  weight,
  style,
  color,
  line,
  ...props
}: TextPropsTemp) => {
  return (
    <Text
      style={StyleSheet.flatten([
        styles.text(type, weight, color, line),
        style,
      ])}
      {...props}
    />
  );
};

const getTextStyle = (
  type: string,
  weight: string,
  color: string,
  line: string,
) => {
  var style: TextStyle = {};
  switch (type) {
    case ELEVEN:
      style['fontSize'] = 11;
      break;
    case THIRTEEN:
      style['fontSize'] = 13;
      break;
    case FIFTEEN:
      style['fontSize'] = 15;
      break;
    case TWENTY:
      style['fontSize'] = 20;
      break;
    case TWENTY_FOUR:
      style['fontSize'] = 24;
      break;
    case FORTEEN:
      style['fontSize'] = 14;
      break;
    case EIGHTEEN:
      style['fontSize'] = 18;
      break;
    case TWELVE:
      style['fontSize'] = 12;
      break;
    case NINETEEN:
      style['fontSize'] = 19;
      break;
    case THIRTY:
      style['fontSize'] = 30;
      break;
    case FORTY:
      style['fontSize'] = 40;
      break;
    case SIXTEEN:
      style['fontSize'] = 16;
      break;
    case TWENTY_TWO:
      style['fontSize'] = 22;
      break;
    case TEN:
      style['fontSize'] = 10;
      break;
    default:
      style['fontSize'] = 12;
  }

  switch (weight) {
    case RUSSO:
      style['fontFamily'] = fontFamilyRusso;
      break;
    case POPPINS:
      style['fontFamily'] = fontFamilyPoppins;
      break;

    case POPPINS_BOLD:
      style['fontFamily'] = poppinsBold;
      break;

    case POPPINS_LIGHT:
      style['fontFamily'] = poppinsLight;
      break;

    case POPPINS_BOLD_ITALIC:
      style['fontFamily'] = poppinsBoldItalic;
      break;

    case POPPINS_MEDIUM:
      style['fontFamily'] = poppinsMedium;
      break;

    case POPPINS_SEMI_BOLD:
      style['fontFamily'] = poppinsSemiBold;
      break;

    case POPPINS_EXTRA_BOLD_ITALIC:
      style['fontFamily'] = poppinsExtraBoldItalic;
      break;

    default:
      style['fontFamily'] = fontFamilyPoppins;
  }
  switch (line) {
    case TWENTY_ONE_L:
      style['lineHeight'] = 21;
      break;
    case THIRTY_SIX_L:
      style['lineHeight'] = 36;
      break;
  }

  switch (color) {
    case WHITE:
      style['color'] = '#fff';
      break;
    case BLACK:
      style['color'] = '#000';
      break;
    // case FIRST:
    //   style['color'] = colors.first;
    //   break;
    // case SECOND:
    //   style['color'] = colors.second;
    //   break;
    // case FORTH:
    //   style['color'] = colors.forth;
    //   break;
    // case SIXTH:
    //   style['color'] = colors.sixth;
    //   break;
    // case SEVEN:
    //   style['color'] = colors.seven;
    //   break;
    // case EIGHT:
    //   style['color'] = colors.eight;
    //   break;
    // case THIRTEENTH:
    //   style['color'] = colors.thirteen;
    //   break;
    // case FIFTEENTH:
    //   style['color'] = colors.fifteen;
    //   break;
    default:
      style['color'] = '#fff';
      break;
  }

  return style;
};

const styles = {
  text: (type: string, weight: string, color: string, line: string) => ({
    ...getTextStyle(type, weight, color, line),
  }),
};

export {AppText};
