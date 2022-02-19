import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '../../../hooks/useTheme';
import Chip from './Chip';
import Table from './Table';
import faker from 'faker';
import { TextPrimary, TextSecondary } from '../../../components/Text';

const data = [
  faker.name.firstName(),
  faker.name.firstName(),
  faker.name.firstName(),
  faker.name.firstName(),
  faker.name.firstName(),
];
const MangaPreview = ({ manga }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.mangaWrapper}>
        <Image source={{ uri: manga.image }} style={styles.mangaImage} />
        <LinearGradient
          // shadow for image
          colors={['rgba(0,0,0,.8)', 'transparent', 'rgba(0,0,0,.01)']}
          style={styles.mangaShadow}
        />
        <TextPrimary style={styles.mangaText}>Манга</TextPrimary>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <View style={styles.infoWrapper}>
          <TextPrimary style={{ flex: 1 }} numberOfLines={1} fontWeight="600">
            Регрессия короля демонов, убивающего богов
          </TextPrimary>
          <Chip />
        </View>
        <View
          style={[
            styles.infoWrapper,
            {
              paddingBottom: 4,
              borderBottomColor: theme.primary,
              borderBottomWidth: 1,
            },
          ]}
        >
          <TextSecondary style={{ flex: 1 }} numberOfLines={1}>
            Регрессия короля демонов, убивающего богов
          </TextSecondary>
          <TextSecondary numberOfLines={1}>Вчера</TextSecondary>
        </View>
        <Table data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  mangaWrapper: { marginRight: 10 },
  mangaImage: {
    width: 80,
    height: 110,
    borderRadius: 4,
  },
  mangaShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 4,
    height: 110,
  },
  mangaText: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    paddingBottom: 8,
    color: 'white',
    textAlign: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {},
});

export default MangaPreview;
