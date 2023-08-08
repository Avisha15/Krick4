import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  selectedUIFilter: (type: number, colors) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4,
    height: 15,
    width: 15,
    borderColor:"rgba(1, 157, 145, 1)",
    borderWidth:1
  }),

  checkboxTick: (type: number, colors) => ({
    width: '75%',
    height: '95%',
    alignSelf: 'center',
  }),
  unchecked: colors => ({
    borderRadius: 3,
    height: 15,
    width: 15,
    borderColor:"rgba(1, 157, 145, 1)",
    borderWidth:1
  }),

  linearGradientWrapper: {
    borderRadius: 3,
    padding: 1,
   
  },
});

export default styles;
