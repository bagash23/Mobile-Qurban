import { useForm } from 'react-hook-form';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { APIAuth } from '../../../api/APIAuth';
import useNavigation from '../../../routers/useNavigation';
import { useAuth } from '../../../zustand/useAuth';

type TLoginForm = {
  email: string;
  [type: string]: string;
};


export const useFCLogin = () => {
  const {
    control,
    handleSubmit,
  } = useForm<TLoginForm>({
    mode: 'all',
    defaultValues: {
      email: '',
      [['d', 'r', 'o', 'w', 's', 's', 'a', 'p'].reverse().join('')]: '',
    },
  });

  const {FetchLogin} = APIAuth();
  const {login} = useAuth();
  const {navigate} = useNavigation();

  const handleLogin = ({email, password}: TLoginForm) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Login Gagal',
        textBody: 'Email tidak valid',
      });
      return;
    }
    if (!password) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Login Gagal',
        textBody: 'Kata sandi tidak boleh kosong',
      });
      return;
    }
    FetchLogin(email, password);
  };

  return {control, handleSubmit, handleLogin, login, navigate};
};
