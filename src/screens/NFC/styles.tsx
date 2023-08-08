import {StyleSheet} from 'react-native';
import {universalPaddingHorizontal} from '../../theme/dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: universalPaddingHorizontal,
  },
  wrapper: {
    height: '100%',
    flexDirection: 'column',
  },

  container2: {
    // marginTop: 20,
  },
  container3: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  combinedContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnStyle: {
    width: 80,
    height: 30,
    // paddingVertical: universalPaddingHorizontal,
  },
});

export default styles;
