import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components';
import { useFCKupon } from '../Function/FCKupon';
import { StyleHome } from '../Styles/STYLEHome';

const SCRNKupon = () => {
    const {back} = useFCKupon();
  return (
    <SafeAreaView style={StyleHome.container} >
      <Header title="Generated Kupon" onPress={back} />
    </SafeAreaView>
  );
};

export default SCRNKupon;
