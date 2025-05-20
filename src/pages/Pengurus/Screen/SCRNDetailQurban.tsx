// @ts-ignore
import { BASE_API_URL } from '@env';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Gap, Header } from '../../../components';
import Fonts from '../../../utils/fonts';
import { useFCDetailQurban } from '../Function/FCDetailQurban';
import { StyleHome } from '../Styles/STYLEHome';

const SCRNDetailQurban = () => {
  const {back, item, navigate, FetchDeletQurbanID} = useFCDetailQurban();


  return (
    <SafeAreaView style={StyleHome.container}>
      <Header title="Detail Qurban" onPress={back} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrapper}>
          <Image src={`${BASE_API_URL}${item.images[0].FileUrl}`}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.topRow}>
            <View>
              <Text style={styles.title}>{item.kategoriHewan}</Text>
              <Text style={styles.subtitle}>{item.jumlahHewan} ekor</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Terdaftar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>
              Penyembelihan: {item.tanggalPenyembelihan}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nama Pemberi:</Text>
            <Text style={styles.sectionContent}>{item.namaPemberi}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tanggal Pendaftaran:</Text>
            <Text style={styles.sectionContent}>{item.tanggalPendaftaran}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Status:</Text>
            <Text style={styles.sectionContent}>{item.status}</Text>
          </View>
          <View style={styles.section}>
            <Button
              isLoading={false}
              onPress={() => navigate('')}
              title="Edit Data Qurban"
            />
            <Gap height={12} />
            <Button
              variant="outlined"
              isLoading={false}
              onPress={() => FetchDeletQurbanID(item?.images?.[0]?.QurbanID)}
              title="Hapus Data Qurban"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SCRNDetailQurban;

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 20,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.bold.fontFamily,
    fontSize: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#FFA726',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontFamily: Fonts.bold.fontFamily,
  },
  priceRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#43A047',
    fontSize: 16,
    fontFamily: Fonts.bold.fontFamily,
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#333',
    fontFamily: Fonts.bold.fontFamily,
  },
  sectionContent: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
    fontFamily: Fonts.regular.fontFamily,
  },
});
