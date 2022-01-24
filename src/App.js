import React from 'react';
import Home from './navigation/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import Stab from './components/general/Stab';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Search from './screens/Search';
import { Searchbar } from 'react-native-paper';
import Manga from './screens/Manga';
import MangaReader from './screens/MangaReader';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor: 'orange',
          height: 80,
        },
        headerTitle: '', // hide text
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <FontAwesome5
                name="search"
                size={16}
                color="white"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          );
        },
      })}
    >
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Manga} name="Manga" />
      <Stack.Screen
        component={Search}
        name="Search"
        options={{
          // headerTransparent: true,
          headerRight: '',
          display: 'flex',
        }}
      />
      <Stack.Screen
        component={MangaReader}
        name="MangaReader"
        options={{
          headerShown: false,
          statusBarHidden: true
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
