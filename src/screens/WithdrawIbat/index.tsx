import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {AppText, FORTEEN} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import PrimaryButton from '../../common/primaryButton';
import DropdownComponent from '../../common/Dropdown';
import {RootState} from '../../libs/rootReducer';
import {universalPaddingHorizontal} from '../../theme/dimens';

const WithdrawIbat = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('');
  const data = [
    {value: 1, label: 'ABC'},
    {value: 2, label: 'XYZ'},
  ];
  const onChangeValue = value => {
    console.log('value ---->:', value);
  };

  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <AppSafeAreaView>
      <CommonImageBackground common>
        <Header
          commonHeader
          title="Withdrawal IBAT"
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.withdraw(colors)}>
            Withdraw
          </AppText>
          <View style={styles.box(colors)}>
            <InputBox
              placeholder="Enter wallet address"
              value={address}
              placeholderTextColor={colors.grey}
              labelStyle={styles.label(colors)}
              label="Wallet Address"
              returnKeyType="next"
              onChange={value => setAddress(value)}
              textInputBox={styles.textInputBox(colors)}
            />
            <InputBox
              placeholder="Enter your amount"
              value={amount}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="Amount"
              returnKeyType="next"
              onChange={value => setAmount(value)}
              textInputBox={styles.textInputBox(colors)}
            />

            <DropdownComponent
              label={'Select Network'}
              value={network}
              placeholder="BTC"
              items={data}
              onChangeValue={onChangeValue}
            />
          </View>
          <PrimaryButton buttonStyle={styles.button} title="WITHDRAW" />
        </KeyBoardAware>
      </CommonImageBackground>
    </AppSafeAreaView>
  );
};

export default WithdrawIbat;
