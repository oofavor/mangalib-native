import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './navigation';
import { ThemeProvider } from './contexts/theme';

import { useFonts } from 'expo-font';
import { edgeToEdgeMode } from './utils/uiModes';
import UserContext from './contexts/user/userContext';
import UserProvider from './contexts/user/userProvider';

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
        <UserProvider>
          <MainNavigation />
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
