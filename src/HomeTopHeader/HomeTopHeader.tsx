import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacityView} from '../common/TouchableOpacityView';
import {
  personIcon,
  VectorLogo,
  BATTLEINFINITY,
  bellIcon,
  walletIcon,
} from '../helper/image';
import FastImage from 'react-native-fast-image';

const HomeTopHeader = ({handleModel, personIcon}) => {
  return (
    <View style={styles.headerTop}>
      <View>
        <TouchableOpacityView
          onPress={handleModel}
          style={styles.personIconContainer}>
          <FastImage
            source={personIcon}
            style={styles.personImg}
            resizeMode="contain"
          />
        </TouchableOpacityView>
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.vectorLogo}>
          <FastImage
            source={VectorLogo}
            style={styles.logoSymbol}
            resizeMode="contain"
          />
        </View>
        <View>
          <FastImage
            source={BATTLEINFINITY}
            style={styles.logoName}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.bellWalletContainer}>
        <View style={styles.vectorLogo}>
          <FastImage
            source={bellIcon}
            style={styles.bellIcon}
            resizeMode="contain"
          />
        </View>
        <View>
          <FastImage
            source={walletIcon}
            style={styles.walletIcon}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeTopHeader;
