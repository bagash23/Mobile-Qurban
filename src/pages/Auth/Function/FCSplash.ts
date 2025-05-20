import { useEffect, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { APIAuth } from '../../../api/APIAuth';
import useNavigation, { navigationRef } from '../../../routers/useNavigation';
import { useStarted } from '../../../zustand/persist/useStarted';

export const useFCSplash = () => {
  const {replace} = useNavigation();
  const [loading, setLoading] = useState(true);
  const {starting, role} = useStarted();
  const {FetchProfile} = APIAuth();

  const checkToken = async () => {
    try {
      const token = await EncryptedStorage.getItem('token');
      if (token) {
        if (!starting) {
          return replace('GetStartedScreen');
        } else if (role === 'Pengurus') {
          FetchProfile();
          return replace('HomePengurusScreen');
        } else {
          FetchProfile();
          return replace('HomeJamaahScreen');
        }
      } else {
        replace('LoginScreen');
      }
    } catch (error) {
      replace('LoginScreen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (navigationRef.isReady()) {
        clearInterval(interval);
        checkToken();
      }
    }, 50);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starting, role]);

  return {
    loading,
  };
};
