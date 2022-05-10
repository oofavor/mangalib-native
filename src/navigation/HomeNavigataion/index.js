import React from 'react';
import { TouchableOpacity, Pressable, Vibration } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import useTheme from '../../hooks/useTheme';
import { TextPrimary } from '../../components/Text';
import HomeScreen from '../../screens/HomeScreen';
import CatalogScreen from '../../screens/CatalogScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import UserScreen from '../../screens/UserScreen';
import LoginScreen from '../../screens/LoginScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import useUser from '../../hooks/useUser';

const Tab = createBottomTabNavigator();

// tab bar icons according to the route name
const names = {
  HomeScreen: 'home',
  CatalogScreen: 'view-list',
  SettingsScreen: 'settings',
  ProfileScreen: 'person',
  NotificationScreen: 'notifications',
  LoginScreen: 'person',
};

const labels = {
  HomeScreen: 'Главная',
  CatalogScreen: 'Каталог',
  SettingsScreen: 'Настройки',
  ProfileScreen: 'Профиль',
  NotificationScreen: 'Уведомления',
  LoginScreen: 'Профиль',
};

const HomeNavigation = () => {
  const { theme } = useTheme();
  const { isLogged } = useUser();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: theme.primary,
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            onLongPress={() => {
              Vibration.vibrate([0, 16]);
            }}
            android_ripple={
              !props.focused && {
                borderless: true,
                radius: 50,
                color: theme.ripple,
              }
            }
          />
        ),
        tabBarIcon: (props) => (
          <MaterialIcons
            name={names[route.name]}
            size={24}
            color={
              props.focused
                ? theme.buttonPrimaryColor
                : theme.buttonDefaultColor
            }
          />
        ),
        tabBarLabel: ({ focused }) => (
          <TextPrimary
            weight={600}
            numberOfLines={1}
            size={10}
            style={{ color: focused ? theme.textPrimary : theme.textMuted }}
          >
            {labels[route.name]}
          </TextPrimary>
        ),
      })}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CatalogScreen" component={CatalogScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      {isLogged ? (
        <Tab.Screen name="ProfileScreen" component={UserScreen} />
      ) : (
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Tab.Navigator>
  );
};

export default HomeNavigation;
