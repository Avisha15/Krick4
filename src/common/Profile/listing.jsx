import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {right_arrow,RIGHT_ARROW} from '../../helper/image';
import {AppText, BOLD, FOURTEEN, NORMAL, WHITE} from '../AppText';
import CommonContainer from './commonContainer';
import {TouchableOpacityView} from '../TouchableOpacityView';
import {useSelector} from 'react-redux';

const Listing = ({Icon, Name, next, lastName, onPress, onPressMain}) => {
  const colors = useSelector(state => state.theme.colors);
  return (
    <TouchableOpacityView
      activeOpacity={1}
      onPress={onPressMain}
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <View style={styles.ImageContainer}>
          <FastImage
            source={Icon}
            resizeMode="contain"
            style={[
              {width: 34, height: 34, resizeMode: 'contain'},
              !next && {width: 20, height: 20},
            ]}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <AppText
            style={{color:"black"}}
            color={WHITE}
            type={FOURTEEN}
            weight={NORMAL}>
            {Name}
          </AppText>
        </View>
      </View>

      <View>
        {lastName && (
          <AppText style={styles.color(colors)} type={FOURTEEN} weight={BOLD}>
            {lastName}
          </AppText>
        )}
        {next && (
          <TouchableOpacityView
            onPress={() => {
              onPress();
            }}>
            <FastImage
              source={RIGHT_ARROW}
              resizeMode="contain"
              style={{width: 6, height: 12, marginEnd: 10}}
            />
          </TouchableOpacityView>
        )}
      </View>
    </TouchableOpacityView>
  );
};

export default Listing;

const styles = StyleSheet.create({
  icon_Name: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    backgroundColor: 'rgba(217, 217, 217, 0.05)',
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // marginStart: 5,
  },
  color: colors => ({
    color: colors.white,
    marginEnd: 10,
  }),
});
