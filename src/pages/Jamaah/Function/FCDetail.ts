/* eslint-disable react-hooks/exhaustive-deps */
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import {
  MasjidProfile,
  QurbanProfile,
  usePengurus,
} from '../../../zustand/usePengurus';

interface QurbanChartDataItem {
  name: string;
  value: number;
  color: string;
}

interface FilteredQurbanResult {
  chartData: QurbanChartDataItem[];
  listData: QurbanProfile[];
}

export const useFCDetail = () => {
  const {back, navigate} = useNavigation();
  const {qurban} = usePengurus();
  const {FetchGetDetailMasjid} = APIPengurus();
  const route = useRoute<RouteProp<Record<string, MasjidProfile>>>();
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [openModalYear, setOpenModalYear] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();
  const recentYears = useMemo(
    () => Array.from({length: 5}, (_, i) => currentYear - i),
    [currentYear],
  );
  // @ts-ignore
  const {item} = route.params;

  // Fungsi filter data Qurban berdasar tahun
  const filterQurbanByYear = (
    data: QurbanProfile[] = [],
    year: number,
  ): QurbanProfile[] => {
    if (!Array.isArray(data)) {
      return [];
    }
    return data.filter(item => {
      const parts = item.tanggalPenyembelihan.split('/');
      const itemYear = parseInt(parts[2], 10);
      return itemYear === year;
    });
  };

  // Fungsi untuk dapatkan chartData dan listData sekaligus
  const getFilteredQurbanData = (
    data: QurbanProfile[] = [],
    year: number,
  ): FilteredQurbanResult => {
    const listData = filterQurbanByYear(data, year);

    const chartData = listData.map(item => ({
      name: item.kategoriHewan,
      value: parseInt(item.jumlahHewan, 10),
      color:
        item.kategoriHewan === 'Sapi'
          ? '#537D5D'
          : item.kategoriHewan === 'Kambing'
          ? '#73946B'
          : '#9EBC8A',
    }));

    return {chartData, listData};
  };

  // Memoized data untuk chart dan list berdasarkan selectedYear
  const {chartData: qurbanChartData, listData: qurbanListData} = useMemo(() => {
    const data = qurban?.dataQurban ?? [];
    // @ts-ignore
    return getFilteredQurbanData(data, selectedYear);
  }, [qurban?.dataQurban, selectedYear]);

  // Handler saat filter tahun diganti
  const handleFilterYear = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    FetchGetDetailMasjid(item?.namaMasjid);
  }, []);

  return {
    back,
    item,
    qurban,
    navigate,
    qurbanChartData,
    qurbanListData,
    filterQurbanByYear,
    selectedYear,
    recentYears,
    handleFilterYear,
    openModalYear,
    setOpenModalYear,
  };
};
