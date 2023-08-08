import {View, StatusBar,Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {AppText, ELEVEN, FORTEEN, THIRTEEN,POPPINS} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import PrimaryButton from '../../common/primaryButton';
import DropdownComponent from '../../common/Dropdown';
import {upload} from '../../helper/image';
import FastImage from 'react-native-fast-image';
import { TouchableOpacityView } from '../../common/TouchableOpacityView';
import {universalPaddingHorizontal} from '../../theme/dimens';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  calender,
} from '../../helper/image';
import moment from 'moment';

const VerifyPAN = () => {
  const [name, setName] = useState('');
  const [pan, setPan] = useState('');
  const [dob, setDob] = useState('');
const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [state, setState] = useState('');
  const [panImage, setPanImage] = useState('');
  const [reason, setReason] = useState(null);
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const data = [
    {value: 1, label: 'Delhi'},
    {value: 2, label: 'Jaipur'},
  ];
  const onChangeValue = value => {
    console.log('value ---->:', value);
  };
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const handleConfirm = date => {
    setDateOfBirth(moment(date).format('DD-MM-YYYY').toString());
    hideDatePicker();
  };
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <AppSafeAreaView style={{flex:1,
    backgroundColor:"#F5F5F5"}}>
        <Header
          style={{padding: universalPaddingHorizontal}}
          commonHeader
          title="Verify PAN Card"
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.withdraw(colors)}>
            Enter Your PAN Card Details
          </AppText>
          <View style={styles.box(colors)}>
            <InputBox
              placeholder="Enter your name"
              value={name}
              placeholderTextColor={colors.grey}
              labelStyle={styles.label(colors)}
              label="Name"
              returnKeyType="next"
              onChange={value => setName(value)}
              textInputBox={styles.textInputBox(colors)}
            />

            <InputBox
              placeholder="Enter your PAN Number"
              value={pan}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="PAN Number"
              returnKeyType="next"
              onChange={value => setPan(value)}
              textInputBox={styles.textInputBox(colors)}
            />
               <TouchableOpacityView onPress={showDatePicker}>
                <View style={styles.InputBoxContainer}>
                  <AppText
                    type={ELEVEN}
                    weight={POPPINS}
                    style={{marginTop: 20, fontSize: 12,
                      color:'rgba(1, 157, 145, 1)',
                      marginTop: 0,
                      marginBottom: 5,}}>
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
              </TouchableOpacityView>
              <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={moment().subtract(18, 'years').toDate()}
        />
            {/* <InputBox
              placeholder="Enter your DOB"
              value={pan}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="DOB"
              returnKeyType="next"
              onChange={value => setPan(value)}
              textInputBox={styles.textInputBox(colors)}
            /> */}
            <DropdownComponent
              label={'State'}
              value={state}
              placeholder="Rajasthan"
              items={data}
              onChangeValue={onChangeValue}
            />
          </View>
          <AppText type={THIRTEEN} style={styles.upload(colors)}>
            Upload your PAN Card
          </AppText>
          <View style={styles.uploadContainer(colors)}>
            <FastImage style={styles.image} source={upload} />
          </View>
          <View style={{top:60}}>
          <PrimaryButton buttonStyle={styles.button} title="SUBMIT" />
          </View>
        </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default VerifyPAN;
