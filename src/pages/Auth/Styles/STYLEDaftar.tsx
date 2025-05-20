import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

export const StylesDaftar = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentView: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  textDaftar: {
    fontFamily: Fonts.medium.fontFamily,
    fontSize: 20,
    color: Colors.black,
  },
});
