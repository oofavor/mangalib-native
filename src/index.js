import React, { useEffect } from 'react';
import App from './App';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { ThemeProvider } from './contexts/theme';
import { useFonts } from 'expo-font';

const Main = () => {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('light-content');
    NavigationBar.setPositionAsync('absolute');
    NavigationBar.setBackgroundColorAsync('rgba(0,0,0,0)');
  }, []);
  useFonts({
    OpenSans: require('../assets/OpenSans.ttf'),
    'OpenSans-SemiBold': require('../assets/OpenSans-SemiBold.ttf'),
  });
  return (
    <SafeAreaProvider>
      <ThemeProvider defaultTheme="light">
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(Main);
