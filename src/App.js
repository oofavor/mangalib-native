import React from 'react';
import Home from './navigation/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
      }}
    >
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default App;
