import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../utils/colors';
import Fonts from '../../utils/fonts';

interface Props {
    title: string
    color?: string
}

const LogoText = ({title, color = Colors.white}: Props) => {
  return <Text style={[styles.text, {color: color}]} >{title}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.medium.fontFamily,
        fontSize: 20,
        fontWeight: Fonts.medium.fontWeight,
        marginBottom: 12,
    },
});
export default LogoText;
