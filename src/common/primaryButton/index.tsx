import React from 'react';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {AppText, EIGHTEEN, POPPINS_BOLD, POPPINS_EXTRA_BOLD_ITALIC, SIXTEEN} from '../AppText';
import {RootState} from '../../libs/rootReducer';
import {TouchableOpacityView} from '../TouchableOpacityView';

const PrimaryButton = ({
  title,
  buttonStyle,
  onPress,
  smallBtn,
  titleStyle,
  ...rest
}: any) => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <TouchableOpacityView
      activeOpacity={1}
      {...rest}
      style={buttonStyle}
      onPress={onPress}>
      
        <LinearGradient
          colors={['rgba(27, 188, 185, 1)',
            'rgba(19, 179, 173, 1)',
          '  rgba(0, 155, 143, 1)']}
          locations={[0.0,0.24,1.0]}
          style={[styles.linearGradient, smallBtn]}>
          <AppText
            type={EIGHTEEN}
            weight={POPPINS_BOLD}
            style={[styles.buttonText(colors), titleStyle]}>
            {title}
          </AppText>
        </LinearGradient>
     
    </TouchableOpacityView>
  );
};

export default PrimaryButton;
