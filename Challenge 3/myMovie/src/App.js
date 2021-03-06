import {LogBox} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import ReactNativeSplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  useEffect(() => {
    ReactNativeSplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
