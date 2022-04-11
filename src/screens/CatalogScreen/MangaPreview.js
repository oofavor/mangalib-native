import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { TextPrimary } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../constants/urls';
import BlankButton from '../../components/Button/BlankButton';

const bookmarkColor = {
  Читаю: '#3cce7b',
  'Буду читать': 'yellow',
  Прочитано: 'orange',
  Отложено: 'blue',
  Брошено: 'violet',
  'Не интересно': 'grey',
};

const MangaPreview = ({ manga }) => {
  const navigation = useNavigation();
  return (
    <BlankButton
      style={styles.container}
      onPress={() => {
        navigation.navigate('TitleScreen', { title: manga.dir });
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${baseUrl}/${manga.img.mid}` }}
          style={styles.image}
        />
      </View>
      <LinearGradient
        colors={['rgba(0,0,0,.01)', 'rgba(0,0,0,.8)']}
        style={styles.shadow}
      />
      <View style={styles.infoContainer}>
        <TextPrimary style={{ color: 'white', marginBottom: 3 }} size={12}>
          {manga.type}
        </TextPrimary>
        <TextPrimary style={{ color: 'white' }} numberOfLines={2}>
          {manga.rus_name}
        </TextPrimary>
      </View>
      {manga.bookmark_type && (
        <View
          style={[
            styles.infoChip,
            { backgroundColor: bookmarkColor[manga.bookmark_type] },
          ]}
        >
          <TextPrimary style={{ color: '#fff' }} size={11}>
            {manga.bookmark_type}
          </TextPrimary>
        </View>
      )}
    </BlankButton>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 4, overflow: 'visible', position: 'relative' },
  imageContainer: {
    width: '100%',
    // aspectRatio: 0.7,
    overflow: 'hidden',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingTop: 39,
    paddingHorizontal: 9,
    paddingBottom: 9,
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  shadow: {
    position: 'absolute',
    left: 4,
    bottom: 4,
    right: 4,
    height: 110,
    borderRadius: 4,
  },
  infoChip: {
    position: 'absolute',
    top: 9,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 3,
    fontSize: 11,
  },
});
export default MangaPreview;
