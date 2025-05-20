import { Text } from '@react-navigation/elements';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CMPBarChart from '../Components/CMPBarChart';
import CMPCardProfile from '../Components/CMPCardProfile';
import CMPInformasiMasjid from '../Components/CMPInformasiMasjid';
import CMPListQurban from '../Components/CMPListQurban';
import CMPMenu from '../Components/CMPMenu';
import CMPNotFound from '../Components/CMPNotFound';
import CMPYearPicker from '../Components/CMPYearPicker';
import { useFCPengurus } from '../Function/FCHomePengurus';
import { StyleHome } from '../Styles/STYLEHome';
import { ListMenu } from '../data';

const SCRNHomePengurus = () => {
  const {
    profile,
    masjid,
    navigate,
    recentYears,
    selectedYear,
    handleFilterYear,
    openModalYear,
    setOpenModalYear,
    qurbanChartData,
    qurbanListData,
  } = useFCPengurus();

  return (
    <SafeAreaView style={StyleHome.container}>
      <CMPCardProfile name={profile.dataProfile.username} onPress={() => {}} />

      {masjid?.dataMasjid?.length > 0 &&
      masjid.dataMasjid.some(obj => Object.values(obj).some(value => value !== '')) ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={StyleHome.contentInfoMasjid}>
            <Text style={StyleHome.textLabel}>Informasi Masjid Anda!</Text>
            {masjid?.dataMasjid?.map((i, idx) => (
              <CMPInformasiMasjid
                key={idx}
                name={i.namaMasjid}
                alamat={i.alamatMasjid}
                kode={i.kodePos}
                kota={i.kotaMasjid}
                provinsi={i.provinsiMasjid}
              />
            ))}
          </View>

          <View style={StyleHome.contentMenu}>
            {ListMenu.map((i, idx) => (
              <CMPMenu
                key={idx}
                title={i.title}
                deskripsi={i.deskripsi}
                color={i.color}
                onPress={() => navigate(i.onPress)}
              />
            ))}
          </View>

          <CMPBarChart
            data={qurbanChartData}
            year={String(selectedYear)}
            onSelectYear={() => setOpenModalYear(true)}
          />
          <CMPListQurban navigate={navigate} data={qurbanListData} year={String(selectedYear)} />
        </ScrollView>
      ) : (
        <CMPNotFound
          title="Data Masjid Tidak Ditemukan"
          deskripsi="Mohon maaf, data masjid yang Anda cari tidak tersedia atau belum terdaftar dalam sistem."
          onPress={() => navigate('RegisterMasjidScreen')}
        />
      )}
      <CMPYearPicker
        visible={openModalYear}
        years={recentYears}
        selectedYear={selectedYear}
        onSelectYear={handleFilterYear}
        onClose={() => setOpenModalYear(false)}
      />
    </SafeAreaView>
  );
};

export default SCRNHomePengurus;
