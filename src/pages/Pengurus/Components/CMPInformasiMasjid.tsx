import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

interface IProps {
  name: string;
  alamat: string;
  kota: string;
  kode: string;
  provinsi: string;
}

const CMPInformasiMasjid = ({ name, alamat, kota, kode, provinsi }: IProps) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.kotaText}>{kota}</Text>
      </View>

      {/* Main */}
      <View style={styles.content}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{kode}</Text>
            <Text style={styles.infoLabel}>Kode</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{provinsi}</Text>
            <Text style={styles.infoLabel}>Provinsi</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Alamat: {alamat}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E4D2B',
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    marginTop: 12,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    backgroundColor: Colors.white,
  },
  kotaText: {
    fontSize: 14,
    color: '#555',
    fontFamily: Fonts.regular.fontFamily,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  nameText: {
    fontSize: 20,
    fontFamily: Fonts.bold.fontFamily,
    color: Colors.primary,
    flex: 1,
    paddingRight: 10,
  },
  infoBoxContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  infoBox: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 12,
    fontFamily: Fonts.medium.fontFamily,
    color: '#fff',
  },
  infoLabel: {
    fontSize: 12,
    fontFamily: Fonts.regular.fontFamily,
    color: '#fff',
  },
  footer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  footerText: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.regular.fontFamily,
  },
});

export default CMPInformasiMasjid;
