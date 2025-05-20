/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../utils/colors';
import Fonts from '../../utils/fonts';

interface Props {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (v: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: boolean;
  numberOfLines?: number;
  height?: number; // optional custom height
  type?: 'text' | 'touch'; // default 'text'
  onPress?: () => void;
}

const TextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 4,
  height,
  type,
  onPress,
}: Props) => {
  const [isHidden, setIsHidden] = useState(secureTextEntry);
  const toggleSecureEntry = () => {
    setIsHidden(!isHidden);
  };
  const isTouch = type === 'touch';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.inputContainer}>
        {isTouch ? (
          <TouchableOpacity
            onPress={onPress}
            style={[styles.input, styles.touchInput]}
            activeOpacity={0.7}>
            <Text style={{color: value ? Colors.black : '#aaa'}}>
              {value || placeholder}
            </Text>
            <AntDesign name="down" size={20} color="#666" />
          </TouchableOpacity>
        ) : (
          <>
            <RNTextInput
              style={[
                styles.input,
                multiline && {
                  height: height || numberOfLines * 24,
                  textAlignVertical: 'top',
                },
                {
                  paddingRight: 40,
                },
              ]}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              placeholderTextColor="#aaa"
              secureTextEntry={isHidden}
              keyboardType={keyboardType}
              multiline={multiline}
              numberOfLines={numberOfLines}
            />
            {secureTextEntry && (
              <TouchableOpacity onPress={toggleSecureEntry} style={styles.icon}>
                <Icon
                  name={isHidden ? 'eye-off' : 'eye'}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: Colors.black,
    fontFamily: Fonts.regular.fontFamily,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -10}],
  },
  touchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    gap: 8, // jika ingin jarak antar teks dan ikon
    justifyContent: 'space-between',
  },
});

export default TextInput;
