import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';

import useTheme from '../../../hooks/useTheme';
import { Section } from '../../../components/Container';
import { Heading, TextPrimary, TextSecondary } from '../../../components/Text';
import { RippleButton } from '../../../components/Button';

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

const InfoRelated = () => {
  const renderItem = ({ item }) => <Preview data={item} />;

  return (
    <Section>
      <Heading>Связанное</Heading>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.99}
      />
    </Section>
  );
};

const Preview = ({ data }) => {
  const { theme } = useTheme();

  const imageSource = { uri: data.url };
  return (
    <RippleButton
      style={[styles.container, { backgroundColor: theme.backgroundElevated2 }]}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <TextPrimary style={styles.text1}>Источник</TextPrimary>
        <TextPrimary size={16} weight={600} style={styles.title}>
          {data.name}
        </TextPrimary>
        <TextSecondary style={styles.bottomText} size={14}>
          {data.status}
        </TextSecondary>
      </View>
    </RippleButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    width: 330,
    height: 120,
    margin: 5,
  },
  image: {
    width: 85,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text1: {
    color: '#007feb',
    marginBottom: 3,
  },
  infoContainer: {
    paddingVertical: 7,
    paddingLeft: 10,
  },
  bottomText: {
    marginTop: 'auto',
  },
  title: {
    flexWrap: 'wrap',
    width: 230,
  },
  list: {
    margin: 0,
    padding: 0,
    marginTop: 0,
    paddingTop: 0,
  },
});

export default InfoRelated;
