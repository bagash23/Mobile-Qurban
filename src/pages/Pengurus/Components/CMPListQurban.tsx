// @ts-ignore
import { BASE_API_URL } from '@env';
import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';
import { QurbanProfile } from '../../../zustand/usePengurus';

type Props = {
  data: QurbanProfile[];
  year: string;
  navigate: any;
};

const CMPListQurban = ({
  data,
  year = moment().format('YYYY'),
  navigate,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Qurban - {year}</Text>

      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigate('DetailQurbanScreen', { item })}
          style={styles.itemContainer}>
          <View style={styles.left}>
            <Image
            // @ts-ignore
              src={`${BASE_API_URL}${item.images[0].FileUrl || item.images[0].FileURL}`}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.category}>{item.kategoriHewan}</Text>
              <Text style={styles.name}>{item.namaPemberi}</Text>
              <Text style={styles.date}>
                {item.tanggalPendaftaran} → {item.tanggalPenyembelihan}
              </Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={[styles.amount, { color: Colors.primary }]}>
              {item.jumlahHewan} ekor
            </Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.bold.fontFamily,
    marginBottom: 12,
    color: Colors.black,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#ccc',
  },
  info: {
    flexShrink: 1,
  },
  category: {
    fontSize: 14,
    fontFamily: Fonts.bold.fontFamily,
    color: Colors.black,
  },
  name: {
    fontSize: 12,
    fontFamily: Fonts.medium.fontFamily,
    color: '#666',
  },
  date: {
    fontSize: 12,
    fontFamily: Fonts.regular.fontFamily,
    color: '#999',
  },
  right: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 14,
    fontFamily: Fonts.bold.fontFamily,
  },
  status: {
    fontSize: 12,
    fontFamily: Fonts.medium.fontFamily,
    color: '#555',
  },
});

export default CMPListQurban;
