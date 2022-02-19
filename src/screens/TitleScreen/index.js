import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSharedValue } from 'react-native-reanimated';
import Chapters from './Chapters';
import CollapsibleView from './CollapsibleView';
import Comments from './Comments';
import Cover from './Cover';
import Discussions from './Discussions';
import Info from './Info';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar';
import MediaInfo from './MediaInfo';

const Manga = () => {
  const [current, setCurrent] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
    });
  }, []);

  return (
    <Animated.ScrollView
      style={{ flex: 1 }}
      style={{ backgroundColor: 'white' }}
    >
      <Cover />
      <View
        style={{
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          marginTop: 375,
          backgroundColor: 'white',
        }}
      >
        <MediaInfo />
        <NavBar setRoute={setCurrent} />
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
    </Animated.ScrollView>
  );
};

export default Manga;
