import React, {useState} from 'react';
import {FlatList, ImageBackground, View,Image} from 'react-native';
import {AppText, POPPINS_SEMI_BOLD, TWELVE, TWENTY} from '../../common/AppText';
import PrimaryButton from '../../common/primaryButton';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';

import SecondaryButton from '../../common/secondaryButton';
import {
  bg,
  bell,
  battle,
  wallet,
  nft,
  right_arrow,
  refer_earn,
  terms_conditions,
  personIcon,
  walletIcon,
  Edit,
  Notify,
  refer,
  How,
  Contact,
  Setting,
  RIGHT_ARROW
} from '../../helper/image';
import {RootState} from '../../libs/rootReducer';
import styles from './styles';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {KeyBoardAware} from '../../common/KeyboardAware';
import FastImage from 'react-native-fast-image';
import {userLogout} from '../../actions/authActions';
import {TouchableOpacityView} from '../../common/TouchableOpacityView';
import NavigationService from '../../navigation/NavigationService';
import {MY_BALANCE, NFC, REFER_EARN,PROFILE_EDIT,SETTING} from '../../navigation/routes';

const DATA = [
  {
    id: '1',
    source: Edit,
    heading: 'Edit Profile',
    type: RIGHT_ARROW,
  },
  {
    id: '2',
    source: Notify,
    heading: 'Notification',
    type: RIGHT_ARROW,
  },
  {
    id: '3',
    source: refer,
    heading: 'Refer & Earn',
    type: RIGHT_ARROW,
  },
  {
    id: '4',
    source: How,
    heading: 'How to play',
    type: RIGHT_ARROW,
  },
  {
    id: '5',
    source: Contact,
    heading: 'Contact Us',
    type: RIGHT_ARROW,
  },
  {
    id: '6',
    source: Setting,
    heading: 'Settings',
    type: RIGHT_ARROW,
  },
];

const More = () => {
  const dispatch = useDispatch();
  const [mdlVisibile, setMdlVisible] = useState(false);
  const colors = useSelector((state) => {
    return state.theme.colors;
  });

  const onPressAction = id => {
    if (id == '1') return NavigationService.navigate(PROFILE_EDIT);
    // if (id == '2') return NavigationService.navigate(REFER_EARN);
    if (id == '3') return NavigationService.navigate(REFER_EARN);
    // if (id == '4') return NavigationService.navigate(MY_BALANCE);
    // if (id == '5') return NavigationService.navigate(MY_BALANCE);
    if (id == '6') return NavigationService.navigate(SETTING);
    // if (id == '4') return NavigationService.navigate(MY_BALANCE);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacityView
        key={item.id}
        onPress={() => onPressAction(item.id)}
        style={styles.box(colors)}>
        <View style={styles.boxContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.phoneContainer(colors)}>
              <FastImage
                source={item.source}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <View style={styles.mobileContainer}>
              <AppText type={TWELVE} style={styles.mobile(colors)}>
                {item.heading}
              </AppText>
            </View>
          </View>
          <View style={styles.arrow}>
            <FastImage
              source={item.type}
              resizeMode="contain"
              style={styles.rightArrow}
            />
          </View>
        </View>
      </TouchableOpacityView>
    );
  };

  return (
    <AppSafeAreaView>
      <View style={styles.image}>
        <View style={styles.bottomContainer}>
          <View style={styles.topContainer}>
          <FastImage source={personIcon} style={styles.userLogo} />
            <FastImage
              style={styles.logo}
              resizeMode="contain"
              source={battle}
            />
            <FastImage style={styles.bell} source={bell} resizeMode="contain" />
            <TouchableOpacityView onPress={() =>NavigationService.navigate(MY_BALANCE)}>
              <FastImage source={walletIcon} style={styles.walletIcon} />
              </TouchableOpacityView>
          </View>
          {DATA.map(item => {
            return renderItem({item});
          })}
          <View style={{top:70,flexDirection:"row",alignSelf:"center",justifyContent:"center"}}>
          <Image
            style={{height:14,width:15,resizeMode:"contain",left:120,zIndex:1,bottom:3
         }}
            source={require('../../../assets/images/log.png')}
          />
          <PrimaryButton
            onPress={() => setMdlVisible(true)}
            buttonStyle={styles.button}
            title="Logout"
          />
          </View>
        </View>
      </View>

      <Modal
    
        isVisible={mdlVisibile}
        style={{margin: 0}}
        // animationIn={'fadeIn'}
        // animationOut={'fadeOut'}
        hasBackdrop={true}
        onBackdropPress={() => setMdlVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255, 0.75)',
            // opacity:1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.modalBox(colors)}>
            <AppText
              style={styles.modalText(colors)}
              type={TWENTY}
              weight={POPPINS_SEMI_BOLD}>
              Are you sure you want to {'\n'} logout?
            </AppText>
            <View style={{top:50,alignSelf:"center"}}>
            <PrimaryButton
              onPress={() => dispatch(userLogout())}
              title="LOG OUT"
            />
            <View style={{bottom:40}}>
              <SecondaryButton
              onPress={() => setMdlVisible(false)}
              title="CANCEL"
            />
            </View>
           </View>
          </View>
        </View>
      </Modal>
    </AppSafeAreaView>
  );
};

export default More;
