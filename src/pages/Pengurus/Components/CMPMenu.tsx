import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

const width = Dimensions.get('window').width;
interface IProps {
  title?: string;
  deskripsi?: string;
  icon?: any;
  onPress?: () => void;
  color?: string;
}

const CMPMenu = ({title, icon, onPress, deskripsi, color}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{deskripsi}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - 40) / 2,
    borderRadius: 12,
    marginBottom: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EAEBEB',
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.bold.fontFamily,
    color: Colors.white,
  },
  desc: {
    fontSize: 12,
    fontFamily: Fonts.regular.fontFamily,
    color: Colors.white,
  },
});

export default CMPMenu;
