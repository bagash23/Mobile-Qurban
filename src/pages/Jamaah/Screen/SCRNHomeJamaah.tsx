import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CMPCardProfile from '../../Pengurus/Components/CMPCardProfile';
import { StyleHome } from '../../Pengurus/Styles/STYLEHome';
import CMPListMasjid from '../Components/CMPListMasjid';
import CMPSearchMasjid from '../Components/CMPSaerchMasjid';
import { useFCJamaah } from '../Function/FCJamaah';

const SCRNHomeJamaah = () => {
  const {
    profile,
    textSearch,
    setTextSearch,
    filteredMasjid,
    navigate,
  } = useFCJamaah();
  return (
    <SafeAreaView style={StyleHome.container}>
      <CMPCardProfile
        name={profile.dataProfile.username}
        onPress={() => navigate('ProfileScreen')}
      />
      <CMPSearchMasjid value={textSearch} onChangeText={setTextSearch}  />
      <CMPListMasjid data={filteredMasjid} />
    </SafeAreaView>
  );
};

export default SCRNHomeJamaah;
