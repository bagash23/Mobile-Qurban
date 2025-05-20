import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

export const StylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerWrapper: {
    backgroundColor: Colors.primary,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  leftImage: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{translateY: -10}],
    width: 20,
    height: 20,
  },
  contentView: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  textLogin: {
    fontFamily: Fonts.medium.fontFamily,
    fontSize: 20,
    color: Colors.black,
  },
  textLoginDesc: {
    fontFamily: Fonts.regular.fontFamily,
    fontWeight: Fonts.regular.fontWeight,
    fontSize: 16,
    marginBottom: 12,
    color: Colors.black,
  },
  contentForgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  textForgotPassword: {
    fontFamily: Fonts.medium.fontFamily,
    fontWeight: Fonts.medium.fontWeight,
    fontSize: 16,
    color: Colors.primary,
  },
});
