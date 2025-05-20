/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Gap, Header, TextInput } from '../../../components';
import { useFCRegisMasjid } from '../Function/FCRegisMasjid';
import { StyleRegisMasjid } from '../Styles/STYLERegisMasjid';

const SCRNRegistMasjid = () => {
  const {control, handleSubmit, handleDaftar, back, daftarMasjid} = useFCRegisMasjid();
  return (
    <View style={StyleRegisMasjid.container}>
      <Header title="Pendaftaran Masjid/Musholla" onPress={back} />
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={StyleRegisMasjid.content}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Nama Masjid"
                  placeholder="Masukan nama masjid anda!"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="namaMasjid"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Nomor Handphone Pengurus"
                  placeholder="Masukan nomor handphone pengurus!"
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                />
              )}
              name="nomorPengurus"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Alamat Masjid"
                  placeholder="Masukan alamat masjid anda!"
                  onChangeText={onChange}
                  multiline
                  value={value}
                />
              )}
              name="alamatMasjid"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Kota Masjid"
                  placeholder="Masukan kota masjid anda!"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="kotaMasjid"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Kode Pos"
                  placeholder="Masukan kode pos masjid anda!"
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                />
              )}
              name="kodePos"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Provinsi Masjid"
                  placeholder="Masukan provinsi masjid anda!"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="provinsiMasjid"
            />
            <Gap height={12} />
            <Button
                isLoading={daftarMasjid.loadingDaftarMasjid}
                title="Daftar Masjid Sekarang!"
                onPress={() => handleSubmit(handleDaftar)()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SCRNRegistMasjid;
