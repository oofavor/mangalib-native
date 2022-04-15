import React from 'react';
import { Image, StyleSheet, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { TextPrimary } from '../../../components/Text';
import { baseUrl } from '../../../constants/urls';
import BlankButton from '../../../components/Button/BlankButton';

const MangaPreview = ({ manga }) => {
  const navigation = useNavigation();
  
  return (
    <BlankButton
      style={styles.wrapper}
      onPress={() => navigation.navigate('TitleScreen', { title: manga.dir })}
    >
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: `${baseUrl}/${manga.img.mid}` }}
          style={styles.mangaImage}
        />
        <LinearGradient
          // shadow for image
          colors={['transparent', 'rgba(0,0,0,.01)', 'rgba(0,0,0,.8)']}
          style={styles.mangaShadow}
        />
        <TextPrimary style={styles.mangaText} numberOfLines={2}>
          Глава {manga.count_chapters}
        </TextPrimary>
      </View>
      <View style={{ marginVertical: 2 }}>
        <TextPrimary numberOfLines={2}>{manga.rus_name}</TextPrimary>
      </View>
    </BlankButton>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 110,
    paddingBottom: 5,
    borderRadius: 5,
    zIndex: 1,
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
});

export default MangaPreview;
