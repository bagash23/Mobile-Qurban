import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Gap } from '../../../components';
import { Colors } from '../../../utils/colors';
import { useFCGetStarted } from '../Function/FCGetStarted';
import { StylesGetStarted } from '../Styles/STYLEGetStarted';

const SCRNGetStarted = () => {
  const {profile, handleNextHome} = useFCGetStarted();
  return (
    <SafeAreaView style={StylesGetStarted.container}>
      <View style={StylesGetStarted.content}>
        <Text style={StylesGetStarted.textLabel}>
          Hai, {profile.dataProfile.username}
        </Text>
        <Text style={StylesGetStarted.textDesk}>
          {profile.loadingProfile
            ? 'Tunggu beberapa saat, data anda sedang di persiapkan'
            : 'Data anda sudah siap untuk digunakan, klik lanjutkan untuk memulai'}
        </Text>
        <Gap height={12} />
        {profile.loadingProfile ? (
          <ActivityIndicator size={'small'} color={Colors.primary} />
        ) : (
          <Button
            isLoading={false}
            title="Lanjutkan"
            onPress={handleNextHome}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SCRNGetStarted;
