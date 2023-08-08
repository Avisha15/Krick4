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
import {universalPaddingHorizontal} from '../../theme/dimens';
import {RootState} from '../../libs/rootReducer';

const VerifyBank = () => {
  const [accountNo, setAccountNo] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [state, setState] = useState('');
  const data = [
    {value: 1, label: 'Delhi'},
    {value: 2, label: 'Jaipur'},
  ];
  const onChangeValue = value => {
    console.log('value ---->:', value);
  };

  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <AppSafeAreaView hidden>
        <Header
          commonHeader
          title="Verify Bank Account"
          style={{padding: universalPaddingHorizontal}}
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.withdraw(colors)}>
            Enter Your Bank Details
          </AppText>
          <View style={styles.box(colors)}>
            <InputBox
              placeholder="Enter your account number"
              value={accountNo}
              placeholderTextColor={colors.grey}
              labelStyle={styles.label(colors)}
              label="Account Number"
              returnKeyType="next"
              onChange={value => setAccountNo(value)}
              textInputBox={styles.textInputBox(colors)}
            />
            <InputBox
              placeholder="Enter 11 digit IFSC code"
              value={ifsc}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="IFSC Code"
              returnKeyType="next"
              onChange={value => setIfsc(value)}
              textInputBox={styles.textInputBox(colors)}
            />

            <InputBox
              placeholder="Enter your bank name"
              value={bank}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="Bank Name"
              returnKeyType="next"
              onChange={value => setBank(value)}
              textInputBox={styles.textInputBox(colors)}
            />
            <InputBox
              placeholder="Your branch name"
              value={branch}
              placeholderTextColor={colors.grey}
              labelStyle={[styles.label(colors), {marginTop: 20}]}
              label="Branch Name"
              returnKeyType="next"
              onChange={value => setBranch(value)}
              textInputBox={styles.textInputBox(colors)}
            />
            <DropdownComponent
              label={'State'}
              value={state}
              placeholder="Rajasthan"
              items={data}
              onChangeValue={onChangeValue}
            />
          </View>
<View style={{top:60}}>
          <PrimaryButton buttonStyle={styles.button} title="SUBMIT" />
          </View>
        </KeyBoardAware>
    </AppSafeAreaView>
  );
};

export default VerifyBank;
