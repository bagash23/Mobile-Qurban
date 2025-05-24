import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components';
import CMPBarChart from '../../Pengurus/Components/CMPBarChart';
import CMPListQurban from '../../Pengurus/Components/CMPListQurban';
import CMPYearPicker from '../../Pengurus/Components/CMPYearPicker';
import { StyleHome } from '../../Pengurus/Styles/STYLEHome';
import CMPInfoMasjid from '../Components/CMPInfoMasjid';
import { useFCDetail } from '../Function/FCDetail';

const SCRNDetail = () => {
  const {
    back,
    item,
    navigate,
    qurbanChartData,
    qurbanListData,
    selectedYear,
    recentYears,
    handleFilterYear,
    openModalYear,
    setOpenModalYear,
  } = useFCDetail();
  return (
    <SafeAreaView style={StyleHome.container}>
      <Header title={`Detail ${item?.namaMasjid}`} onPress={back} />
      <ScrollView showsVerticalScrollIndicator={false} >
        <CMPInfoMasjid data={item} />
        <CMPBarChart
          data={qurbanChartData}
          year={String(selectedYear)}
          onSelectYear={() => setOpenModalYear(true)}
        />

        {qurbanListData && (
          <CMPListQurban
            navigate={navigate}
            data={qurbanListData}
            year={String(selectedYear)}
          />
        )}
      </ScrollView>
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

export default SCRNDetail;
