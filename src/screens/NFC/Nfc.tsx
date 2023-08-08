import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import CommonImageBackground from '../../common/commonImageBackground';
import Header from '../../common/Header';

// import SmallButton from "../../common/smallButton";
import PurchaseAndRented from '../../common/PurchaseAndRented/PurchaseAndRented';
import PrimaryButton from '../../common/primaryButton';
import {useState} from 'react';
import Purchase from '../NftScreen/Purchanse/NftScreen1';
import {universalPaddingHorizontal} from '../../theme/dimens';
import FlatListCard from '../../common/FlatList1/FlatList';

const Nfc = () => {
  const [flatPurchasedList, setFlatPurchasedList] = useState(Purchase);
  const [rentedFlatList, setRentedFlatList] = useState();

  const handlePurchasedList = purchase => {
    setFlatPurchasedList(purchase);
  };

  const handleRentedFlatList = rented => {
    setRentedFlatList(rented);
    setFlatPurchasedList(false);

    console.log(rented);
  };

  return (
    <AppSafeAreaView>
      <CommonImageBackground common>
        <View style={styles.container}>
          {/* Container-1 (start) */}
          <View style={styles.combinedContainer}>
            <Header title="My NFT’s" commonHeader />
            <PrimaryButton
              title="Buy More"
              titleStyle={{fontSize: 12}}
              smallBtn={styles.btnStyle}
            />
          </View>
          {/* Container-1 (End) */}
          <View style={styles.container2}>
            <PurchaseAndRented
              purchased="Purchased"
              rented="Rented"
              handlePurchasedList={handlePurchasedList}
              handleRentedFlatList={handleRentedFlatList}
              flatPurchasedList={flatPurchasedList}
            />
          </View>

          {flatPurchasedList ? (
            <FlatListCard isPurchased={true} />
          ) : (
            <FlatListCard isRented={true} />
          )}
        </View>
      </CommonImageBackground>
    </AppSafeAreaView>
  );
};

export default Nfc;
