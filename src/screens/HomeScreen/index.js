import React from 'react';
import { ScrollView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Footer from './Footer';
import MangaUpdates from './MangaUpdates';
import News from './News';
import PopularMangaUpdates from './PopularMangaUpdates';

const Home = () => {
  const { theme } = useTheme();

  return (
    <ScrollView>
      <PopularMangaUpdates />
      <News />
      <News />
      <MangaUpdates />
      <Footer />
    </ScrollView>
  );
};

export default Home;
