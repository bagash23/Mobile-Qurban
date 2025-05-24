import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Header } from '../../../components';
import Fonts from '../../../utils/fonts';
import { useFCProfile } from '../Function/FCProfile';

const SCRNProfile = () => {
  const {back, profile, getInitials, handleLogout} = useFCProfile();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profil Anda" onPress={back} />

      <View style={styles.profileContainer}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarPlaceholderText}>
            {profile?.dataProfile?.username
              ? getInitials(profile?.dataProfile?.username)
              : 'U'}
          </Text>
        </View>

        <Text style={styles.name}>
          {profile?.dataProfile?.username || 'Nama Tidak Tersedia'}
        </Text>
        <Text style={styles.info}>
          {profile?.dataProfile?.email || 'Email Tidak Tersedia'}
        </Text>
        <Text style={styles.info}>
          {profile?.dataProfile?.role || 'No. Telepon Tidak Tersedia'}
        </Text>
      </View>
      <View style={styles.viewButton} >
        <Button title="Keluar" onPress={handleLogout} isLoading={false} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  profileContainer: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholderText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: Fonts.bold.fontFamily,
  },
  info: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
    fontFamily: Fonts.medium.fontFamily,
  },
  viewButton: {
    padding: 16,
  },
});

export default SCRNProfile;
