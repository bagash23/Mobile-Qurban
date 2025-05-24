import { Alert } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import useNavigation from '../../../routers/useNavigation';
import { useStarted } from '../../../zustand/persist/useStarted';
import { useAuth } from '../../../zustand/useAuth';

export const useFCProfile = () => {
  const {profile} = useAuth();
  const {back, replace} = useNavigation();
  const {setStarting, setRole} = useStarted();
  const getInitials = (names: string) => {
    return names
      .split(' ')
      .map(word => word[0]?.toUpperCase())
      .join('');
  };

  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi Logout',
      'Apakah Anda yakin ingin keluar?',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => {
          EncryptedStorage.removeItem('token');
          setStarting(false);
          setRole('');
          replace('LoginScreen');
        }},
      ]
    );
  };

  return {back, profile, getInitials, handleLogout};
};
