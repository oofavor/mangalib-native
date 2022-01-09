import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import faker from 'faker';
import MangaPreview from './MangaPreview';

const data = Array.from(Array(10), () => ({
  name: faker.name.title(),
  image: faker.image.abstract(512, 512),
}));

const MangaCarousel = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MangaPreview manga={item} />}
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />} 
      // gap between
    />
  );
};

export default MangaCarousel;
