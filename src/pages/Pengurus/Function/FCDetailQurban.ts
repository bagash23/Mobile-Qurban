import { RouteProp, useRoute } from '@react-navigation/native';
import { APIPengurus } from '../../../api/APIPengurus';
import useNavigation from '../../../routers/useNavigation';
import { QurbanProfile } from '../../../zustand/usePengurus';

export const useFCDetailQurban = () => {
  const {back, navigate} = useNavigation();
  const route = useRoute<RouteProp<Record<string, QurbanProfile>>>();
  const {FetchDeletQurbanID} = APIPengurus();
  // @ts-ignore
  const {item} = route?.params;
  return {back, item, navigate, FetchDeletQurbanID};
};
