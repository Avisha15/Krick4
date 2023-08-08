import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#172C66',
    borderRadius: 10,
    height: 200,
    overflow: 'hidden',
  },
  eachCard: {
    borderWidth: 2,
    borderColor: '#172C66',
    borderRadius: 10,
  },
  descContainer: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    // height: 70,
    // backgroundColor: 'blue',
    padding: 6,
  },
  titleAmount: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalImg: {
    // height: 8,
    marginVertical: 15,
    display: 'flex',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 2,
  },
  commissionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 4,
    // backgroundColor: 'green',
  },
  percentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: colors => ({
    color: colors.white,
  }),
  daysLeft: {
    color: '#98A2FF',
    fontWeight: 300,
    marginTop: 5,
  },
  amount: {
    fontSize: 15,
  },
  commissionText: {
    fontSize: 15,
  },
  owner: {
    fontSize: 10,
  },
  ownerPercent: {
    fontSize: 15,
  },
  leftSide: {},
  rightSide: {},

  textContainer: colors => ({
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: colors.whitefade,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }),
});

export default cardStyles;
