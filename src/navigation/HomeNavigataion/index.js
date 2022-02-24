import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useTheme from '../../hooks/useTheme';
import TabButton from './TabButton';
import HomeScreen from '../../screens/HomeScreen';
import { Stab } from '../../components/Placeholder';
import CatalogScreen from '../../screens/CatalogScreen';

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
    if (Math.abs(offsetDifference) < 10 || direction === prevDirection) return;
    prevDirection = direction;
    Animated.spring(tabOffsetValue, {
      toValue: direction * (insets.bottom + 60),
      useNativeDriver: true,
    }).start();
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          backgroundColor: theme.background,
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
          tabBarButton: (props) => <TabButton {...props} name="home" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={CatalogScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Search',
          tabBarButton: (props) => <TabButton {...props} name="search" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Stab}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Settings',
          tabBarButton: (props) => <TabButton {...props} name="cog" />,
        }}
      />
      <Tab.Screen
        name="About"
        component={Stab}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'About',
          tabBarButton: (props) => <TabButton {...props} name="exclamation" />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Stab}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Add',
          tabBarButton: (props) => <TabButton {...props} name="plus" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
