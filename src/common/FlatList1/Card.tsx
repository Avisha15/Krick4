import {View, Text, Image} from 'react-native';
import React from 'react';
import cardStyles from './cardStyles';
import {horizontalLine} from '../../helper/image';
import FastImage from 'react-native-fast-image';
import {AppText, POPPINS, RUSSO, TWELVE} from '../AppText';
import {useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';

const Card = props => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  const {eachItem, index} = props;
  const {
    id,
    img,
    title,
    amount,
    daysLeft,
    commission,
    owner,
    rentee,
    commisionPercentage,
    renteePercentage,
  } = eachItem;
  let space = index % 2 == 0 ? {marginRight: 5} : {marginLeft: 5};
  return (
    <View style={[cardStyles.cardContainer, space]}>
      <Image
        source={img}
        resizeMode="contain"
        style={[
          {flex: 1, resizeMode: 'contain', height: '100%', width: '100%'},
        ]}
      />

      {renteePercentage ? (
        <View style={cardStyles.descContainer}>
          <View style={cardStyles.titleAmount}>
            <View style={cardStyles.leftSide}>
              <Text style={cardStyles.title}>{title}</Text>
              <Text style={cardStyles.daysLeft}>{daysLeft}</Text>
            </View>
            <View style={cardStyles.rightSide}>
              <Text style={cardStyles.amount}>{amount}</Text>
            </View>
          </View>
          <View style={cardStyles.horizontalImg}>
            <Image source={horizontalLine} style={cardStyles.horizontalLine} />
          </View>
          <View style={cardStyles.commissionContainer}>
            <Text style={cardStyles.commissionText}>{commission}</Text>
            <View style={cardStyles.percentContainer}>
              <Text style={cardStyles.owner}>{owner}</Text>
              <Text style={cardStyles.ownerPercent}>{commisionPercentage}</Text>
            </View>
            <View style={cardStyles.percentContainer}>
              <Text style={cardStyles.owner}>{rentee}</Text>
              <Text style={cardStyles.ownerPercent}>{renteePercentage}</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={cardStyles.textContainer(colors)}>
          <AppText
            type={TWELVE}
            weight={RUSSO}
            style={cardStyles.title(colors)}>
            {title}
          </AppText>
          <AppText
            type={TWELVE}
            weight={POPPINS}
            style={cardStyles.title(colors)}>
            {amount}
          </AppText>
        </View>
      )}
    </View>
  );
};

export default Card;
