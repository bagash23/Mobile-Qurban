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
import { QurbanImageProfile } from '../../../zustand/usePengurus';
import { useFCDetailQurban } from '../Function/FCDetailQurban';
import { StyleHome } from '../Styles/STYLEHome';

const SCRNDetailQurban = () => {
  const {
    back,
    item,
    navigate,
    FetchDeletQurbanID,
    CMPModalDelete,
    openDelete,
    setOpenDelete,
    profile,
  } = useFCDetailQurban();
  return (
    <SafeAreaView style={StyleHome.container}>
      <Header title="Detail Qurban" onPress={back} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageGallery}>
          {item.images.length > 0 && (
            <Image
              src={`${BASE_API_URL}${item.images[0].FileUrl || item.images[0].FileURL}`}
              // eslint-disable-next-line react-native/no-inline-styles
              style={[styles.mainImage, {width: item?.images?.length > 1 ? 200 : '100%'}]}
              resizeMode="cover"
            />
          )}
          <View style={styles.sideImages}>
            {item.images
              .slice(1, 3)
              .map((img: QurbanImageProfile, index: number) => (
                <Image
                  key={index}
                  // @ts-ignore
                  src={`${BASE_API_URL}${img?.FileUrl || img?.FileURL}`}
                  style={[
                    styles.sideImage,
                    index === 2 && styles.fullWidthImage,
                  ]}
                  resizeMode="cover"
                />
              ))}
          </View>
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.topRow}>
            <View>
              <Text style={styles.title}>{item.kategoriHewan}</Text>
              <Text style={styles.subtitle}>{item.jumlahHewan} ekor</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>{item?.status}</Text>
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
          {profile?.dataProfile?.role === 'Pengurus' && (
            <View style={styles.section}>
              {item?.status !== 'Distribusi' && (
                <Button
                  isLoading={false}
                  onPress={() => navigate('EditQurbanScreen', {item: item})}
                  title="Edit Data Qurban"
                />
              )}
              <Gap height={12} />
              <Button
                variant="outlined"
                isLoading={false}
                onPress={() => setOpenDelete(true)}
                title="Hapus Data Qurban"
              />
            </View>
          )}
        </View>
      </ScrollView>
      <CMPModalDelete
        open={openDelete}
        setOpen={setOpenDelete}
        handleClick={() => FetchDeletQurbanID(item?.images?.[0]?.QurbanID)}
        value={item?.namaPemberi}
      />
    </SafeAreaView>
  );
};

export default SCRNDetailQurban;

const styles = StyleSheet.create({
  imageGallery: {
    flexDirection: 'row',
    padding: 16,
    gap: 10,
  },
  mainImage: {
    height: 250,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  sideImages: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sideImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  fullWidthImage: {
    height: 90,
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
