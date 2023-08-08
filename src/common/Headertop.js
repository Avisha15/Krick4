import React from 'react';
import {View,StyleSheet} from 'react-native';
import {AppText, POPPINS_MEDIUM, SIXTEEN} from '../common/AppText';
import {useSelector} from 'react-redux';
import {arrow, logo,backIcon} from '../helper/image';
import {RootState} from '../libs/rootReducer';
import NavigationService from '../navigation/NavigationService';
import { TouchableOpacityView } from './TouchableOpacityView';
import FastImage from 'react-native-fast-image';
import {Logo, Screen, universalPaddingHorizontal} from '../theme/dimens';

const Headertop = props => {
  const {commonHeader, title, style} = props;
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });

  return (
    <>
      {commonHeader ? (
        <View style={[styles.header, style]}>
          <TouchableOpacityView
            onPress={() => {
              NavigationService.goBack();
            }}>
            <FastImage
              style={styles.arrow}
              resizeMode="contain"
              source={backIcon}
            />
          </TouchableOpacityView>

          <AppText
            type={SIXTEEN}
            weight={POPPINS_MEDIUM}
            style={styles.title}>
            {title}
          </AppText>
        </View>
      ) : (
        <>
          <TouchableOpacityView
            style={styles.bottomContainer}
            onPress={() => {
              NavigationService.goBack();
            }}>
            <FastImage
              style={styles.arrow}
              resizeMode="contain"
              source={arrow}
            />
          </TouchableOpacityView>
          <FastImage resizeMode="contain" style={styles.logo} source={logo} />
        </>
      )}
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: universalPaddingHorizontal,
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: universalPaddingHorizontal,
    // marginTop: Screen.Height / 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: Screen.Height / 16,
    height: Logo.Height,
    width: Logo.Width,
  },
  title:{
    marginLeft: 30,
    color:'white',
  },
  arrow: {
    height: 18,
    width: 18,
  },
  arrowIcon: {
    height: 20,
    width: 20,
  },
});
export default Headertop;
