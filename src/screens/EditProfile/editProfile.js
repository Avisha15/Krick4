import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import {colors} from '../../themes/colors';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import FastImage from 'react-native-fast-image';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import {
  AppText,
  BOLD,
  EIGHTEEN,
  ELEVEN,
  NORMAL,
  POPPINS,
  POPPINS_BOLD,
  POPPINS_EXTRA_BOLD_ITALIC,
  SIXTEEN,
  WHITE,
} from '../../common/AppText';
import InputBox from '../../common/InputBox';
import Header from '../../common/Header';
import {
  bg,
  calender,
  camera,
  closeIcon,
  placeholderImage,
  userAvatar,
} from '../../helper/image';
import {KeyBoardAware} from '../../common/KeyboardAware';
import RadioActive from '../../common/RadioActive';
import RadioUnActive from '../../common/RadioUnActive';
import {Button} from '../../common/Button';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import CommonContainer from '../../common/Profile/commonContainer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  fontFamilyPoppins,
  poppinsExtraBoldItalic,
} from '../../theme/typography';
import {Primary, universalPaddingHorizontal} from '../../theme/dimens';
import PrimaryButton from '../../common/primaryButton';
import NavigationService from '../../navigation/NavigationService';

export default function EditProfile() {
  const userData = useSelector(state => {
    return state.profile.userData;
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [gender, setGender] = useState('Male');
  const [profileImage, setProfileImage] = useState(null);
  const dispatch = useDispatch();
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
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 485,
      height: 485,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
      const data = {
        uri: image.path,
        name: 'selfie' + image.modificationDate + image.mime,
        type: image.mime,
      };
      setProfileImage(data);
    });
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 485,
      height: 485,
      cropping: true,
    }).then(image => {
      const data = {
        uri: image.path,
        name: 'selfie' + image.modificationDate + image.mime,
        type: image.mime,
      };
      setProfileImage(data);
    });
  };

  const handleSubmit = () => {
    NavigationService.goBack();
    // const formData = new FormData();
    // const data = {
    //   firstName: fullName,
    //   email: email,
    //   mobileNumber,
    //   dob: dateOfBirth,
    //   profilepicture: profileImage,
    //   gender: gender,
    //   _id: userData?._id,
    //   email: userData?.email_or_phone,
    // };
    // for (let i in data) {
    //   formData.append(i, data[i]);
    // }
  };

  useEffect(() => {
    setFullName();
    setEmail();
    setMobileNumber();
  }, []);
  const confimCamera = useRef();
  const onCamSelect = () => {
    confimCamera?.current?.close();
    openCamera();
  };
  const onGalerySelect = () => {
    confimCamera?.current?.close();
    openGallery();
  };
  const colors = useSelector(state => state.theme.colors);
  console.log('AAAA', colors);
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <Header
          title={'My Profile'}
          commonHeader
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={{flex: 1}}>
          <View style={styles.avtarContainer}>
            <Image style={[styles?.avtharImage]} source={placeholderImage} />
            <TouchableOpacityView
              onPress={() => {
                confimCamera.current.open();
              }}
              style={styles.cameraContainer}>
              <Image source={camera} style={styles.cameraIcon} />
            </TouchableOpacityView>
          </View>
          <View style={styles.InputBoxWrapper}>
            <View style={styles.userIcon}>
              <Image source={userAvatar} style={styles.cameraIcon} />
              <AppText
                style={styles.color(colors)}
                type={EIGHTEEN}
                weight={POPPINS}>
                {' Your Details'}
              </AppText>
            </View>

            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 20,
                width: '100%',
                backgroundColor:"#F5F5F5"
              }}>
              <InputBox
                placeholderTextColor={'rgba(0, 0, 0, 1)'}
                label={'Full Name'}
                value={fullName}
                keyboardType="default"
                placeholder={'Enter your  name'}
                handleChange={setFullName}
                textInputBox={styles.textInputBox(colors)}
                labelStyle={styles.label(colors)}
              />
              <InputBox
                placeholderTextColor={colors.grey}
                label={'Email'}
                editable={false}
                value={email}
                keyboardType="default"
                placeholder={'Enter your email'}
                handleChange={setFullName}
                textInputBox={styles.textInputBox(colors)}
                labelStyle={[styles.label(colors), {marginTop: 20}]}
              />

              <AppText
                type={ELEVEN}
                weight={POPPINS}
                style={[styles.label(colors), {marginTop: 20}]}>
                Gender
              </AppText>

              <View style={styles.radioContainer}>
                <TouchableOpacityView
                  style={styles.radioWrapper}
                  onPress={() => setGender('Male')}>
                  {gender == 'Male' ? <RadioActive /> : <RadioUnActive />}

                  <AppText
                    type={ELEVEN}
                    weight={POPPINS}
                    style={styles.color(colors)}>
                    Male
                  </AppText>
                </TouchableOpacityView>
                <TouchableOpacityView
                  style={styles.radioWrapper}
                  onPress={() => setGender('Female')}>
                  {gender == 'Female' ? <RadioActive /> : <RadioUnActive />}

                  <AppText
                    type={ELEVEN}
                    weight={POPPINS}
                    style={styles.color(colors)}>
                    Female
                  </AppText>
                </TouchableOpacityView>
              </View>
              <InputBox
                label={'Mobile number'}
                value={mobileNumber}
                placeholder={'Enter mobile number'}
                handleChange={setMobileNumber}
                placeholderTextColor={colors.grey}
                textInputBox={styles.textInputBox(colors)}
                labelStyle={[styles.label(colors), {marginTop: 20}]}
              />

              <TouchableOpacityView onPress={showDatePicker}>
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
              </TouchableOpacityView>
            </View>
          </View>
         
          <View style={{top:40, marginHorizontal: 20}}>
            <Button
              style={{width: '100%', height:51}}
              onPress={() => {
                handleSubmit();
              }}>
              {'SAVE'}
            </Button>
          </View>
        </KeyBoardAware>
          
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={moment().subtract(18, 'years').toDate()}
        />

        <RBSheet
          ref={confimCamera}
          closeOnDragDown={true}
          height={200}
          customStyles={{
            container: {
              backgroundColor: '#242937',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            draggableIcon: {
              display: 'none',
            },
          }}>
          <View style={styles.cameratypeSelect}>
            <View style={styles.header}>
              <TouchableOpacityView
                style={styles.closeIcon}
                onPress={() => confimCamera?.current?.close()}>
                <FastImage source={closeIcon} style={{height: 12, width: 12}} />
              </TouchableOpacityView>
              <Text style={{color: 'white', fontWeight: '600'}}>Select </Text>
            </View>

            <View style={styles.cameratypeSelectInside}>
              <TouchableOpacityView onPress={onCamSelect}>
                <View
                  style={[
                    styles.cameraContainer,
                    {
                      position: 'relative',
                      right: 0,
                      bottom: 0,
                      alignSelf: 'center',
                    },
                  ]}>
                  <Image source={camera} style={styles.cameraIcon} />
                </View>

                <Text style={styles.label}>Use Camera</Text>
              </TouchableOpacityView>
              <TouchableOpacityView onPress={onGalerySelect}>
                <View
                  style={[
                    styles.cameraContainer,
                    {
                      position: 'relative',
                      right: 0,
                      bottom: 0,
                      alignSelf: 'center',
                    },
                  ]}>
                  <Image
                    source={{
                      uri: 'data:image/png;base64,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',
                    }}
                    style={styles.cameraIcon}
                  />
                </View>

                <Text style={styles.label}>Use Galery</Text>
              </TouchableOpacityView>
            </View>
          </View>
        </RBSheet>
      </View>
    </AppSafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColorContainer: {
    height: 220,
  },
  ImageBackground: {
    width: '100%',
    height: 174,
  },
  avtarContainer: {
    width: 115,
    height: 114,
    alignSelf: 'center',
    borderRadius: 90,
    borderColor: 'white',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  avtharImage: {
    width: 105,
    height: 105,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 90,
  },
  cameraContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 5,
    bottom: 0,
  },
  cameraIcon: {
    width: 14,
    height: 14,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  InputBoxWrapper: {
    marginHorizontal: 20,
    top: 30,
    borderColor:"rgba(1, 157, 145, 0.3)",
    borderRadius:8,
    borderWidth:3,
  },
  userIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    backgroundColor: 'rgba(1, 157, 145, 0.1)',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
    marginRight: 30,
    // margin: 10,
    marginLeft: 0,
  },
  radioButton: {
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: colors.pink,
  },
  InputBoxContainer: {
    marginBottom: 10,
  },
  InputBoxLabel: colors => ({
    color:'black',
    fontSize: 11,
    marginVertical: 6,
  }),
  InputBox: {
    borderColor: 'rgba(1, 157, 145, 0.3)',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    fontFamily: fontFamilyPoppins,
    fontSize: 12,
    height: Primary.Height,
    // paddingHorizontal: 15,
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  calandar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  // label: {
  //   color: '#FFFFFF',
  //   fontSize: 16,
  //   marginVertical: 7,
  // },

  header: {
    flexDirection: 'row',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 54,
    paddingHorizontal: 25,
  },
  cameratypeSelectInside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 100,
    marginTop: 15,
  },
  color: colors => ({
    color:'#000000',
  }),
  label: colors => ({
    fontSize: 12,
    color:'rgba(1, 157, 145, 1)',
    marginTop: 0,
    marginBottom: 5,
  }),
  textInputBox: colors => ({
    fontFamily: fontFamilyPoppins,
    fontSize: 12,
  }),
});