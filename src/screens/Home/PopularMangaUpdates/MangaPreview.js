import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import PrimaryText from '../../../components/Home/PrimaryText';
import useTheme from '../../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

const MangaPreview = ({ manga }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate('Manga')}
    >
      <View style={{ height: 160 }}>
        <Image source={{ uri: manga.image }} style={styles.mangaImage} />
        <LinearGradient
          // shadow for image
          colors={['transparent', 'rgba(0,0,0,.01)', 'rgba(0,0,0,.8)']}
          style={styles.mangaShadow}
        />

        <PrimaryText style={styles.mangaText} numberOfLines={2}>
          Том 2 Глава 53
        </PrimaryText>
      </View>
      <View style={{ marginVertical: 2 }}>
        <PrimaryText numberOfLines={2}>Система Сильнейшей злодейки</PrimaryText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 110,
    paddingBottom: 5,
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
});

export default MangaPreview;
