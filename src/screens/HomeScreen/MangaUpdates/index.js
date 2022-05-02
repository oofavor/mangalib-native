import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { getLatestChapters } from '../../../services';
import { Section } from '../../../components/Container';
import { TextPrimary } from '../../../components/Text';
import MangaPreview from './MangaPreview';

const MangaUpdates = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getLatestChapters().then((data) => {
      setChapters(data);
    });
  }, []);

  return (
    <Section>
      <TextPrimary size={17} weight={600}>
        Обновления Манги
      </TextPrimary>
      {chapters.map((manga, idx) => (
        <View key={manga.id}>
          <MangaPreview manga={manga} />
          {idx !== chapters.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
      {!chapters.length && <Placeholder />}
    </Section>
  );
};

const Placeholder = () => {
  return (
    <ContentLoader width={700} height={480}>
      {Array.from(Array(4)).map((_, idx) => (
        <React.Fragment key={idx}>
          <Rect x={-5} y={10 + 120 * idx} width={86} height={110} rx={4} />
          <Rect x={90} y={15 + 120 * idx} width={200} height={11} rx={4} />
          <Rect x={90} y={34 + 120 * idx} width={120} height={11} rx={4} />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
});

export default MangaUpdates;
