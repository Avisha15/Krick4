import React from 'react';
import {View} from 'react-native';
import {AppText, POPPINS_MEDIUM, SIXTEEN} from '../../common/AppText';
import {useSelector} from 'react-redux';

import {arrow, logo} from '../../helper/image';
import styles from './styles';
import {RootState} from '../../libs/rootReducer';
import NavigationService from '../../navigation/NavigationService';
import {TouchableOpacityView} from '../TouchableOpacityView';
import FastImage from 'react-native-fast-image';

const Header = props => {
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
              source={arrow}
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

export default Header;
