import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  RefreshControl,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import Chapters from './ChaptersModule';
import CollapsibleView from './Navigation/CollapsibleView';
import Comments from './CommentsModule';
import Cover from './Navigation/Cover';
import Discussions from './DiscussionsModule';
import Info from './InfoModule';
import NavBar from './Navigation/NavBar';
import MediaInfo from './Navigation/MediaInfo';
import useTheme from '../../hooks/useTheme';
import { SharedElement } from 'react-native-shared-element';

const TitleScreen = () => {
  const [current, setCurrent] = useState(0);
  const navigation = useNavigation();
  const { theme } = useTheme();
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
    });
  }, []);

  return (
    <ScrollView
      bounces={false}
      overScrollMode="never"
      style={{ backgroundColor: theme.background }}
    >
      <Cover />
      <MediaInfo />
      <NavBar setRoute={setCurrent} />
      <View
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: theme.background,
        }}
      >
        <CollapsibleView current={current} route={0}>
          <Info />
        </CollapsibleView>
        <CollapsibleView current={current} route={1}>
          <Chapters />
        </CollapsibleView>
        <CollapsibleView current={current} route={2}>
          <Comments />
        </CollapsibleView>
        <CollapsibleView current={current} route={3}>
          <Discussions />
        </CollapsibleView>
      </View>
    </ScrollView>
  );
};

export default TitleScreen;
