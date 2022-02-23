import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { Animated, TouchableOpacity, View } from 'react-native';

import SearchScreen from '../screens/SearchScreen';
import MangaReaderScreen from '../screens/MangaReaderScreen';
import TitleScreen from '../screens/TitleScreen';
import HomeNavigation from './HomeNavigataion';
import useTheme from '../hooks/useTheme';
import {
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        headerStyle: {
          backgroundColor: theme.backgroundHeader,
          height: 80,
          elevation: 0,
        },
        headerTitle: '',
        headerBackTitleStyle: {
          backgroundColor: 'white',
        },
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
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
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
