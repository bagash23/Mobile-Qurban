import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

export const StylesSplash = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPrimary: {
        fontFamily: Fonts.medium.fontFamily,
        fontSize: 20,
        color: Colors.white,
        fontWeight: Fonts.medium.fontWeight,
        marginBottom: 12,
    },
});
