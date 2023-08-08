import {View, Text, StatusBar, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import CommonImageBackground from '../../common/commonImageBackground';
import {
  AppText,
  EIGHT,
  ELEVEN,
  FORTEEN,
  POPPINS_LIGHT,
  POPPINS_MEDIUM,
  POPPINS_SEMI_BOLD,
  SIXTEEN,
  TEN,
  THIRTEEN,
  TWELVE,
  TWENTY,
} from '../../common/AppText';
import styles from './styles';
import {useSelector} from 'react-redux';
import InputBox from '../../common/InputBox';
import {RootState} from '../../libs/rootReducer';
import Modal from 'react-native-modal';

import FastImage from 'react-native-fast-image';
import {
  phone,
  masterCard,
  deleteIcon,
  visaCard,
  paytm,
} from '../../helper/image';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import PrimaryButton from '../../common/primaryButton';
import SecondaryButton from '../../common/secondaryButton';
import {universalPaddingHorizontal} from '../../theme/dimens';
import NavigationService from '../../navigation/NavigationService';
import {ADD_CARD_SCREEN} from '../../navigation/routes';

const DATA = [
  {
    id: '1',
    source: masterCard,
    heading: 'Credit Card',
    number: 'XX 2155',
    subHeading: 'ICICI Bank',
    icon: deleteIcon,
    status: false,
  },
  {
    id: '2',
    source: visaCard,
    heading: 'Credit Card',
    number: ' XX 2155',
    subHeading: 'ICICI Bank',
    icon: deleteIcon,
    status: false,
  },
];

const ManagePayment = () => {
  const [mdlVisibile, setMdlVisible] = useState(false);
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });

  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.box(colors)}>
        <View style={[styles.topContainer]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.phoneContainer(colors)}>
              <FastImage
                source={item.source}
                resizeMode="contain"
                style={styles.card}
              />
            </View>
            <View style={styles.mobileContainer}>
              <View style={styles.cardContainer}>
                <AppText type={TWELVE} style={styles.mobile2(colors)}>
                  {item.heading}{' '}
                </AppText>
                <AppText type={TWELVE} style={styles.number(colors)}>
                  {item.number}
                </AppText>
              </View>

              <AppText type={TEN} style={styles.mobile(colors)}>
                {item.subHeading}
              </AppText>
            </View>
          </View>

          <TouchableOpacityView
            onPress={() => setMdlVisible(true)}
            style={styles.deleteContainer}>
            <FastImage
              source={item.icon}
              resizeMode="contain"
              style={styles.delete}
            />
          </TouchableOpacityView>
        </View>
      </View>
    );
  };

  return (
    <AppSafeAreaView style={{flex:1,backgroundColor:"#F5F5F5"}}>
     
        <Header
          style={{padding: universalPaddingHorizontal}}
          commonHeader
          title="Manage Payments"
        />
        <KeyBoardAware style={styles.bottomContainer}>
          <AppText type={FORTEEN} style={styles.getVerified(colors)}>
            Credit/Debit Card
          </AppText>
          {DATA.map((item, index) => {
            return renderItem({item});
          })}
          <TouchableOpacityView
            onPress={() => NavigationService.navigate(ADD_CARD_SCREEN)}
            style={styles.box(colors)}>
            <View style={[styles.topContainer]}>
              <AppText type={TWELVE} style={styles.add(colors)}>
                Add new card
              </AppText>
            </View>
          </TouchableOpacityView>

          <AppText type={FORTEEN} style={styles.options(colors)}>
            Other Options
          </AppText>

          <View style={styles.box(colors)}>
            <View style={[styles.topContainer]}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.phoneContainer(colors)}>
                  <FastImage
                    source={paytm}
                    resizeMode="contain"
                    style={styles.card}
                  />
                </View>
                <View style={styles.mobileContainer}>
                  <View style={styles.cardContainer}>
                    <AppText type={TWELVE} style={styles.mobile(colors)}>
                      Paytm Wallet
                    </AppText>
                  </View>
                </View>
              </View>

              <AppText type={TWELVE} style={styles.link(colors)}>
                Link Account
              </AppText>
            </View>
          </View>
        </KeyBoardAware>

        <Modal
          isVisible={mdlVisibile}
          style={{margin: 0}}
          animationIn="fadeIn"
          animationOut={'fadeOut'}
          hasBackdrop={true}
          onBackdropPress={() => setMdlVisible(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#0003',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.modalBox(colors)}>
              <AppText
                style={styles.modalText(colors)}
                type={TWENTY}
                weight={POPPINS_SEMI_BOLD}>
                Are you sure you want to {'\n'} remove card?
              </AppText>
              <PrimaryButton title="REMOVE" />

              <SecondaryButton
                onPress={() => setMdlVisible(false)}
                title="CANCEL"
              />
            </View>
          </View>
        </Modal>
    </AppSafeAreaView>
  );
};

export default ManagePayment;
