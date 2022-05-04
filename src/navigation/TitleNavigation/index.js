import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Vibration, Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import useTheme from '../../hooks/useTheme';
import { TextPrimary } from '../../components/Text';
import ChaptersModule from '../../screens/TitleScreen/ChaptersModule';
import CommentsModule from '../../screens/TitleScreen/CommentsModule';
import DiscussionsModule from '../../screens/TitleScreen/DiscussionsModule';
import InfoModule from '../../screens/TitleScreen/InfoModule';
import { useManga } from '../../screens/TitleScreen/MangaContext';
import Cover from '../../screens/TitleScreen/InfoModule/InfoGeneral/Cover';
import MediaInfo from '../../screens/TitleScreen/InfoModule/InfoGeneral/MediaInfo';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
const Tab = createMaterialTopTabNavigator();

const names = {
  ChaptersModule: 'view-list',
  CommentsModule: 'chat',
  DiscussionsModule: 'chat',
  InfoModule: 'info',
};

const labels = {
  ChaptersModule: 'Главы',
  CommentsModule: 'Комментарии',
  DiscussionsModule: 'Обсуждения',
  InfoModule: 'Информация',
};

// TODO: collapsable TabBar

const Cus = ({ layout }) => {
  const styles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: 0 }],
    };
  });

  return (
    <Animated.View style={styles}>
      <Cover />
      <MediaInfo />
    </Animated.View>
  );
};

const TitleNavigation = () => {
  const { theme } = useTheme();
  const manga = useManga();

  return (
    <Tab.Navigator
      tabBar={(props) => <Cus {...props} />}
      screenOptions={({ route }) => ({
        tabBarScrollEnabled: true,
        headerStyle: { backgroundColor: theme.primary, height: 80 },
        headerTitle: () => (
          <TextPrimary size={20} weight={600} numberOfLines={1}>
            {manga['rus_name']}
          </TextPrimary>
        ),
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
            android_ripple={{
              borderless: true,
              radius: 60,
              color: theme.ripple,
            }}
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
    >
      <Tab.Screen component={InfoModule} name="InfoModule" />
      <Tab.Screen component={ChaptersModule} name="ChaptersModule" />
      <Tab.Screen component={CommentsModule} name="CommentsModule" />
      <Tab.Screen component={DiscussionsModule} name="DiscussionsModule" />
    </Tab.Navigator>
  );
};

export default TitleNavigation;
