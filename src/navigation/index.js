import React from 'react';
import useTheme from '../hooks/useTheme';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';

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
    <NavigationContainer theme={navTheme}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default NavigationRoot;
