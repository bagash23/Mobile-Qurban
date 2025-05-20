/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

interface IProps {
  name: string;
  onPress: () => void;
}

const CMPCardProfile = ({name, onPress}: IProps) => {
  const getInitials = (names: string) => {
    return names
      .split(' ')
      .map(word => word[0]?.toUpperCase())
      .join('');
  };
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 12}} >
        <View style={styles.viewSplitName}>
          <Text style={styles.textSplit}>{getInitials(name)}</Text>
        </View>
        <View>
          <Text style={styles.textLabel}>Assalamualaikum</Text>
          <Text style={styles.textDesk}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textSeeAkun}>Lihat Akun</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: Colors.white,
  },
  textLabel: {
    fontFamily: Fonts.regular.fontFamily,
    fontSize: 12,
    color: Colors.black,
  },
  textDesk: {
    fontFamily: Fonts.bold.fontFamily,
    fontSize: 16,
    color: Colors.black,
  },
  viewSplitName: {
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  textSplit: {
    fontFamily: Fonts.medium.fontFamily,
    fontSize: 16,
    color: Colors.white,
  },
  textSeeAkun: {
    fontFamily: Fonts.medium.fontFamily,
    fontSize: 12,
    color: Colors.primary,
  },
});

export default CMPCardProfile;
