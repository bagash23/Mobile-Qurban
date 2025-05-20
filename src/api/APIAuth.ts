import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import EncryptedStorage from 'react-native-encrypted-storage';
import useNavigation from '../routers/useNavigation';
import { createInstance } from '../utils/apiRequest';
import { useAuth } from '../zustand/useAuth';

export const APIAuth = () => {
  const {login, daftar, profile} = useAuth();
  const {replace} = useNavigation();

  const FetchLogin = async (email: string, password: string) => {
    login.setLoadingLogin(true);
    try {
      const data = {
        email,
        password,
      };
      const response = await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: false,
        path: 'login',
        body: data,
        method: 'POST',
      });
      if (response.data) {
        login.setLoadingLogin(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Login Berhasil',
          textBody: 'Login anda telah berhasil!',
        });
        EncryptedStorage.setItem('token', response?.data);
        replace('GetStartedScreen');
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Login Gagal',
        textBody: 'Silahkan cek kembali data anda!',
      });
      login.setLoadingLogin(false);
    }
  };

  const FetchRegister = async (
    username: string,
    email: string,
    type: string,
    password: string,
  ) => {
    daftar.setLoadingDaftar(true);
    try {
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: false,
        path: 'email_checkers',
        body: {
          email: email,
        },
        method: 'POST',
      }).then(async res => {
        if (res?.data?.is_available) {
          daftar.setLoadingDaftar(false);
          const response = await createInstance({
            service: 'api',
            version: 'v1',
            isPrivate: false,
            path: 'user',
            body: {
              username,
              email,
              role: type,
              password,
            },
            method: 'POST',
          });
          if (response.data) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Daftar Berhasil',
              textBody: 'Data anda berhasil terdaftar!',
            });
            EncryptedStorage.setItem('token', response?.data?.token);
            if (type === 'Pengurus') {
              replace('RegisterMasjidScreen');
            } else {
              replace('GetStartedScreen');
            }
          }
        } else {
          daftar.setLoadingDaftar(false);
          Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Daftar Gagal',
            textBody: 'Email sudah digunakan!',
          });
        }
      });
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Daftar Gagal',
        textBody: 'Silahkan cek kembali data anda!',
      });
      daftar.setLoadingDaftar(false);
    }
  };

  const FetchProfile = async () => {
    profile.setLoadingProfile(true);
    try {
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: true,
        path: 'me',
        method: 'GET',
      }).then((res) => {
        profile.setLoadingProfile(false);
        profile.setDataProfile(res?.data);
      });
    } catch (error) {
      profile.setLoadingProfile(false);
    }
  };

  return {
    FetchLogin,
    FetchRegister,
    FetchProfile,
  };
};
