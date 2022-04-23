import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SpringScrollView } from 'react-native-spring-scrollview';
import useTheme from '../../hooks/useTheme';
import MangaUpdates from './MangaUpdates';
import News from './News';
import PopularMangaUpdates from './PopularMangaUpdates';

const HomeScreen = ({ route }) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <SpringScrollView>
      <PopularMangaUpdates />
      <MangaUpdates />
    </SpringScrollView>
  );
};

export default HomeScreen;
