import { useForm } from 'react-hook-form';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { usePengurus } from '../../../zustand/usePengurus';

type TDaftarForm = {
  namaMasjid: string;
  nomorPengurus: string;
  alamatMasjid: string;
  kotaMasjid: string;
  kodePos: string;
  provinsiMasjid: string;
};

export const useFCRegisMasjid = () => {
  const {control, handleSubmit} = useForm<TDaftarForm>({
    mode: 'all',
    defaultValues: {
      namaMasjid: '',
      nomorPengurus: '',
      alamatMasjid: '',
      kotaMasjid: '',
      kodePos: '',
      provinsiMasjid: '',
    },
  });
  const {FetchRegisMasjid} = APIPengurus();
  const {daftarMasjid} = usePengurus();
  const {back} = useNavigation();

  const handleDaftar = ({
    namaMasjid,
    nomorPengurus,
    alamatMasjid,
    kotaMasjid,
    kodePos,
    provinsiMasjid,
  }: TDaftarForm) => {
    FetchRegisMasjid(
      namaMasjid,
      nomorPengurus,
      alamatMasjid,
      kotaMasjid,
      kodePos,
      provinsiMasjid,
    );
  };

  return {
    control,
    handleSubmit,
    handleDaftar,
    back,
    daftarMasjid,
  };
};
