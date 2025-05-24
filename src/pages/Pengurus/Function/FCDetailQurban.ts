import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { useAuth } from '../../../zustand/useAuth';
import { QurbanProfile } from '../../../zustand/usePengurus';
import CMPModal from '../Components/CMPModal';

export const useFCDetailQurban = () => {
  const {back, navigate} = useNavigation();
  const {profile} = useAuth();
  const route = useRoute<RouteProp<Record<string, QurbanProfile>>>();
  const {FetchDeletQurbanID} = APIPengurus();
  const {CMPModalDelete} = CMPModal();
  const [openDelete, setOpenDelete] = useState(false);
  // @ts-ignore
  const {item} = route?.params;
  return {
    back,
    item,
    navigate,
    FetchDeletQurbanID,
    CMPModalDelete,
    openDelete,
    setOpenDelete,
    profile,
  };
};
