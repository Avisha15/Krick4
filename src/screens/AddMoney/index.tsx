import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {AppText, FORTEEN, TWELVE, WHITE} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import {RootState} from '../../libs/rootReducer';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import PrimaryButton from '../../common/primaryButton';
import NavigationService from '../../navigation/NavigationService';
import {PAYMENT_OPTIONS_SCREEN} from '../../navigation/routes';

const AddMoney = ({route}) => {
  console.log('route:::::::', route);
  const data = route?.params;
  const {EnteryFee, payAmount, usableBonus, winning_amount} = data ?? '';

  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const [value, setValue] = useState('50');
  const [selected, setSelected] = useState('50');

  return (
    <AppSafeAreaView>
      <KeyBoardAware>
        <CommonImageBackground common>
          <View style={styles.bottomContainer}>
            <Header commonHeader title="Add Money" />

            <View style={styles.box(colors)}>
              <View
                style={[
                  styles.mobileContainer,
                  {
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.5,
                    paddingBottom: 15,
                  },
                ]}>
                <View>
                  <AppText type={FORTEEN} style={styles.mobile(colors)}>
                    Current Balance
                  </AppText>
                  <AppText
                    type={FORTEEN}
                    style={[styles.mobile(colors), {marginTop: 10}]}>
                    Usable Cash Bonus
                  </AppText>
                  <AppText
                    type={FORTEEN}
                    style={[styles.mobile(colors), {marginTop: 10}]}>
                    Entry Fee
                  </AppText>
                </View>

                <View>
                  <AppText type={FORTEEN} style={styles.heading(colors)}>
                    ₹{winning_amount}
                  </AppText>
                  <AppText
                    type={FORTEEN}
                    style={[styles.heading(colors), {marginTop: 10}]}>
                    ₹{usableBonus}
                  </AppText>
                  <AppText
                    type={FORTEEN}
                    style={[styles.heading(colors), {marginTop: 10}]}>
                    ₹{EnteryFee}
                  </AppText>
                </View>
              </View>

              <View style={styles.middleContainer}>
                <AppText
                  type={FORTEEN}
                  style={[styles.entry(colors), {color: colors.white}]}
                  color={WHITE}>
                  Join this contest by adding
                </AppText>
                <AppText type={FORTEEN} style={styles.entry(colors)}>
                  ₹{payAmount}
                </AppText>
              </View>
            </View>
            <View style={styles.box(colors)}>
              <AppText
                type={FORTEEN}
                style={{
                  color: colors.white,
                  opacity: 0.6,
                  textAlign: 'center',
                }}>
                Add cash to your account
              </AppText>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <InputBox
                  placeholder="₹50"
                  textInputBox={styles.textInputBox}
                  style={{flex: 1}}
                  value={value}
                  onChange={setValue}
                  keyboardType={'numeric'}
                />
                {/* {value && (
                  <TouchableOpacityView
                    style={{position: 'absolute', right: 10}}>
                    <FastImage
                      style={{
                        height: 8,
                        width: 8,
                        alignSelf: 'center',
                      }}
                      source={cross}
                    />
                  </TouchableOpacityView>
                )} */}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacityView
                  onPress={() => {
                    setSelected('50');
                    setValue('50');
                  }}
                  style={
                    selected === '50'
                      ? styles.rsContainer2(colors)
                      : styles.rsContainer(colors)
                  }>
                  <AppText type={TWELVE} style={styles.rs(colors)}>
                    ₹50
                  </AppText>
                </TouchableOpacityView>
                <TouchableOpacityView
                  onPress={() => {
                    setSelected('100');
                    setValue('100');
                  }}
                  style={
                    selected == '100'
                      ? styles.rsContainer2(colors)
                      : styles.rsContainer(colors)
                  }>
                  <AppText type={TWELVE} style={styles.rs(colors)}>
                    ₹100
                  </AppText>
                </TouchableOpacityView>
                <TouchableOpacityView
                  onPress={() => {
                    setSelected('200');
                    setValue('200');
                  }}
                  style={
                    selected == '200'
                      ? styles.rsContainer2(colors)
                      : styles.rsContainer(colors)
                  }>
                  <AppText type={TWELVE} style={styles.rs(colors)}>
                    ₹200
                  </AppText>
                </TouchableOpacityView>
                <TouchableOpacityView
                  onPress={() => {
                    setSelected('500');
                    setValue('500');
                  }}
                  style={
                    selected == '500'
                      ? styles.rsContainer2(colors)
                      : styles.rsContainer(colors)
                  }>
                  <AppText type={TWELVE} style={styles.rs(colors)}>
                    ₹500
                  </AppText>
                </TouchableOpacityView>
              </View>
            </View>
          </View>
          {value && (
            <PrimaryButton
              onPress={() => NavigationService.navigate(PAYMENT_OPTIONS_SCREEN)}
              title={`ADD ₹${value}`}
              buttonStyle={styles.button}
            />
          )}
        </CommonImageBackground>
      </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default AddMoney;
