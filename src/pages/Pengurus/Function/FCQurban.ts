import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { launchCamera } from 'react-native-image-picker';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { usePengurus } from '../../../zustand/usePengurus';
import CMPModal from '../Components/CMPModal';

type TDaftarForm = {
  namaPemberi: string;
  kategoriHewan: string;
  jumlahHewan: string;
  status: string;
  tanggalPendaftaran: string;
  tanggalPenyembelihan: string;
};

export const useFCQurban = () => {
  const {FetchRegisQurban} = APIPengurus();
  const {qurban} = usePengurus();
  const {control, handleSubmit, watch, setValue} = useForm<TDaftarForm>({
    mode: 'all',
    defaultValues: {
      namaPemberi: '',
      kategoriHewan: '',
      jumlahHewan: '',
      status: '',
      tanggalPendaftaran: '',
      tanggalPenyembelihan: '',
    },
  });
  // modal
  const {CMPModalTypeHewan, CMPModalStatus} = CMPModal();
  const {back} = useNavigation();
  const [openHewan, setOpenHewan] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openPendaftaran, setOpenPendaftaran] = useState(false);
  const [openPenyembelihan, setOpenPenyembelihan] = useState(false);
  const [image, setImage] = useState(null);
  const [fileNameImage, setFileNameImage] = useState('');
  const [fileImage, setFileImage] = useState(null);

  const handleModal = (key: string) => {
    switch (key) {
      case 'Hewan':
        setOpenHewan(true);
        break;
      case 'Status':
        setOpenStatus(true);
        break;
      case 'Pendaftaran':
        setOpenPendaftaran(true);
        break;
      case 'Penyembelihan':
        setOpenPenyembelihan(true);
        break;
    }
  };

  const handleCloseModal = (key: string) => {
    switch (key) {
      case 'Hewan':
        setOpenHewan(false);
        break;
      case 'Status':
        setOpenStatus(false);
        break;
      case 'Pendaftaran':
        setOpenPendaftaran(false);
        break;
      case 'Penyembelihan':
        setOpenPenyembelihan(false);
        break;
    }
  };

  const handleImagePicker = () => {
    // Launch the image picker
    launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
          // @ts-ignore
          setFileImage(response?.assets[0]);
          // @ts-ignore
          setImage(response.assets[0].uri);
          // @ts-ignore
          setFileNameImage(response.assets[0].fileName);
        }
      },
    );
  };

  const handleBuatQurban = ({
    namaPemberi,
    kategoriHewan,
    jumlahHewan,
    status,
    tanggalPendaftaran,
    tanggalPenyembelihan,
  }: TDaftarForm) => {
    if (
      !namaPemberi ||
      !kategoriHewan ||
      !jumlahHewan ||
      !status ||
      !tanggalPendaftaran ||
      !tanggalPenyembelihan ||
      !fileImage
    ) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Qurban Gagal',
        textBody: 'Semua field wajib diisi, termasuk gambar.',
      });
      return;
    }
    FetchRegisQurban(
      namaPemberi,
      kategoriHewan,
      jumlahHewan,
      status,
      tanggalPendaftaran,
      tanggalPenyembelihan,
      fileImage,
    );
  };

  return {
    back,
    control,
    handleSubmit,
    openHewan,
    handleModal,
    handleCloseModal,
    CMPModalTypeHewan,
    watch,
    setValue,
    CMPModalStatus,
    openStatus,
    openPendaftaran,
    openPenyembelihan,
    handleImagePicker,
    image,
    fileNameImage,
    handleBuatQurban,
    qurban,
  };
};
