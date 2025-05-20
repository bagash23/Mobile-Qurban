import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../../../components';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

interface IProps {
    title: string;
    deskripsi: string;
    onPress: () => void;
}

const CMPNotFound = ({title, deskripsi, onPress}: IProps) => {
  return (
    <View style={styles.container} >
      <Text style={styles.label} >{title}</Text>
      <Gap height={12} />
      <Text style={styles.deskripsi} >{deskripsi}</Text>
      <Gap height={12} />
      <Button
        isLoading={false}
        title="Daftar Masjid"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 16,
    },
    label: {
        fontFamily: Fonts.bold.fontFamily,
        fontSize: 16,
        color: Colors.black,
        textAlign: 'center',
    },
    deskripsi: {
        fontFamily: Fonts.regular.fontFamily,
        fontSize: 12,
        color: Colors.black,
        textAlign: 'center',
    },
});

export default CMPNotFound;
