import React, { useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';
import BestOfYear from './BestOfYear';
import Footer from './Footer';
import MangaUpdates from './MangaUpdates';
import News from './News';
import PopularMangaUpdates from './PopularMangaUpdates';

const Home = () => {
  const { theme } = useTheme();

  return (
    <ScrollView
      style={{
        backgroundColor: theme.background,
      }}
    >
      <PopularMangaUpdates />
      <News />
      <News />
      <MangaUpdates />
      <Footer />
    </ScrollView>
  );
};

export default Home;
