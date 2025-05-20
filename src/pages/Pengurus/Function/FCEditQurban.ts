import { RouteProp, useRoute } from '@react-navigation/native';
import { QurbanProfile } from '../../../zustand/usePengurus';

export const useFCEditQurban = () => {
    const route = useRoute<RouteProp<Record<string, QurbanProfile>>>();
    // @ts-ignore
    const {item} = route?.params;
    console.log(item);
    return {};
};
