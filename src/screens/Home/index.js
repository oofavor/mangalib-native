import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';
import BestOfYear from './BestOfYear';
import PopularMangaUpdates from './PopularMangaUpdates';

const Home = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <ScrollView
      style={{
        backgroundColor: theme.background,
      }}
    >
      <PopularMangaUpdates />
      <BestOfYear />
    </ScrollView>
  );
};

export default Home;
