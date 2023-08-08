import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {MATCH_REMAINDER_CLOSE_ICON} from '../../helper/image';
import {
  AppText,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  THIRTEEN,
  TWELVE,
} from '../../common/AppText';
import LinearGradient from 'react-native-linear-gradient';

const FilterSheet = ({onClose}) => {
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity onPress={onClose}>
          <FastImage
            source={MATCH_REMAINDER_CLOSE_ICON}
            style={styles.closeIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <AppText weight={POPPINS_BOLD} type={THIRTEEN} style={{color: 'black'}}>
          Filter
        </AppText>
        <AppText type={TWELVE} style={{color: 'rgba(0, 0, 0, 1)', opacity: 0.6}}>
          Clear
        </AppText>
      </View>
      <View style={{paddingHorizontal: 10,backgroundColor:"rgba(255, 255, 255, 1)"}}>
        <Text style={styles.label}>Entry</Text>
        <View style={styles.entryContainer}>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
        </View>
        <Text style={styles.label}>Number Of Teams</Text>
        <View style={styles.entryContainer}>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
        </View>
        <Text style={styles.label}>Prize Pool</Text>
        <View style={styles.entryContainer}>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.amount}>₹1 - ₹50</Text>
          </View>
          <Text style={styles.label}>Contset Type</Text>
         <View style={styles.entryContainer}>
           <View style={styles.entry}>
             <Text style={styles.amount}>Single Entry</Text>
           </View>
           <View style={styles.entry}>
             <Text style={styles.amount}>Multi Entry</Text>
           </View>
           <View style={styles.entry}>
             <Text style={styles.amount}>Single Winner</Text>
           </View>
           <View style={styles.entry}>
             <Text style={styles.amount}>Multi Winner</Text>
           </View>
           <View style={styles.entry}>
            <Text style={styles.amount}>Guranteed</Text>
           </View>
           <View style={styles.entry}>
             <Text style={styles.amount}>Flexible</Text>
           </View>
        </View>
        </View>
        <TouchableOpacity>
          <LinearGradient
            style={styles.btn}
          locations={[0.0,0.24,1.0]}
            colors={['rgba(27, 188, 185, 1)',
              'rgba(19, 179, 173, 1)',
             ' rgba(0, 155, 143, 1)']}>
            <AppText
              style={{color: 'white'}}
              type={THIRTEEN}
              weight={POPPINS_BOLD}>
              APPLY
            </AppText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterSheet;
