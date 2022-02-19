import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import SearchScreen from '../screens/SearchScreen';
import MangaReaderScreen from '../screens/MangaReaderScreen';
import TitleScreen from '../screens/TitleScreen';
import HomeNavigation from './HomeNavigataion';

const Stack = createStackNavigator();

const MainNavigation = () => {
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
            <TouchableOpacity onPress={() => navigation.navigate('/search')}>
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
      <Stack.Screen component={HomeNavigation} name="Home" />
      <Stack.Screen component={TitleScreen} name="Manga" />
      <Stack.Screen
        component={SearchScreen}
        name="/search"
        options={{
          // headerTransparent: true,
          headerRight: '',
        }}
      />
      <Stack.Screen
        component={MangaReaderScreen}
        name="/reader"
        options={{
          headerShown: false,
          statusBarHidden: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
