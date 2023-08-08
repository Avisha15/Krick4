import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
// import {AppText} from '../AppText';
import {
  AppText,
  EIGHT,
  POPPINS,
  POPPINS_SEMI_BOLD,
  TWELVE,
} from '../../common/AppText';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Activity = props => {
  const colors = useSelector(state => state.theme.colors);
  let space = props?.index % 2 == 0 ? {marginEnd: 5} : {marginStart: 5};
  return (
    <View
    
      style={[
        space,
        {
          flex: 1,
          marginVertical: 5,
          borderRadius:8,
          borderColor:"rgba(1, 157, 145, 1)",
          borderWidth:1
        },
      ]}>
      <View
        style={[
          {
            padding: 10,
            margin: 1,
            borderRadius: 10,
            justifyContent: 'space-between',
            flexDirection: 'row-reverse',
          
          },
          !props.rowReverse && {flexDirection: 'row'},
        ]}>
        <View style={{}}>
          <Image
            style={[
              {width: 35, height: 35},
              props.rowReverse && {
                alignSelf: 'flex-end',
                width: 20,
                height: 20,
                
              },
            ]}
            resizeMode="contain"
            source={props?.image}
          />
          {!props.rowReverse && (
            <AppText
            style={{color:"black", marginTop: 10}}
              type={TWELVE}
              weight={POPPINS}>
              {props?.title}
            </AppText>
          )}
        </View>
        <View style={{}}>
          <AppText
            style={{color:"black"}}
            type={EIGHT}
            weight={POPPINS_SEMI_BOLD}>
            {props?.value}
          </AppText>
          {props.rowReverse && (
            <AppText
              style={[styles.color(colors), {marginTop: 4}]}
              type={TWELVE}
              weight={POPPINS}>
              {props?.title}
            </AppText>
          )}
        </View>
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  color: colors => ({
    color: colors.white,
  }),
});
