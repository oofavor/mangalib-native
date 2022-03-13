import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import MangaReaderScreen from '../screens/MangaReaderScreen';
import TitleScreen from '../screens/TitleScreen';
import HomeNavigation from './HomeNavigataion';
import useTheme from '../hooks/useTheme';
import { CardStyleInterpolators } from '@react-navigation/stack';
import GenreModal from '../screens/GenreModal';
import TagModal from '../screens/TagModal';
import FilterModal from '../screens/FilterModal';

const Stack = createStackNavigator();

const MainStack = () => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        cardStyle: {
          backgroundColor: theme.background,
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
        ...TransitionPresets.SlideFromRightIOS,
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
      <Stack.Screen
        component={FilterModal}
        name="Filter"
        options={{
          presentation: 'modal',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        component={GenreModal}
        name="Filter/Genre"
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        component={TagModal}
        name="Filter/Tag"
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
