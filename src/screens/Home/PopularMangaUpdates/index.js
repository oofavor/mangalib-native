import React from 'react';
import Heading from '../../../components/Home/Heading';
import HomeView from '../../../components/Home/HomeView';
import MangaCarousel from './MangaCarousel';

const PopularMangaUpdates = () => {
  return (
    <HomeView>
      <Heading>Обновления популярной манги</Heading>
      <MangaCarousel />
    </HomeView>
  );
};

export default PopularMangaUpdates;
