import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../libs/rootReducer';
import {AppText, FORTEEN} from '../AppText';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {eye_close, eye_open} from '../../helper/image';
import {TouchableOpacityView} from '../TouchableOpacityView';

const InputBox = ({
  secureTextEntry,
  label,
  labelStyle,
  value,
  returnKeyType,
  placeholder,
  textInputBox,
  textInputStyle,
  placeholderTextColor,
  onChange,
  isPassword,
  onToggle,
  style,
  ...props
}) => {
  const colors = useSelector((state: RootState) => {
    return state.theme.colors;
  });
  return (
    <View style={style}>
      {label && (
        <AppText
          {...props}
          type={FORTEEN}
          style={[styles.NameLabel(colors), labelStyle]}>
          {label}
        </AppText>
      )}
      <View
       
        style={styles.gradient}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'rgba(1, 157, 145, 0.3)',
          }}>
          <TextInput
            {...props}
            placeholder={placeholder}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : colors.code
            }
            style={[
              styles.textinputstyle(colors),
              textInputBox,
              textInputStyle,
            ]}
            secureTextEntry={secureTextEntry ? true : false}
            value={value}
            returnKeyType={returnKeyType}
            onChangeText={onChange}
          />

          {isPassword ? (
            <>
              {secureTextEntry ? (
                <TouchableOpacityView
                  style={styles.toggleButton}
                  onPress={onToggle}>
                  <FastImage
                    source={eye_open}
                    style={styles.eyeIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacityView>
              ) : (
                <TouchableOpacityView
                  style={styles.toggleButton}
                  onPress={onToggle}>
                  <FastImage
                    style={styles.eyeIcon}
                    source={eye_close}
                    resizeMode="contain"
                  />
                </TouchableOpacityView>
              )}
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default InputBox;
