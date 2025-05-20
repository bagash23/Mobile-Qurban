import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import useNavigation from '../routers/useNavigation';
import { createInstance } from '../utils/apiRequest';
import { useStarted } from '../zustand/persist/useStarted';
import { QurbanProfile, usePengurus } from '../zustand/usePengurus';

interface MasjidProfile {
  namaMasjid: string;
  nomorPengurus: string;
  alamatMasjid: string;
  kotaMasjid: string;
  kodePos: string;
  provinsiMasjid: string;
}

export const APIPengurus = () => {
  const {masjid, daftarMasjid, qurban} = usePengurus();
  const {replace} = useNavigation();
  const {starting} = useStarted();

  const mapToMasjidProfile = (data: any): MasjidProfile => {
    return {
      namaMasjid: data[0].nama_masjid,
      nomorPengurus: data[0].nomor_pengurus,
      alamatMasjid: data[0].alamat_masjid,
      kotaMasjid: data[0].kota_masjid,
      kodePos: data[0].kode_pos,
      provinsiMasjid: data[0].provinsi_masjid,
    };
  };

  const mapToQurbanProfile = (data: any[]): QurbanProfile[] => {
    return data.map(item => ({
      namaPemberi: item.nama_pemberi,
      kategoriHewan: item.kategori_hewan,
      jumlahHewan: item.jumlah_hewan,
      status: item.status,
      tanggalPendaftaran: item.tanggal_pendaftaran,
      tanggalPenyembelihan: item.tanggal_penyembelihan,
      images:
        item.images?.map((img: any) => ({
          ID: img.ID,
          QurbanID: img.QurbanID,
          FileName: img.FileName,
          FileUrl: img.FileURL,
        })) ?? [],
    }));
  };

  const FetchGetMasjid = async () => {
    masjid.setLoadingMasjid(true);
    try {
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: true,
        path: 'info-masjid',
        method: 'GET',
      }).then(res => {
        masjid.setLoadingMasjid(false);
        const mappedData = mapToMasjidProfile(res?.data);
        masjid.setDataMasjid([mappedData]);
      });
    } catch (error) {
      masjid.setLoadingMasjid(false);
    }
  };

  const FetchRegisMasjid = async (
    namaMasjid: string,
    nomorPengurus: string,
    alamatMasjid: string,
    kotaMasjid: string,
    kodePos: string,
    provinsiMasjid: string,
  ) => {
    daftarMasjid.setLoadingDaftarMasjid(true);
    try {
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: true,
        path: 'daftar-masjid',
        method: 'POST',
        body: {
          namaMasjid,
          nomorPengurus,
          alamatMasjid,
          kotaMasjid,
          kodePos,
          provinsiMasjid,
        },
      }).then(res => {
        if (res?.data) {
          daftarMasjid.setLoadingDaftarMasjid(false);
          if (!starting) {
            return replace('GetStartedScreen');
          }
          replace('HomePengurusScreen');
        }
      });
    } catch (error) {
      daftarMasjid.setLoadingDaftarMasjid(false);
    }
  };

  const FetchRegisQurban = async (
    namaPemberi: string,
    kategoriHewan: string,
    jumlahHewan: string,
    status: string,
    tanggalPendaftaran: string,
    tanggalPenyembelihan: string,
    images: any,
  ) => {
    try {
      qurban.setLoadingQurban(true);
      const formData = new FormData();
      formData.append('nama_pemberi', namaPemberi);
      formData.append('kategori_hewan', kategoriHewan);
      formData.append('jumlah_hewan', jumlahHewan);
      formData.append('status', status);
      formData.append('tanggal_pendaftaran', tanggalPendaftaran);
      formData.append('tanggal_penyembelihan', tanggalPenyembelihan);
      formData.append('images', {
        uri: images.uri,
        name: images.fileName ?? 'photo.jpg',
        type: images.type ?? 'image/jpeg',
      } as any);
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: true,
        path: 'qurban',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      }).then(_ => {
        qurban.setLoadingQurban(false);
        replace('HomePengurusScreen');
      });
    } catch (error) {
      qurban.setLoadingQurban(false);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Pendaftaran Data Qurban!',
        textBody: 'Pendaftaran data qurban gagal',
      });
    }
  };

  const FetchGetQurban = async () => {
    try {
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: true,
        path: 'qurban-me',
        method: 'GET',
      }).then(res => {
        const mappedData = mapToQurbanProfile(res?.data);
        // @ts-ignore
        qurban.setDataQurban(mappedData);
      });
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Data Qurban Gagal!',
        textBody: 'Pengambilan data qurban gagal',
      });
    }
  };

  const FetchDeletQurbanID = async (id: string) => {
    try {
      await createInstance({
        service: 'api',
        version: 'v1',
        isPrivate: true,
        path: `delete-qurban/${id}`,
        method: 'DELETE',
      }).then(res => {
        if (res?.data) {
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Hapus Data Qurban Berhasil',
            textBody: 'Hapus data qurban anda berhasil!',
          });
          replace('HomePengurusScreen');
        }
      });
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Hapus Data Qurban Gagal!',
        textBody: 'Silahkan coba kembali',
      });
    }
  };

  return {
    FetchGetMasjid,
    FetchRegisMasjid,
    FetchRegisQurban,
    FetchGetQurban,
    FetchDeletQurbanID,
  };
};
