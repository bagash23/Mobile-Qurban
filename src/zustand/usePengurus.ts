import { create } from 'zustand';

interface PengurusState {
  masjid: TMasjid;
  daftarMasjid: TDaftarMasjid;
  qurban: TQurban;
}

export interface MasjidProfile {
  namaMasjid: string;
  nomorPengurus: string;
  alamatMasjid: string;
  kotaMasjid: string;
  kodePos: string;
  provinsiMasjid: string;
}

export interface QurbanImageProfile {
  ID: string;
  QurbanID: string;
  FileName: string;
  FileUrl: string;
}

export interface QurbanProfile {
  namaPemberi: string;
  kategoriHewan: string;
  jumlahHewan: string;
  status: string;
  tanggalPendaftaran: string;
  tanggalPenyembelihan: string;
  images: QurbanImageProfile[];
}

type TMasjid = {
  loadingMasjid: boolean;
  setLoadingMasjid: (v: boolean) => void;
  dataMasjid: MasjidProfile[];
  setDataMasjid: (v: MasjidProfile[]) => void;
};

type TDaftarMasjid = {
  loadingDaftarMasjid: boolean;
  setLoadingDaftarMasjid: (v: boolean) => void;
}

type TQurban = {
  loadingQurban: boolean;
  setLoadingQurban: (v: boolean) => void;
  dataQurban: QurbanProfile;
  setDataQurban: (v: QurbanProfile) => void;
}

export const usePengurus = create<PengurusState>(set => ({
  masjid: {
    loadingMasjid: false,
    dataMasjid: [
      {
        namaMasjid: '',
        nomorPengurus: '',
        alamatMasjid: '',
        kotaMasjid: '',
        kodePos: '',
        provinsiMasjid: '',
      },
    ],
    setLoadingMasjid: loadingMasjid =>
      set(state => ({
        masjid: {...state.masjid, loadingMasjid},
      })),
    setDataMasjid: dataMasjid =>
      set(state => ({
        masjid: {...state.masjid, dataMasjid},
      })),
  },

  daftarMasjid: {
    loadingDaftarMasjid: false,
    setLoadingDaftarMasjid: loadingDaftarMasjid => set(state => ({daftarMasjid: {...state.daftarMasjid, loadingDaftarMasjid}})),
  },
  qurban: {
    loadingQurban: false,
    dataQurban: {
      namaPemberi: '',
      kategoriHewan: '',
      jumlahHewan: '',
      status: '',
      tanggalPendaftaran: '',
      tanggalPenyembelihan: '',
      images: [
        {
          ID: '',
          QurbanID: '',
          FileName: '',
          FileUrl: '',
        },
      ],
    },
    setLoadingQurban: loadingQurban => set(state => ({qurban: {...state.qurban, loadingQurban}})),
    setDataQurban: dataQurban => set(state => ({qurban: {...state.qurban, dataQurban}})),
  },
}));
