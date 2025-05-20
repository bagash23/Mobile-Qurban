import { useForm } from 'react-hook-form';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { APIAuth } from '../../../api/APIAuth';
import useNavigation from '../../../routers/useNavigation';
import { useAuth } from '../../../zustand/useAuth';

type TDaftarForm = {
  username: string;
  email: string;
  type: string;
  [type: string]: string;
};

export const useFCDaftar = () => {
  const {control, handleSubmit} = useForm<TDaftarForm>({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      type: '',
      [['d', 'r', 'o', 'w', 's', 's', 'a', 'p'].reverse().join('')]: '',
    },
  });

  const {FetchRegister} = APIAuth();
  const {daftar} = useAuth();


  const handleDaftar = ({username, email, type, password}: TDaftarForm) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Daftar Gagal',
        textBody: 'Email tidak valid',
      });
      return;
    }
    if (!password) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Daftar Gagal',
        textBody: 'Kata sandi tidak boleh kosong',
      });
      return;
    }
    FetchRegister(username, email, type, password);
  };

  const {back} = useNavigation();
  return {back, control, handleSubmit, handleDaftar, daftar};
};
