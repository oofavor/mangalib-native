import React, { useEffect } from 'react';
import MainNavigation from './navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './contexts/theme';

import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import * as StatusBar from 'expo-status-bar';

const App = () => {
  useEffect(() => {
    StatusBar.setStatusBarTranslucent(true);
    StatusBar.setStatusBarBackgroundColor('rgba(0,0,0,0)');
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
    load && (
      <SafeAreaProvider>
        <ThemeProvider defaultTheme="dark">
            <MainNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    )
  );
};

export default App;
