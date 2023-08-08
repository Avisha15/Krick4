import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AppText, POPPINS_BOLD, POPPINS_SEMI_BOLD, SIXTEEN} from '../AppText';
import {LEVEL_IMAGE} from '../../helper/image';

const Level = ({data}) => {
  return (
    <View style={{marginTop: 10}}>
      <AppText
        type={SIXTEEN}
        style={{marginBottom: 5, color: '#000000'}}
        weight={POPPINS_SEMI_BOLD}>
        Level Reached
      </AppText>
      <View
        style={{
          width: '100%',
          height: 110,
          padding: 1,
        }}>
        <View
          style={{
            height: 108,
            padding: 10,
            justifyContent: 'space-between',
            borderRadius: 8,
            borderColor: 'rgba(1, 157, 145, 0.3)',
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageBackground
              style={{
                height: 40,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={LEVEL_IMAGE}>
              <AppText
                style={{fontSize: 15, color: '#000000'}}
                weight={POPPINS_BOLD}>
                {data?.levels?.current_level}
              </AppText>
            </ImageBackground>
            <AppText
              style={{fontSize: 15, marginLeft: 15, color: '#000000'}}
              weight={POPPINS_BOLD}>
              {data?.levels?.current_level_name}
            </AppText>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.innerProgressBar}></View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  progressBarContainer: {
    height: 40,
    width: '100%',
    backgroundColor:'rgba(255, 234, 203, 1)',
    borderRadius:20,
    opacity: 1,
    overflow: 'hidden',
 
  },
  innerProgressBar: {
    width: '50%',
    backgroundColor: 'rgba(255, 170, 42, 1)',
    opacity: 1,
    height: '100%',
    borderRadius:20
  },
});
export default Level;
