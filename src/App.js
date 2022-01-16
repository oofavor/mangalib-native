import React from 'react';
import Home from './navigation/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
          height: 80,
        },
        headerTitle: '', // hide text
        headerRight: () => (
          <FontAwesome5 name="search" size={16} color="white" />
        ),
      }}
    >
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default App;
