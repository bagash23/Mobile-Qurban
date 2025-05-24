/* eslint-disable react-native/no-inline-styles */
// @ts-ignore
import { BASE_API_URL } from '@env';
import React from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../../components';
import { QurbanImageProfile } from '../../../zustand/usePengurus';
import CMPDatePicker from '../Components/CMPDatePicker';
import CMPUploadImage from '../Components/CMPUploadImage';
import { useFCEditQurban } from '../Function/FCEditQurban';
import { StyleHome } from '../Styles/STYLEHome';

const SCRNEditQurban = () => {
  const {
    back,
    control,
    handleSubmit,
    handleUpdate,
    watch,
    setValue,
    item,
    openHewan,
    openStatus,
    openPendaftaran,
    openPenyembelihan,
    handleModal,
    handleCloseModal,
    CMPModalTypeHewan,
    CMPModalStatus,
    handleLaunchCamera,
    showImageUpload,
    imageResponse,
    qurban,
  } = useFCEditQurban();
  return (
    <SafeAreaView style={StyleHome.container}>
      <Header title="Pendaftaran Hewan Qurban" onPress={back} />
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={StyleHome.contentInfoMasjid}>
            <Controller
              control={control}
              name="namaPemberi"
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Nama Berqurban"
                  placeholder="Masukan nama berqurban"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="kategoriHewan"
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Hewan Qurban"
                  placeholder="Pilih hewan qurban"
                  value={value}
                  onChangeText={onChange}
                  type="touch"
                  onPress={() => handleModal('Hewan')}
                />
              )}
            />
            <Controller
              control={control}
              name="jumlahHewan"
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Jumlah Hewan"
                  placeholder="Masukan jumlah hewan qurban"
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="status"
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Status Qurban"
                  placeholder="Pilih status qurban"
                  value={value}
                  onChangeText={onChange}
                  type="touch"
                  onPress={() => handleModal('Status')}
                />
              )}
            />
            <Controller
              control={control}
              name="tanggalPendaftaran"
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Tanggal Pedaftaran"
                  placeholder="Pilih tanggal pendaftaran"
                  value={value}
                  onChangeText={onChange}
                  type="touch"
                  onPress={() => handleModal('Pendaftaran')}
                />
              )}
            />
            <Controller
              control={control}
              name="tanggalPenyembelihan"
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Tanggal Penyembelihan"
                  placeholder="Pilih tanggal penyembelihan"
                  value={value}
                  onChangeText={onChange}
                  type="touch"
                  onPress={() => handleModal('Penyembelihan')}
                />
              )}
            />
            {item?.images?.map((img: QurbanImageProfile, index: number) => (
              <CMPUploadImage
                key={index}
                uri={`${BASE_API_URL}${img.FileUrl}`}
                filename={img?.FileName ?? ''}
              />
            ))}
            {showImageUpload && (
              <CMPUploadImage
                uri={imageResponse?.assets?.[0]?.uri ?? ''}
                onPressImagePicker={handleLaunchCamera}
                filename={imageResponse?.assets?.[0]?.fileName ?? ''}
              />
            )}
            <Button
              title="Edit Data Qurban"
              isLoading={qurban.loadingQurban}
              onPress={() => handleSubmit(handleUpdate)()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <CMPModalTypeHewan
        open={openHewan}
        setOpen={() => handleCloseModal('Hewan')}
        value={watch('kategoriHewan')}
        onSelect={val => {
          setValue('kategoriHewan', val);
          handleCloseModal('Hewan');
        }}
      />
      <CMPModalStatus
        open={openStatus}
        setOpen={() => handleCloseModal('Status')}
        value={watch('status')}
        onSelect={val => {
          setValue('status', val);
          handleCloseModal('Status');
        }}
      />
      <CMPDatePicker
        visible={openPendaftaran}
        onClose={() => handleCloseModal('Pendaftaran')}
        onSelectDate={val => {
          setValue('tanggalPendaftaran', val);
          handleCloseModal('Pendaftaran');
        }}
        value={watch('tanggalPendaftaran')}
      />
      <CMPDatePicker
        visible={openPenyembelihan}
        onClose={() => handleCloseModal('Penyembelihan')}
        onSelectDate={val => {
          setValue('tanggalPenyembelihan', val);
          handleCloseModal('Penyembelihan');
        }}
        value={watch('tanggalPenyembelihan')}
      />
    </SafeAreaView>
  );
};

export default SCRNEditQurban;
