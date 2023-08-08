import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppText,
  ELEVEN,
  FORTEEN,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_EXTRA_BOLD_ITALIC,
  SIXTEEN,
} from './AppText';
import {TouchableOpacityView} from './TouchableOpacityView';
import {useSelector} from 'react-redux';

const Button = ({
  onPress,
  children,
  weight,
  backgroundColor,
  nogradient,
  style,
  type,
}) => {
  const colors = useSelector(state => {
    return state.theme.colors;
  });
  return (
    <>
      {!nogradient ? (
        <View
          style={[styles.buttonStyle, style]}>
          <LinearGradient
            locations={[0.0, 0.24,1.0]}
            colors={['rgba(27, 188, 185, 1)','rgba(19, 179, 173, 1)','rgba(0, 155, 143, 1)']}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              width: '100%',
              height: '100%',
            }}>
            <TouchableOpacityView
              onPress={onPress}
              style={{
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}>
              <AppText
                style={{ color: colors.white,}}
                type={type ? type : FORTEEN}
                weight={weight ? weight : POPPINS_BOLD}>
                {children}
              </AppText>
            </TouchableOpacityView>
          </LinearGradient>
        </View>
      ) : (
        <View
          style={[styles.buttonStyle, style]}>
          <TouchableOpacityView
            onPress={onPress}
            style={[
              {
                margin: 1,
                width: '100%',
                height: '100%',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5',
                style,
              },
            ]}>
            <AppText
              style={{color:"black"}}
              type={type ? type : FORTEEN}
              weight={weight ? weight : POPPINS_EXTRA_BOLD_ITALIC}>
              {children}
            </AppText>
          </TouchableOpacityView>
        </View>
      )}
    </>
  );
};

export {Button};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 23,
    margin: 5,
    padding: 1,
    width: 145,
    // borderWidth:2,
    // borderRadius:5,
    // borderColor:"rgba(1, 157, 145, 1)"
  },
  color: colors => ({
    color: colors.white,
  }),
});
