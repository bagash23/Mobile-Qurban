import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../utils/colors';
import Fonts from '../../utils/fonts';

interface Props {
  title: string;
  onPress: () => void;
  isLoading: boolean;
  variant?: 'filled' | 'outlined';
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  isLoading,
  variant = 'filled',
}) => {

  const isFilled = variant === 'filled';

  const containerStyle: ViewStyle = {
    ...styles.button,
    backgroundColor: isFilled ? Colors.primary : 'transparent',
    borderWidth: isFilled ? 0 : 1,
    borderColor: Colors.primary,
  };

  const textStyle: TextStyle = {
    ...styles.buttonText,
    color: isFilled ? Colors.white : Colors.primary,
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={isFilled ? Colors.white : Colors.primary} size="small" />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.bold.fontFamily,
    fontWeight: Fonts.bold.fontWeight,
  },
});

export default Button;
