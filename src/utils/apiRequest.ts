import { BASE_API_URL } from '@env';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import EncryptedStorage from 'react-native-encrypted-storage';

interface TFetchConfig {
  service: string;
  version: string;
  isPrivate: boolean;
  path: string;
  method?: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH' | undefined;
  body?: any;
  headers?: Record<string, string>;
  contentType?: string;
}

export const createInstance = async ({
  service,
  version,
  isPrivate,
  path,
  method = 'GET',
  body,
  headers = {},
  contentType = 'application/json',
}: TFetchConfig) => {
  const url = `${BASE_API_URL}/${service}${
    isPrivate ? '/private' : ''
  }/${version}/${path}`;

  console.log('adwa', url);

  const token = isPrivate ? await EncryptedStorage.getItem('token') : null;

  const header = {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    'User-Agent': `${DeviceInfo.getSystemName()}/${DeviceInfo.getSystemVersion()}/${DeviceInfo.getBrand()}/${DeviceInfo.getModel()}/${DeviceInfo.getDeviceId()}/build${DeviceInfo.getBuildNumber()}`,
    'Content-Security-Policy':
      "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; frame-ancestors 'self'; form-action 'self'",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Access-Control-Allow-Origin': '*',
    ...(isPrivate && token ? {Authorization: `Bearer ${token}`} : {}),
    ...headers,
  };

  try {
    const response = await axios(url, {
      method,
      headers: header,
      data: body || undefined,
    });


    return response.data || response;
  } catch (error: any) {
    console.log('ERROR:', error?.response?.data || error.message);
    console.log('Axios Error:', error?.toJSON?.() || error);
    console.log('Raw Response:', error?.response?.data);
    throw error;
  }
};
