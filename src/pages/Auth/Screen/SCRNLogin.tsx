/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcIndonesia } from '../../../assets';
import { Button, Gap, LogoText, TextInput } from '../../../components';
import { useFCLogin } from '../Function/FCLogin';
import { StylesLogin } from '../Styles/STYLELogin';

const SCRNLogin = () => {
  const { control, handleSubmit, handleLogin, login, navigate } = useFCLogin();

  return (
    <SafeAreaView style={StylesLogin.container}>
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={StylesLogin.headerWrapper}>
            <Image source={IcIndonesia} style={StylesLogin.leftImage} />
            <LogoText title="PastiQurban" />
          </View>
          <View style={StylesLogin.contentView}>
            <Text style={StylesLogin.textLogin}>Masuk</Text>
            <Text style={StylesLogin.textLoginDesc}>
              Silahkan masukan email dan kata sandi anda untuk menggunakan aplikasi
              PastiQurban
            </Text>

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
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
              render={({ field: { onChange, value } }) => (
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

            <Pressable style={StylesLogin.contentForgotPassword}>
              <Text style={StylesLogin.textForgotPassword}>Lupa Kata Sandi?</Text>
            </Pressable>

            <Button
              title="Masuk"
              isLoading={login.loadingLogin}
              onPress={() => handleSubmit(handleLogin)()}
            />

            <Gap height={12} />

            <Button
              title="Daftar Akun Sekarang!"
              isLoading={false}
              onPress={() => navigate('DaftarScreen')}
              variant="outlined"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SCRNLogin;
