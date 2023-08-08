import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacityView} from '../TouchableOpacityView';

import PurchaseList from '../../screens/NftScreen/Purchanse/NftScreen1';
import RentedList from '../../screens/NftScreen/Rented/Rented';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AppText, POPPINS, POPPINS_MEDIUM, TWELVE} from '../AppText';
import {useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';

const PurchaseAndRented = ({
  purchased,
  rented,
  handlePurchasedList,
  handleRentedFlatList,
  flatPurchasedList,
}: // active,
any) => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const component1 = PurchaseList;
  const component2 = RentedList;
  return (
    <LinearGradient colors={['#4F7ABA', '#E18FFF']} style={[styles.grediant]}>
      <View style={styles.mainContainer}>
        {flatPurchasedList ? (
          <LinearGradient
            colors={['#00B4C3', '#7B57D0']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.gradient}>
            <TouchableOpacityView
              style={[styles.firstButton]}
              onPress={() => handlePurchasedList(component1)}>
              <AppText
                type={TWELVE}
                weight={POPPINS_MEDIUM}
                style={{color: colors.white}}>
                {purchased}
              </AppText>
            </TouchableOpacityView>
          </LinearGradient>
        ) : (
          <TouchableOpacityView
            style={[styles.firstButton]}
            onPress={() => handlePurchasedList(component1)}>
            <AppText
              type={TWELVE}
              weight={POPPINS_MEDIUM}
              style={{color: colors.white}}>
              {purchased}
            </AppText>
          </TouchableOpacityView>
        )}
        {!flatPurchasedList ? (
          <LinearGradient
            colors={['#00B4C3', '#7B57D0']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.gradient}>
            <TouchableOpacityView
              style={styles.firstButton}
              onPress={() => handleRentedFlatList(component2)}>
              <AppText
                type={TWELVE}
                weight={POPPINS_MEDIUM}
                style={{color: colors.white}}>
                {rented}
              </AppText>
            </TouchableOpacityView>
          </LinearGradient>
        ) : (
          <TouchableOpacityView
            style={styles.firstButton}
            onPress={() => handleRentedFlatList(component2)}>
            <AppText
              type={TWELVE}
              weight={POPPINS_MEDIUM}
              style={{color: colors.white}}>
              {rented}
            </AppText>
          </TouchableOpacityView>
        )}
      </View>
    </LinearGradient>
  );
};

export default PurchaseAndRented;
