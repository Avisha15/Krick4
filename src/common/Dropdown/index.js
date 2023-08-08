import React, {useState} from 'react';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';
import {AppText, TWELVE} from '../AppText';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';

const DropdownComponent = props => {
  const {items, placeholder, onSelectItem, label} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <>
      {label && (
        <AppText {...props} type={TWELVE} style={[styles.NameLabel(colors)]}>
          {label}
        </AppText>
      )}
      <View
        style={styles.gradient}>
        <View
          style={{
            borderRadius:8,borderColor:"rgba(232, 236, 244, 1)",borderWidth:1
          }}>
          <DropDownPicker
            placeholder={placeholder}
            placeholderStyle={styles.placeholderText(colors)}
            textStyle={styles.textStyle(colors)}
            arrowIconStyle={styles.arrowIcon(colors)}
            dropDownContainerStyle={styles.dropDownContainerStyle(colors)}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            style={styles.background(colors)}
            onSelectItem={onSelectItem}
          />
        </View>
      </View>
    </>
  );
};

export default DropdownComponent;
