import React from 'react';
import { ScrollView } from 'react-native';
import MangaUpdates from './MangaUpdates';
import PopularMangaUpdates from './PopularMangaUpdates';

const HomeScreen = () => {
  return (
    <ScrollView>
      <PopularMangaUpdates />
      <MangaUpdates />
    </ScrollView>
  );
};

export default HomeScreen;
