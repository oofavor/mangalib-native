import React from 'react';
import useTheme from '../hooks/useTheme';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import Toast from 'react-native-toast-message';
import { enableLayoutAnimations } from 'react-native-reanimated';
const NavigationRoot = () => {
  const { theme } = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
    },
  };

  return (
    <>
      <NavigationContainer theme={navTheme}>
        <MainNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default NavigationRoot;
