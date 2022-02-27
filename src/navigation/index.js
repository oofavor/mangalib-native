import React from 'react';
import useTheme from '../hooks/useTheme';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';

const MainNavigation = () => {
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
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
