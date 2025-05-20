/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Controller } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../../components';
import CMPDatePicker from '../Components/CMPDatePicker';
import CMPUploadImage from '../Components/CMPUploadImage';
import { useFCQurban } from '../Function/FCQurban';
import { StyleHome } from '../Styles/STYLEHome';

const SCRNQurban = () => {
  const {
    back,
    control,
    handleSubmit,
    openHewan,
    handleModal,
    handleCloseModal,
    CMPModalTypeHewan,
    watch,
    setValue,
    CMPModalStatus,
    openStatus,
    openPendaftaran,
    openPenyembelihan,
    handleImagePicker,
    image,
    fileNameImage,
    handleBuatQurban,
    qurban,
  } = useFCQurban();
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
            <CMPUploadImage uri={image ?? ''} onPressImagePicker={handleImagePicker} filename={fileNameImage} />
            <Button
              title="Buat Data Qurban"
              isLoading={qurban.loadingQurban}
              onPress={() => handleSubmit(handleBuatQurban)()}
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
      />
      <CMPDatePicker
        visible={openPenyembelihan}
        onClose={() => handleCloseModal('Penyembelihan')}
        onSelectDate={val => {
          setValue('tanggalPenyembelihan', val);
          handleCloseModal('Penyembelihan');
        }}
      />
    </SafeAreaView>
  );
};

export default SCRNQurban;
