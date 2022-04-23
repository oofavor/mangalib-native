import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import faker from 'faker';
import MangaPreview from './MangaPreview';
import Divider from './Divider';
import { Section } from '../../../components/Container';
import { getLatestChapters } from '../../../services';

// fake data, actuall data will be served later
data = [
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
  { image: faker.image.abstract(512, 512) },
];

const MangaUpdates = () => {
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    getLatestChapters().then((data) => {
      setChapters(data);
    });
  }, []);
  return (
    <Section>
      {chapters.map((manga, idx) => (
        <View
          key={manga.id} // !!! change to item.id in the future
        >
          <MangaPreview manga={manga} />
          {idx !== data.length - 1 && <Divider />}
        </View>
      ))}
    </Section>
  );
};

export default MangaUpdates;
