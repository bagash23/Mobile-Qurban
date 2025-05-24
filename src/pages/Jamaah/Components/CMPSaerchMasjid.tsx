import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Pastikan sudah install: react-native-vector-icons
import Fonts from '../../../utils/fonts';

type IProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const CMPSearchMasjid: React.FC<IProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pencarian masjid atau musholla yang ingin anda lihat!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cari musholla dan masjid"
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={onChangeText}
        />
        <View style={styles.iconContainer}>
          <Icon name="search" size={20} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.medium.fontFamily,
    marginBottom: 12,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconContainer: {
    paddingLeft: 8,
  },
});

export default CMPSearchMasjid;
