/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { useAuth } from '../../../zustand/useAuth';
import { QurbanProfile, usePengurus } from '../../../zustand/usePengurus';

interface QurbanChartDataItem {
  name: string;
  value: number;
  color: string;
}

interface FilteredQurbanResult {
  chartData: QurbanChartDataItem[];
  listData: QurbanProfile[];
}

export const useFCPengurus = () => {
  const { profile } = useAuth();
  const { masjid, qurban } = usePengurus();
  const { FetchGetMasjid, FetchGetQurban } = APIPengurus();
  const { navigate } = useNavigation();

  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [openModalYear, setOpenModalYear] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();
  const recentYears = useMemo(() => Array.from({ length: 5 }, (_, i) => currentYear - i), [currentYear]);

  // Fungsi filter data Qurban berdasar tahun
  const filterQurbanByYear = (data: QurbanProfile[] = [], year: number): QurbanProfile[] => {
  if (!Array.isArray(data)) {return [];}
  return data.filter(item => {
    const parts = item.tanggalPenyembelihan.split('/');
    const itemYear = parseInt(parts[2], 10);
    return itemYear === year;
  });
};

  // Fungsi untuk dapatkan chartData dan listData sekaligus
  const getFilteredQurbanData = (data: QurbanProfile[] = [], year: number): FilteredQurbanResult => {
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

    return { chartData, listData };
  };

  // Memoized data untuk chart dan list berdasarkan selectedYear
  const { chartData: qurbanChartData, listData: qurbanListData } = useMemo(() => {
    const data = qurban?.dataQurban ?? [];
    // @ts-ignore
    return getFilteredQurbanData(data, selectedYear);
  }, [qurban?.dataQurban, selectedYear]);

  // Handler saat filter tahun diganti
  const handleFilterYear = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    FetchGetMasjid();
    FetchGetQurban();
  }, []);

  return {
    profile,
    masjid,
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
