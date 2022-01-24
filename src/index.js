import React, { useEffect } from 'react';
import App from './App';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './contexts/theme';

import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import * as StatusBar from 'expo-status-bar';

const Main = () => {
  useEffect(() => {
    StatusBar.setStatusBarTranslucent(true)
    NavigationBar.setPositionAsync('absolute');
    NavigationBar.setBackgroundColorAsync('rgba(0,0,0,0)');
  }, []);
  const [load, error] = useFonts({
    OpenSans300: require('../assets/fonts/OpenSans/OpenSans300.ttf'),
    OpenSans400: require('../assets/fonts/OpenSans/OpenSans400.ttf'),
    OpenSans500: require('../assets/fonts/OpenSans/OpenSans500.ttf'),
    OpenSans600: require('../assets/fonts/OpenSans/OpenSans600.ttf'),
    OpenSans700: require('../assets/fonts/OpenSans/OpenSans700.ttf'),
    OpenSans800: require('../assets/fonts/OpenSans/OpenSans800.ttf'),
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
