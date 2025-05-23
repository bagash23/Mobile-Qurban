import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SCRNDaftar,
  SCRNDetail,
  SCRNDetailQurban,
  SCRNEditQurban,
  SCRNGetStarted,
  SCRNHomeJamaah,
  SCRNHomePengurus,
  SCRNKupon,
  SCRNLogin,
  SCRNProfile,
  SCRNQurban,
  SCRNRegistMasjid,
  SCRNSplashScreen,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      {/* Auth */}
      <Stack.Screen name="SplashScreen" component={SCRNSplashScreen} />
      <Stack.Screen name="LoginScreen" component={SCRNLogin} />
      <Stack.Screen name="DaftarScreen" component={SCRNDaftar} />
      <Stack.Screen name="GetStartedScreen" component={SCRNGetStarted} />
      <Stack.Screen name="RegisterMasjidScreen" component={SCRNRegistMasjid} />
      {/* End Auth */}

      {/* Pengurus */}
      <Stack.Screen name="HomePengurusScreen" component={SCRNHomePengurus} />
      <Stack.Screen name="QurbanScreen" component={SCRNQurban} />
      <Stack.Screen name="DetailQurbanScreen" component={SCRNDetailQurban} />
      <Stack.Screen name="EditQurbanScreen" component={SCRNEditQurban} />
      <Stack.Screen name="KuponScreen" component={SCRNKupon} />
      <Stack.Screen name="ProfileScreen" component={SCRNProfile} />
      {/* ENd Pengurus */}

      {/* Jamaah */}
      <Stack.Screen name="HomeJamaahScreen" component={SCRNHomeJamaah} />
      <Stack.Screen name="DetailIbadahScreen" component={SCRNDetail} />
      {/* End Jamaah */}
    </Stack.Navigator>
  );
};

export default Router;
