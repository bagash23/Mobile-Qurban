import { create } from 'zustand';
interface AuthState {
  login: TLogin;
  daftar: TDaftar;
  profile: TProfile;
}

interface AuthProfile {
  username: string;
  email: string;
  role: string;
}

type TLogin = {
  loadingLogin: boolean;
  setLoadingLogin: (v: boolean) => void;
};

type TDaftar = {
  loadingDaftar: boolean;
  setLoadingDaftar: (v: boolean) => void;
};

type TProfile = {
  loadingProfile: boolean;
  dataProfile: AuthProfile,
  setLoadingProfile: (v: boolean) => void;
  setDataProfile: (v: AuthProfile) => void;
}



export const useAuth = create<AuthState>(set => ({
  login: {
    loadingLogin: false,

    setLoadingLogin: loadingLogin =>
      set(state => ({login: {...state.login, loadingLogin}})),
  },
  daftar: {
    loadingDaftar: false,
    setLoadingDaftar: loadingDaftar =>
      set(state => ({daftar: {...state.daftar, loadingDaftar}})),
  },

  profile: {
    loadingProfile: false,
    dataProfile: {
      username: '',
      email: '',
      role: '',
    },
    setLoadingProfile: loadingProfile => set(state => ({profile: {...state.profile, loadingProfile}})),
    setDataProfile: dataProfile => set(state => ({profile: {...state.profile, dataProfile}})),
  },
}));
