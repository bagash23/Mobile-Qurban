/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useNavigation from '../../../routers/useNavigation';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';
import { MasjidProfile } from '../../../zustand/usePengurus';

type Props = {
  data: MasjidProfile[];
};

const CMPListMasjid: React.FC<Props> = ({data}) => {
  const {navigate} = useNavigation();
  const renderItem: ListRenderItem<MasjidProfile> = ({item: masjid}) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.company}>Masjid</Text>
          <Text style={styles.position}>{masjid.namaMasjid}</Text>
          <Text
            style={
              styles.location
            }>{`${masjid.kotaMasjid}, ${masjid.provinsiMasjid} - ${masjid.kodePos}`}</Text>
        </View>
        <TouchableOpacity
          style={[styles.tags, {gap: 12}]}
          onPress={() => navigate('DetailIbadahScreen', {item: masjid})}>
          <Text style={styles.textSee}>Lihat Detail</Text>
          <AntDesign name="arrowright" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <View style={styles.tags}>
        <Text style={[styles.tag, styles.activeTag]}>Alamat</Text>
        <Text style={styles.tag}>No. HP: {masjid.nomorPengurus}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{masjid.alamatMasjid}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{paddingVertical: 8}}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  headerText: {
    flex: 1,
  },
  company: {
    fontSize: 14,
    color: '#666',
    fontFamily: Fonts.medium.fontFamily,
  },
  position: {
    fontSize: 16,
    fontFamily: Fonts.bold.fontFamily,
    color: '#000',
  },
  location: {
    fontSize: 13,
    color: '#999',
    fontFamily: Fonts.regular.fontFamily,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  tag: {
    fontSize: 12,
    color: '#333',
    backgroundColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 4,
    fontFamily: Fonts.regular.fontFamily,
  },
  activeTag: {
    backgroundColor: Colors.primary,
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#444',
    fontFamily: Fonts.regular.fontFamily,
  },
  textSee: {
    fontSize: 12,
    fontFamily: Fonts.bold.fontFamily,
    color: Colors.primary,
  },
});

export default CMPListMasjid;
