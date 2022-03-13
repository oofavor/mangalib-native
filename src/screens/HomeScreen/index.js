import React from 'react';
import { ScrollView, View, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';
import Footer from './Footer';
import MangaUpdates from './MangaUpdates';
import News from './News';
import PopularMangaUpdates from './PopularMangaUpdates';

const Home = ({ route }) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <PopularMangaUpdates />
      <News />
      <News />
      <MangaUpdates />
    </ScrollView>
  );
};

export default Home;
