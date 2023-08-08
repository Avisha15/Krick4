import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  AppText,
  BOLD,
  ELEVEN,
  FOURTEEN,
  NORMAL,
  POPPINS,
  WHITE,
} from '../AppText';
import {Button} from '../Button';
import {useSelector} from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import {KYC_SCREEN} from '../../navigation/routes';

const ListingItem = ({title, info, button, border = true}) => {
  const colors = useSelector(state => state.theme.colors);

  return (
    <View
      style={[
        {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgba(79, 122, 186, 1)',
          paddingHorizontal: 10,
          paddingVertical: 15,
          // backgroundColor: 'red',
        },
        !border && {borderBottomWidth: 0},
      ]}>
      <View>
        <AppText style={styles.color(colors)} type={FOURTEEN} weight={POPPINS}>
          {title}
        </AppText>
        <AppText style={styles.color(colors)} type={FOURTEEN} weight={POPPINS}>
          {info}
        </AppText>
      </View>
      <View>
        {button && (
          <Button
            onPress={() => NavigationService.navigate(KYC_SCREEN)}
            style={{
              width: 145,
              height: 30,
              marginTop: 0,
              backgroundColor:"#F5F5F5",
              borderRadius:8,
              borderWidth:1,
              borderColor:"rgba(1, 157, 145, 0.3)"
            }}
            nogradient
            type={ELEVEN}
            weight={POPPINS}>
            Verify to Withdraw
          </Button>
        )}
      </View>
    </View>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  icon_Name: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    backgroundColor: 'rgba(217, 217, 217, 0.05)',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  color: colors => ({
    color:'black',
  }),
});
