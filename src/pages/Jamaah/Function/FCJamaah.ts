import { useEffect, useRef, useState } from 'react';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { useAuth } from '../../../zustand/useAuth';
import { MasjidProfile } from '../../../zustand/usePengurus';

export const useFCJamaah = () => {
  const {profile} = useAuth();
  const {navigate} = useNavigation();
  const {FetchGetSearchMasjid} = APIPengurus();
  const [textSearch, setTextSearch] = useState('');
  const [filteredMasjid, setFilteredMasjid] = useState<MasjidProfile[]>([]);

  const lastSearchRef = useRef('');

  useEffect(() => {
    const fetchData = async () => {
      const trimmed = textSearch.trim();
      if (trimmed.length === 0) {
        setFilteredMasjid([]);
        return;
      }

      // Cegah fetch jika input belum berubah
      if (lastSearchRef.current === trimmed) {return;}
      lastSearchRef.current = trimmed;

      try {
        const res = await FetchGetSearchMasjid(trimmed);
        if (res) {setFilteredMasjid([res]);}
        else {setFilteredMasjid([]);}
      } catch (error) {
        console.log('Error saat fetch masjid:', error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  return {
    profile,
    textSearch,
    setTextSearch,
    filteredMasjid,
    navigate,
  };
};
