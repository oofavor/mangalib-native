import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import SearchScreen from '../../screens/SearchScreen';
import MangaReaderScreen from '../../screens/MangaReaderScreen';
import TitleScreen from '../../screens/TitleScreen';
import LoginModal from '../../screens/LoginModal';

import HomeNavigation from '../HomeNavigataion';
import useTheme from '../../hooks/useTheme';
import SearchIcon from './SearchIcon';

const Stack = createStackNavigator();

const screenOptions = {
  searchScreen: {
    headerRight: '',
    cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
  },
  mangaReaderScreen: {
    headerShown: false,
    statusBarHidden: true,
  },
  modal: {
    presentation: 'modal',
    ...TransitionPresets.ModalPresentationIOS,
  },
};

const MainNavigation = () => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="HomeNavigation"
      screenOptions={({ navigation }) => ({
        detachPreviousScreen: !navigation.isFocused(),
        headerStyle: {
          backgroundColor: theme.backgroundHeader,
          height: 80,
          elevation: 0,
        },
        headerTitle: '',
        ...TransitionPresets.SlideFromRightIOS,
        headerRight: SearchIcon,
      })}
    >
      <Stack.Screen component={HomeNavigation} name="HomeNavigation" />
      <Stack.Screen component={TitleScreen} name="TitleScreen" />
      <Stack.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={screenOptions.searchScreen}
      />
      <Stack.Screen
        component={MangaReaderScreen}
        name="MangaReaderScreen"
        options={screenOptions.mangaReaderScreen}
      />
      <Stack.Screen
        component={LoginModal}
        name="LoginModal"
        options={screenOptions.modal}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
