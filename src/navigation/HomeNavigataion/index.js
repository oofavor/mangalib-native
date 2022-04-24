import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useTheme from '../../hooks/useTheme';
import HomeScreen from '../../screens/HomeScreen';
import CatalogScreen from '../../screens/CatalogScreen';
import { MaterialIcons } from '@expo/vector-icons';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import LoginScreen from '../../screens/LoginScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import useUser from '../../hooks/useUser';
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const { isLogged } = useUser();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: insets.bottom + 50,
          paddingBottom: insets.bottom,
          backgroundColor: theme.primary,
          borderTopWidth: 0,
        },
      }}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Home',
          tabBarIcon: (props) => (
            <MaterialIcons
              {...props}
              name="home"
              color={
                props.focused
                  ? theme.buttonPrimaryColor
                  : theme.buttonDefaultColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CatalogScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Search',
          tabBarIcon: (props) => (
            <MaterialIcons
              {...props}
              name="library-books"
              color={
                props.focused
                  ? theme.buttonPrimaryColor
                  : theme.buttonDefaultColor
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: (props) => (
            <MaterialIcons
              {...props}
              name="notifications"
              color={
                props.focused
                  ? theme.buttonPrimaryColor
                  : theme.buttonDefaultColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Add',
          tabBarIcon: (props) => (
            <MaterialIcons
              {...props}
              name="settings"
              color={
                props.focused
                  ? theme.buttonPrimaryColor
                  : theme.buttonDefaultColor
              }
            />
          ),
        }}
      />
      {isLogged ? (
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: 'Profile',
            tabBarIcon: (props) => (
              <MaterialIcons
                {...props}
                name="portrait"
                color={
                  props.focused
                    ? theme.buttonPrimaryColor
                    : theme.buttonDefaultColor
                }
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: 'Login',
            tabBarIcon: (props) => (
              <MaterialIcons
                {...props}
                name="portrait"
                color={
                  props.focused
                    ? theme.buttonPrimaryColor
                    : theme.buttonDefaultColor
                }
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default HomeNavigation;
