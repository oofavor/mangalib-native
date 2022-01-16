import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import faker from 'faker';
import MangaPreview from './MangaPreview';
import HomeView from '../../../components/Home/HomeView';
import Divider from './Divider';

data = [
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
];

const MangaUpdates = () => {
  return (
    <HomeView>
      {data.map((item, idx) => (
        <View
          key={idx + faker.random.word()} // !!! change to item.id in the future
        >
          <MangaPreview manga={item} />
          {idx !== data.length - 1 && <Divider />}
        </View>
      ))}
    </HomeView>
  );
};

export default MangaUpdates;
