import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';
import { MasjidProfile } from '../../../zustand/usePengurus';

type Props = {
  data: MasjidProfile;
};

const CMPInfoMasjid = ({ data }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.namaMasjid}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="phone" size={16} color="#000" />
        <Text style={styles.text}>{data.nomorPengurus}</Text>
      </View>

      <Text style={styles.address}>{data.alamatMasjid}</Text>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text style={styles.text}>{data.kotaMasjid}</Text>
        <Text style={styles.text}>{data.kodePos}</Text>
      </View>

      <Text style={styles.text}>{data.provinsiMasjid}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: Fonts.bold.fontFamily,
    fontSize: 18,
    color: Colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
    marginLeft: 6,
    fontFamily: Fonts.regular.fontFamily,
  },
  address: {
    fontSize: 14,
    marginVertical: 8,
    fontFamily: Fonts.regular.fontFamily,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CMPInfoMasjid;
