/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Controller } from 'react-hook-form';
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Gap, Header, TextInput } from '../../../components';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';
import { useFCDaftar } from '../Function/FCDaftar';
import { StylesDaftar } from '../Styles/STYLEDaftar';
import { typeUser } from '../data';

const SCRNDaftar = () => {
  const {
    back,
    control,
    handleSubmit,
    handleDaftar,
    daftar,
  } = useFCDaftar();
  return (
    <SafeAreaView style={StylesDaftar.container}>
      <Header title="Daftar Akun" onPress={() => back()} />
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={StylesDaftar.contentView}>
            <Text style={StylesDaftar.textDaftar}>
              Silahkan Buat Akun anda disini!
            </Text>
          </View>
          <View style={StylesDaftar.contentView}>
            <Controller
              control={control}
              name="type"
              render={({field: {onChange, value}}) => (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  {typeUser.map((i, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => onChange(i.title)}
                      style={{
                        backgroundColor:
                          value === i.title ? Colors.primary : Colors.white,
                        width: '50%',
                        alignItems: 'center',
                        paddingVertical: 12,
                        borderRadius: 12,
                      }}>
                      <Text
                        style={{
                          fontFamily:
                            value === i.title
                              ? Fonts.medium.fontFamily
                              : Fonts.regular.fontFamily,
                          color:
                            value === i.title ? Colors.white : Colors.black,
                        }}>
                        {i.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Username"
                  placeholder="Masukan username anda"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Email"
                  placeholder="Masukan email anda"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  title="Kata Sandi"
                  placeholder="Masukan kata sandi anda"
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              )}
              name="password"
            />
            <Gap height={12} />
            <Button
              title="Daftar"
              isLoading={daftar.loadingDaftar}
              onPress={() => handleSubmit(handleDaftar)()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SCRNDaftar;
