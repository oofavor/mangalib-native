import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { LayoutAnimation } from 'react-native';
import ChaptersModule from '../../screens/TitleScreen/ChaptersModule';
import CommentsModule from '../../screens/TitleScreen/CommentsModule';
import DiscussionsModule from '../../screens/TitleScreen/DiscussionsModule';
import InfoModule from '../../screens/TitleScreen/InfoModule';

const Tab = createBottomTabNavigator();

const TitleNavigation = () => {
  LayoutAnimation.configureNext(
    LayoutAnimation.create(200, 'easeIn', 'opacity')
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen component={InfoModule} name="InfoModule" />
      <Tab.Screen component={ChaptersModule} name="ChaptersModule" />
      <Tab.Screen component={CommentsModule} name="CommentsModule" />
      <Tab.Screen component={DiscussionsModule} name="DiscussionsModule" />
    </Tab.Navigator>
  );
};

export default TitleNavigation;
