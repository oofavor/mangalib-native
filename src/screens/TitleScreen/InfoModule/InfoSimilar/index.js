import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Section } from '../../../../components/Container';
import { Heading } from '../../../../components/Text';
import { getSimilar } from '../../../../services';
import { useManga } from '../../MangaContext';
import Preview from './Preview';

const InfoSimilar = () => {
  const manga = useManga();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (manga?.dir && !similar.length) {
      getSimilar(manga.dir).then((data) => {
        setSimilar(data);
      });
    }
  }, [manga]);

  return (
    <>
      {!!similar.length && (
        <Section>
          <Heading>Похожее</Heading>
          <FlatList
            data={similar}
            renderItem={({ item }) => <Preview data={item} />}
            horizontal
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.99}
            overScrollMode="never"
          />
        </Section>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  list: {
    margin: 0,
    padding: 0,
    marginTop: 0,
    paddingTop: 0,
  },
});
export default InfoSimilar;
