import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/ru'; // doesnt work without this line

import useTheme from '../../../hooks/useTheme';
import { baseUrl } from '../../../constants/urls';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import { BlankButton } from '../../../components/Button';
import Table from './Table';

const MangaPreview = ({ manga }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const imageSource = { uri: `${baseUrl}${manga.img.low}` };

  const navigateToManga = () => {
    navigation.navigate('TitleScreen', { title: manga.dir });
  };

  const getTimeFrom = () =>
    moment(Date.now() - manga.upload_date.toFixed(0))
      .locale('ru')
      .fromNow();

  return (
    <View style={styles.wrapper}>
      <BlankButton style={styles.mangaWrapper} onPress={navigateToManga}>
        <Image source={imageSource} style={styles.mangaImage} />
        {/* Add shadow here if API has type of manga */}
      </BlankButton>
      <View style={styles.flex}>
        <View style={styles.infoWrapper}>
          <TextPrimary style={styles.flex} numberOfLines={1} fontWeight="600">
            {manga.rus_name}
          </TextPrimary>
          {manga.is_hottest && (
            <TextPrimary style={styles.specialLabel}>популярное</TextPrimary>
          )}
        </View>
        <View
          style={{
            ...styles.infoWrapper,
            borderBottomColor: theme.primary,
            paddingBottom: 4,
            borderBottomWidth: 1,
          }}
        >
          <TextSecondary style={styles.flex} numberOfLines={1}>
            {manga.en_name}
          </TextSecondary>
          <TextSecondary numberOfLines={1} style={styles.timestamp}>
            {getTimeFrom()}
          </TextSecondary>
        </View>
        <Table data={[[manga.tome, manga.chapter, manga.name]]} />
      </View>
    </View>
  );
};

// shadow for image
/* 
<LinearGradient
  colors={['rgba(0,0,0,.8)', 'transparent', 'rgba(0,0,0,.01)']}
  style={styles.mangaShadow}
/>
<TextPrimary style={styles.mangaText}>Манга</TextPrimary> 
*/

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  mangaWrapper: { marginRight: 10 },
  mangaImage: {
    width: 80,
    height: 110,
    resizeMode: 'cover',
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
  specialLabel: {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: 5,
    fontSize: 10,
    justifyContent: 'center',
  },
  flex: { flex: 1 },
  timestamp: {
    marginLeft: 5,
  },
});

export default MangaPreview;
