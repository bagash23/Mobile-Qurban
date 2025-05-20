import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import Router from './src/routers';
import { navigationRef } from './src/routers/useNavigation';
import { Colors } from './src/utils/colors';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <AlertNotificationRoot>
        <Router/>
      </AlertNotificationRoot>
    </NavigationContainer>
  );
};

export default App;
