import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

export const StyleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  textLabel: {fontFamily: Fonts.bold.fontFamily, fontSize: 16},
  contentInfoMasjid: {paddingHorizontal: 16, paddingVertical: 12},
});
