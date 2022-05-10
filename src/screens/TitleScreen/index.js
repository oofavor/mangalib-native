import React, { useEffect, useState } from 'react';
import { Dimensions, View, LayoutAnimation } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { getTitle } from '../../services';
import useTheme from '../../hooks/useTheme';
import { MangaContext } from './MangaContext';
import TitleNavigation from '../../navigation/TitleNavigation';
import Animated, {
  BounceInDown,
  BounceInUp,
  Easing,
  FadeIn,
  FadeInDown,
  SlideInDown,
  SlideInUp,
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;

// TODO: Don't update the state if user navigated back
// and the promise is still pending

const TitleScreen = ({ route }) => {
  const [manga, setManga] = useState();
  const navigation = useNavigation();
  const { theme } = useTheme();

  useEffect(() => {
    getTitle(route.params.title).then((data) => {
      if (data.error) {
        Toast.show({
          type: 'error',
          text1: data.msg,
        });
        return navigation.goBack();
      }
      setManga(data);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(300, 'easeIn', 'opacity')
      );
    });
    navigation.setOptions({
      headerShown: false,
      detachPreviousScreen: !navigation.isFocused(),
    });
  }, []);

  return (
    <View style={{ backgroundColor: theme.foreground, flex: 1 }}>
      {manga ? (
        <Animated.View
          entering={FadeInDown}
          style={{ flex: 1 }}
        >
          <MangaContext.Provider value={manga}>
            <TitleNavigation />
          </MangaContext.Provider>
        </Animated.View>
      ) : (
        <Placeholder />
      )}
    </View>
  );
};

const Placeholder = () => {
  return (
    <ContentLoader>
      <Rect x={0} y={0} width={screenWidth} height={80} />
      {/* Image */}
      <Rect
        x={screenWidth / 2 - 110}
        y={50 + 80}
        width={220}
        height={(200 * 7) / 5}
        rx={4}
      />
      {/* Title */}
      <Rect
        x={screenWidth / 2 - 90}
        y={50 + (200 * 7) / 5 + 20 + 80}
        width={180}
        height={16}
        rx={4}
      />
      {/* Subtitle */}
      <Rect
        x={screenWidth / 2 - 70}
        y={50 + (200 * 7) / 5 + 42 + 80}
        width={140}
        height={14}
        rx={4}
      />
      {/* Age */}
      <Rect
        x={screenWidth / 2 - 130}
        y={130 + (200 * 7) / 5 + 80}
        width={40}
        height={20}
        rx={4}
      />
      {/* Year */}
      <Rect
        x={screenWidth / 2 - 75}
        y={130 + (200 * 7) / 5 + 80}
        width={70}
        height={20}
        rx={4}
      />
      {/* Type */}
      <Rect
        x={screenWidth / 2 + 10}
        y={130 + (200 * 7) / 5 + 80}
        width={70}
        height={20}
        rx={4}
      />
      {/* Raiting */}
      <Rect
        x={screenWidth / 2 + 100}
        y={130 + (200 * 7) / 5 + 80}
        width={40}
        height={20}
        rx={4}
      />
      {/* Table->Status */}
      <Rect
        x={16}
        y={200 + (200 * 7) / 5 + 80}
        width={100}
        height={14}
        rx={4}
      />
      <Rect
        x={130}
        y={200 + (200 * 7) / 5 + 80}
        width={120}
        height={14}
        rx={4}
      />
      {/* Table->E */}
      <Rect
        x={16}
        y={224 + (200 * 7) / 5 + 80}
        width={100}
        height={14}
        rx={4}
      />
      <Rect
        x={130}
        y={224 + (200 * 7) / 5 + 80}
        width={120}
        height={14}
        rx={4}
      />
      {/* Table->E */}
      <Rect
        x={16}
        y={248 + (200 * 7) / 5 + 80}
        width={100}
        height={14}
        rx={4}
      />
      <Rect
        x={130}
        y={248 + (200 * 7) / 5 + 80}
        width={120}
        height={14}
        rx={4}
      />
      {/* Table->E */}
      <Rect
        x={16}
        y={272 + (200 * 7) / 5 + 80}
        width={100}
        height={14}
        rx={4}
      />
      <Rect
        x={130}
        y={272 + (200 * 7) / 5 + 80}
        width={120}
        height={14}
        rx={4}
      />
      {/* Table->E */}
      <Rect
        x={16}
        y={296 + (200 * 7) / 5 + 80}
        width={100}
        height={14}
        rx={4}
      />
      <Rect
        x={130}
        y={296 + (200 * 7) / 5 + 80}
        width={120}
        height={14}
        rx={4}
      />
      {/* Table->E */}
      <Rect
        x={16}
        y={320 + (200 * 7) / 5 + 80}
        width={100}
        height={14}
        rx={4}
      />
      <Rect
        x={130}
        y={320 + (200 * 7) / 5 + 80}
        width={120}
        height={14}
        rx={4}
      />
      {/* Description */}
      {Array.from(Array(4)).map((_, i) => (
        <Rect
          key={i}
          x={10}
          y={350 + (200 * 7) / 5 + i * 24 + 80}
          width={Math.min(
            (screenWidth - 20) / (i * Math.random() + 1),
            screenWidth - 20
          )}
          height={14}
          rx={4}
        />
      ))}
    </ContentLoader>
  );
};

export default TitleScreen;
