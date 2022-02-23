import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Section } from '../../../../components/Container';
import { Heading } from '../../../../components/Text';
import Preview from './Preview';
const data = [
  {
    name: 'Становление Богом',
    status: 'Завершён',
    typeOf: 'Маньхуа',
    url: 'https://staticlib.me/uploads/cover/bai-lian-cheng-shen/cover/BBzSQjuC22vV_thumb.jpg',
    type: 'Схож по жанрам',
    count: 2,
  },
  {
    name: 'Становление Богом',
    status: 'Завершён',
    typeOf: 'Маньхуа',
    url: 'https://staticlib.me/uploads/cover/bai-lian-cheng-shen/cover/BBzSQjuC22vV_thumb.jpg',
    type: 'Схож по жанрам',
    count: 2,
  },
];
const InfoSimiliar = (props) => {
  return (
    <Section>
      <Heading>Похожее</Heading>
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
export default InfoSimiliar;
