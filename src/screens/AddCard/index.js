import {View, Text, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  calender,
} from '../../helper/image';
import CommonImageBackground from '../../common/commonImageBackground';
import {
  AppText,
  ELEVEN,
  FORTEEN,
  POPPINS,
  POPPINS_LIGHT,
  RUSSO,
  TEN,
  THIRTEEN,
  THIRTY,
  TWELVE,
} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import SecondaryButton from '../../common/secondaryButton';
import {PrivateValueStore} from '@react-navigation/native';
import PrimaryButton from '../../common/primaryButton';
import DropdownComponent from '../../common/Dropdown';
import {icici} from '../../helper/image';
import FastImage from 'react-native-fast-image';
import {RootState} from '../../libs/rootReducer';
import {universalPaddingHorizontal} from '../../theme/dimens';
import moment from 'moment';
import { TouchableOpacityView } from '../../common/TouchableOpacityView';

const AddCard = () => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const handleConfirm = date => {
    setDateOfBirth(moment(date).format('DD-MM-YYYY').toString());
    hideDatePicker();
  };
  return (
    <AppSafeAreaView style={{flex:1,backgroundColor:"#F5F5F5"}}>
        <Header
          style={{padding: universalPaddingHorizontal}}
          commonHeader
          title="Add Credit/Debit Card"
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.withdraw(colors)}>
            Enter Card Details
          </AppText>

          <View style={styles.box(colors)}>
            <InputBox
              placeholder=""
              value={name}
              placeholderTextColor={colors.grey}
              labelStyle={styles.label(colors)}
              label="Cardholder Name"
              returnKeyType="next"
              onChange={value => setName(value)}
              textInputBox={styles.textInputBox(colors)}
            />

            <InputBox
              placeholder=""
              value={number}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="Card Number"
              returnKeyType="next"
              onChange={value => setNumber(value)}
              textInputBox={styles.textInputBox(colors)}
            />

          
            <View style={styles.dateContainer}>
              <InputBox
                placeholder=""
                value={date}
                placeholderTextColor={colors.grey}
                labelStyle={[styles.label(colors), {}]}
                label="Expiry Date"
                returnKeyType="next"
                onChange={value => setDate(value)}
                textInputBox={styles.textInputBox(colors)}
                style={{flex: 1, marginEnd: 10}}
              />
                {/* <TouchableOpacityView onPress={showDatePicker}>
                <View style={styles.InputBoxContainer}>
                <AppText
                    type={ELEVEN}
                    weight={POPPINS}
                    style={[styles.label(colors), {marginTop: 20}]}>
                    DATE OF BIRTH
                  </AppText>
                  <View
                    style={[
                      styles.InputBox,
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                    ]}>
                    <AppText style={styles.InputBoxLabel(colors)}>
                      {dateOfBirth && dateOfBirth}
                    </AppText>
                    <TouchableOpacityView
                      onPress={() => {
                        setIsDatePickerVisible(true);
                      }}
                      style={{
                        marginLeft: 'auto',
                        marginEnd: 10,
                      }}>
                      <Image style={styles.calandar} source={calender} />
                    </TouchableOpacityView>
                  </View>
                </View>
              </TouchableOpacityView> */}
              <InputBox
                placeholder=""
                value={cvv}
                placeholderTextColor={colors.grey}
                labelStyle={[styles.label(colors), {}]}
                label="CVV Number"
                returnKeyType="done"
                onChange={value => setCvv(value)}
                textInputBox={styles.textInputBox(colors)}
                style={{flex: 1, marginStart: 10}}
              />
            </View>
          
          
           
          </View>
          <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={moment().subtract(18, 'years').toDate()}
        />
        <View style={{top:60}}>
          <PrimaryButton buttonStyle={styles.button} title="SAVE" />
          </View>
        </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default AddCard;
