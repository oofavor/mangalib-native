import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { baseUrl } from '../../../constants/urls';
import { TextPrimary } from '../../../components/Text';
import { BlankButton } from '../../../components/Button';

const MangaPreview = ({ manga }) => {
  const navigation = useNavigation();

  const imageSource = { uri: `${baseUrl}/${manga.img.mid}` };
  const shadows = ['transparent', 'rgba(0,0,0,.01)', 'rgba(0,0,0,.8)'];

  const navigateToManga = () =>
    navigation.navigate('TitleScreen', { title: manga.dir });

  return (
    <BlankButton style={styles.wrapper} onPress={navigateToManga}>
      <View style={styles.innerContainer}>
        <Image source={imageSource} style={styles.mangaImage} />
        <LinearGradient colors={shadows} style={styles.mangaShadow} />
        <TextPrimary style={styles.mangaText} numberOfLines={2}>
          Глава {manga.count_chapters}
        </TextPrimary>
      </View>
      <TextPrimary numberOfLines={2} style={styles.titleText}>
        {manga.rus_name}
      </TextPrimary>
    </BlankButton>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 110,
    paddingBottom: 5,
    borderRadius: 5,
    zIndex: 1,
    marginRight: 10,
  },
  mangaImage: {
    width: 110,
    height: 160,
    borderRadius: 5,
  },
  mangaShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  mangaText: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    left: 0,
    paddingLeft: 5,
    paddingBottom: 6,
    color: 'white',
    fontFamily: 'OpenSans400',
  },
  innerContainer: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: { marginVertical: 2 },
});

export default MangaPreview;
