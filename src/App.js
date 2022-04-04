import React, { useEffect } from 'react';
import MainNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './contexts/theme';

import { useFonts } from 'expo-font';
import { edgeToEdgeMode } from './utils/uiModes';

const App = () => {
  useEffect(() => {
    edgeToEdgeMode();
  }, []);

  // load fonts
  useFonts({
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
        <MainNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
