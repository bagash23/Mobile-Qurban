import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Colors } from '../../../utils/colors';
import { useFCSplash } from '../Function/FCSplash';
import { StylesSplash } from '../Styles/STYLESplash';

const SCRNSplashScreen = () => {
  const {loading} = useFCSplash();
  return (
    <View style={StylesSplash.container} >
      <Text style={StylesSplash.textPrimary} >PastiQurban</Text>
      <ActivityIndicator size="small" color={Colors.white} animating={loading} />
    </View>
  );
};

export default SCRNSplashScreen;
