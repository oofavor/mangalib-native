import React from 'react';
import { View } from 'react-native';
import faker from 'faker';
import MangaPreview from './MangaPreview';
import Divider from './Divider';
import { Section } from '../../../components/Container';

// fake data, actuall data will be served later
data = [
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
];

const MangaUpdates = () => {
  return (
    <Section>
      {data.map((item, idx) => (
        <View
          key={idx + faker.random.word()} // !!! change to item.id in the future
        >
          <MangaPreview manga={item} />
          {idx !== data.length - 1 && <Divider />}
        </View>
      ))}
    </Section>
  );
};

export default MangaUpdates;
