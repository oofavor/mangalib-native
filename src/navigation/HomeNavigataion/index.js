import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useTheme from '../../hooks/useTheme';
import TabButton from './TabButton';
import HomeScreen from '../../screens/HomeScreen';
import { Stab } from '../../components/Placeholder';
import CatalogScreen from '../../screens/CatalogScreen';
import { EvilIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  let offset = 0;
  let prevDirection = 0;

  const hideBottomTabs = (e) => {
    const currentOffset = e.nativeEvent.contentOffset.y;
    const offsetDifference = currentOffset - offset;
    const direction = Number(currentOffset > offset);
    offset = currentOffset;
    if (Math.abs(offsetDifference) < 6 || direction === prevDirection) return;
    prevDirection = direction;
    Animated.timing(tabOffsetValue, {
      toValue: direction * (insets.bottom + 60),
      useNativeDriver: true,
      duration: 200,
    }).start();
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: insets.bottom + 50,
          paddingBottom: insets.bottom,
          backgroundColor: theme.primary,
          borderTopWidth: 0,
          transform: [{ translateY: tabOffsetValue }],
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
            <EvilIcons
              {...props}
              name="heart"
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
            <EvilIcons
              {...props}
              name="credit-card"
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
        name="Settings"
        component={Stab}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Settings',
          tabBarIcon: (props) => (
            <EvilIcons
              {...props}
              name="archive"
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
        name="About"
        component={Stab}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'About',
          tabBarIcon: (props) => (
            <EvilIcons
              {...props}
              name="bell"
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
        name="Add"
        component={Stab}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Add',
          tabBarIcon: (props) => (
            <EvilIcons
              {...props}
              name="bell"
              color={
                props.focused
                  ? theme.buttonPrimaryColor
                  : theme.buttonDefaultColor
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
