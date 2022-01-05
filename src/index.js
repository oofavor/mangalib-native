import React from 'react';
import App from './App';
import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';

const Main = () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

export default registerRootComponent(Main);
