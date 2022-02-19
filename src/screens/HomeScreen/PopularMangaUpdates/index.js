import React from 'react';
import MangaCarousel from './MangaCarousel';
import { Section } from '../../../components/Container';
import { Heading } from '../../../components/Text';

const PopularMangaUpdates = () => {
  return (
    <Section>
      <Heading>Обновления популярной манги</Heading>
      <MangaCarousel />
    </Section>
  );
};

export default PopularMangaUpdates;
