import {StyleSheet} from 'react-native';

import {Logo, Screen, universalPaddingHorizontal} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: universalPaddingHorizontal,
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: universalPaddingHorizontal,
    // marginTop: Screen.Height / 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: Screen.Height / 16,
    height: Logo.Height,
    width: Logo.Width,
  },
  title:{
    marginLeft: 30,
    color:'rgba(0, 0, 0, 1)',
  },
  arrow: {
    height: 18,
    width: 18,
  },
  arrowIcon: {
    height: 20,
    width: 20,
  },
});

export default styles;
