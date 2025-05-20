import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

export const StylesGetStarted = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textLabel: {
    fontFamily: Fonts.bold.fontFamily,
    fontSize: 20,
    color: Colors.black,
    textAlign: 'center',
  },
  textDesk: {
    fontFamily: Fonts.regular.fontFamily,
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
});
