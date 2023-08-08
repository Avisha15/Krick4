import {View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {AppText, POPPINS_BOLD, POPPINS_EXTRA_BOLD_ITALIC, SIXTEEN} from '../AppText';
import {RootState} from '../../libs/rootReducer';
import {TouchableOpacityView} from '../TouchableOpacityView';

const SecondaryButton = ({
  buttonStyle,
  title,
  onPress,
  btnStyle,
  smallBtn,
  titleStyle,
  buttonViewStyle,
  ...rest
}) => {
  const colors = useSelector((state) => {
    return state.theme.colors;
  });
  return (
    <TouchableOpacityView
      {...rest}
      style={buttonStyle}
      activeOpacity={1}
      onPress={onPress}>
      <View
       
        style={[styles.grediant, btnStyle, smallBtn]}>
        <View style={[styles.buttonContainer, buttonViewStyle]}>
          <AppText
            type={SIXTEEN}
            weight={POPPINS_BOLD}
            style={[styles.buttonText(colors), titleStyle]}>
            {title}
          </AppText>
        </View>
      </View>
    </TouchableOpacityView>
  );
};

export default SecondaryButton;
