import React from 'react';
import { FlatList, View } from 'react-native';
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
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      keyExtractor={(item, id) => id} // !!! change to item.id in future
      // gap between
    />
  );
};

export default MangaCarousel;
