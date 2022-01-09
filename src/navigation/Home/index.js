import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../../screens/Home';
import useTheme from '../../hooks/useTheme';
import TabButton from './TabButton';
import Stab from '../../components/general/Stab';

const Tab = createBottomTabNavigator();

// const routes = [
//   {
//     name: 'Home',
//     component: Home_,
//     options: {
//       tabBarShowLabel: false,
//       tabBarLabel: 'Home',
//       tabBarButton: (props) => <TabButton {...props} name="home" />,
//     },
//   },
//   {
//     name: 'Search',
//     component: Stab,
//     options: {
//       tabBarShowLabel: false,
//       tabBarLabel: 'Search',
//       tabBarButton: (props) => <TabButton {...props} name="search" />,
//     },
//   },
//   {
//     name: 'Settings',
//     component: Stab,
//     options: {
//       tabBarShowLabel: false,
//       tabBarLabel: 'Settings',
//       tabBarButton: (props) => <TabButton {...props} name="cog" />,
//     },
//   },
//   {
//     name: 'About',
//     component: Stab,
//     options: {
//       tabBarShowLabel: false,
//       tabBarLabel: 'Home',
//       tabBarButton: (props) => <TabButton {...props} name="exclamation" />,
//     },
//   },
//   {
//     name: 'Add',
//     component: Stab,
//     options: {
//       tabBarShowLabel: false,
//       tabBarLabel: 'Plus',
//       tabBarButton: (props) => <TabButton {...props} name="plus" />,
//     },
//   },
// ];

const Home = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
          marginHorizontal: 16,
          borderRadius: 16,
          paddingBottom: -insets.bottom,
          marginBottom: insets.bottom + 10,
          backgroundColor: theme.primary,
          borderTopColor: 'transparent',
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Home',
          tabBarButton: (props) => <TabButton {...props} name="home" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Stab}
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

export default Home;
