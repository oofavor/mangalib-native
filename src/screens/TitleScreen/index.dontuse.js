import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';
import PagerView from 'react-native-pager-view';
import Chapters from './Chapters';
import CollapsibleView from './CollapsibleView';
import Comments from './Comments';
import Discussions from './Discussions';
import Info from './Info';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native';

const Pages = [Info, Chapters, Discussions, Info];

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const Manga = () => {
  const navigation = useNavigation();
  const [hideNavBar, setHideNavBar] = useState(true);
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        opacity: headerOpacity,
      },
      headerBackground: () => (
        <Animated.View
          style={{
            backgroundColor: 'orange',
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
          }}
        />
      ),
      headerTransparent: true,
    });
  }, [headerOpacity, navigation]);

  const [current, setCurrent] = useState(0);
  return (
    <Animated.ScrollView
      style={{ flex: 1 }}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: yOffset,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    >
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
    </Animated.ScrollView>
  );
};

export default Manga;
