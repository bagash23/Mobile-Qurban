import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImagePickerResponse, launchCamera } from 'react-native-image-picker';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { QurbanProfile, usePengurus } from '../../../zustand/usePengurus';
import CMPModal from '../Components/CMPModal';

type TDaftarForm = {
  namaPemberi: string;
  kategoriHewan: string;
  jumlahHewan: string;
  status: string;
  tanggalPendaftaran: string;
  tanggalPenyembelihan: string;
};

export const useFCEditQurban = () => {
  const route = useRoute<RouteProp<Record<string, QurbanProfile>>>();
  const {back} = useNavigation();
  const {CMPModalTypeHewan, CMPModalStatus} = CMPModal();
  const {FetchUpdateQurban} = APIPengurus();
  const {qurban} = usePengurus();
  const [imageResponse, setImageResponse] =
    useState<ImagePickerResponse | null>(null);
  // @ts-ignore
  const {item} = route?.params;
  const [openHewan, setOpenHewan] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openPendaftaran, setOpenPendaftaran] = useState(false);
  const [openPenyembelihan, setOpenPenyembelihan] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const {control, handleSubmit, watch, setValue} = useForm<TDaftarForm>({
    mode: 'all',
    defaultValues: {
      namaPemberi: item?.namaPemberi ?? '',
      kategoriHewan: item?.kategoriHewan ?? '',
      jumlahHewan: item?.jumlahHewan ?? '',
      status: item?.status ?? '',
      tanggalPendaftaran: item?.tanggalPendaftaran ?? '',
      tanggalPenyembelihan: item?.tanggalPenyembelihan ?? '',
    },
  });

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

  const handleLaunchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        quality: 0.8,
      },
      response => {
        if (!response.didCancel && !response.errorCode) {
          setImageResponse(response);
        }
      },
    );
  };

  const statusData = watch('status');

  const handleUpdate = () => {
    FetchUpdateQurban(
      watch('namaPemberi'),
      watch('kategoriHewan'),
      watch('jumlahHewan'),
      watch('status'),
      watch('tanggalPendaftaran'),
      watch('tanggalPenyembelihan'),
      imageResponse?.assets?.[0],
      item?.images?.[0]?.QurbanID ?? '',
      item?.status ?? ''
    );
  };

  useEffect(() => {
    if (statusData && statusData !== item?.status) {
      setShowImageUpload(true);
    } else {
      setShowImageUpload(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusData]);

  return {
    back,
    control,
    handleSubmit,
    watch,
    setValue,
    item,
    openHewan,
    openStatus,
    openPendaftaran,
    openPenyembelihan,
    handleModal,
    handleCloseModal,
    CMPModalTypeHewan,
    CMPModalStatus,
    handleLaunchCamera,
    showImageUpload,
    imageResponse,
    handleUpdate,
    qurban,
  };
};
