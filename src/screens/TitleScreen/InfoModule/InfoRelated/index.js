import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Section } from '../../../../components/Container';
import { Heading } from '../../../../components/Text';
import Preview from './Preview';

const data = [
  {
    name: 'Становление Богом (Новелла)',
    status: 'Завершён',
    url: 'https://staticlib.me/uploads/cover/bai-lian-cheng-shen/cover/BBzSQjuC22vV_thumb.jpg',
    type: 'Источник',
  },
  {
    name: 'Становление Богом (Новелла)',
    status: 'Завершён',
    url: 'https://staticlib.me/uploads/cover/bai-lian-cheng-shen/cover/BBzSQjuC22vV_thumb.jpg',
    type: 'Источник',
  },
];
const InfoRelated = (props) => {
  return (
    <Section>
      <Heading>Связанное</Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => <Preview data={item} />}
        horizontal
        pagingEnabled
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.99}
      />
    </Section>
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

export default InfoRelated;
