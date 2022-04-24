import React from 'react';
import { SpringScrollView } from 'react-native-spring-scrollview';
import MangaUpdates from './MangaUpdates';
import PopularMangaUpdates from './PopularMangaUpdates';

const HomeScreen = () => {
  return (
    <SpringScrollView>
      <PopularMangaUpdates />
      <MangaUpdates />
    </SpringScrollView>
  );
};

export default HomeScreen;
