import React from 'react';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {AppText, EIGHTEEN, POPPINS_BOLD, POPPINS_EXTRA_BOLD_ITALIC, SIXTEEN} from './AppText';
import {RootState} from '../../libs/rootReducer';
import { TouchableOpacityView } from './TouchableOpacityView';
import {StyleSheet,View} from 'react-native';
// import { Primary } from '../theme/dimens';
// import {Primary} from '../../theme/dimens';

const Primary = ({
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
      
        <View
          style={[styles.linearGradient, smallBtn]}>
          <AppText
            type={EIGHTEEN}
            weight={POPPINS_BOLD}
            style={[styles.buttonText(colors), titleStyle]}>
            {title}
          </AppText>
        </View>
     
    </TouchableOpacityView>
  );
};


const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 10,
    height:51,
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    bottom:60,
    borderWidth:1,
    borderColor:"rgba(206, 241, 240, 1)",
    backgroundColor:"white"
  },
  linearGradientWrapper: {
    borderRadius: 5,
    padding: 1,
  },
  smallBtn: {
    height: 50,
    width: 109,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: colors => ({
    color:'black',
    fontWeight:"600"
  }),
});


export default Primary;
