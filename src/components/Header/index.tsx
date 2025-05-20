import React, { ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../utils/colors';
import Fonts from '../../utils/fonts';

interface HeaderProps {
  title: string;
  customStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  leftIcon?: boolean;
  children?: undefined | ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  customStyle,
  onPress = () => {},
  leftIcon = true,
  children = undefined,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = {
    paddingTop: insets?.top + 16,
  };
  return (
    <View style={[HeaderStyle.headerBar, safeAreaStyle, customStyle]}>
      <View style={[HeaderStyle.rowStartCenter, HeaderStyle.gapSmall]}>
        {leftIcon && (
          <TouchableOpacity
            onPress={onPress}
            style={[HeaderStyle.paddingMini]}>
                <AntDesign name="left" color={Colors.black} size={12} />
            </TouchableOpacity>
        )}
        {title && (
          <View onTouchEnd={onPress}>
            <Text style={HeaderStyle.text} >{title}</Text>
          </View>
        )}

        {children && children}
      </View>
    </View>
  );
};

export default Header;

export const HeaderStyle = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
    gap: 8,
    zIndex: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: Colors.black,
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 2,
    backgroundColor: Colors.white,
  },
  imageBack: {
    height: 16,
    width: 16,
    lineHeight: 30,
  },
  rowStartCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gapSmall: {
    gap: 8,
  },
  paddingMini: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  text: {
    color: Colors.black,
    fontFamily: Fonts.medium.fontFamily,
    fontSize: 16,
  },
});
