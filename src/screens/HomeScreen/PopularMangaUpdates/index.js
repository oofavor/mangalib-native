import React, { useEffect, useState } from 'react';
import { LayoutAnimation, FlatList } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { getRecentTop } from '../../../services';
import { Section } from '../../../components/Container';
import { Heading } from '../../../components/Text';
import MangaPreview from './MangaPreview';

const PopularMangaUpdates = () => {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    getRecentTop().then((data) => {
      setManga(data);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(300, 'easeOut', 'opacity')
      );
    });
  }, []);

  const renderItem = ({ item }) => <MangaPreview manga={item} key={item.id} />;

  return (
    <Section>
      <Heading>Обновления популярной манги</Heading>
      {manga.length ? (
        <FlatList
          data={manga}
          horizontal
          overScrollMode="never"
          renderItem={renderItem}
        />
      ) : (
        <Placeholder />
      )}
    </Section>
  );
};

const Placeholder = () => (
  <ContentLoader width={470} height={205}>
    {Array.from(Array(4)).map((_, idx) => (
      <React.Fragment key={idx}>
        <Rect height={160} width={110} rx={5} x={120 * idx} y={0} />
        <Rect height={10} width={110} rx={5} x={120 * idx} y={170} />
      </React.Fragment>
    ))}
  </ContentLoader>
);

export default PopularMangaUpdates;
