import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { RippleButton } from '../../components/Button';
import { TextPrimary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../constants/urls';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
const MangaPreview = ({ manga }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      unstable_pressDelay={300}
      style={styles.container}
      onPress={(e) => {
        console.log(e.isTrusted);
        navigation.navigate('Manga', { title: manga.dir });
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
      <View style={styles.infoChip}>
        <TextPrimary style={{ color: '#fff' }} size={11}>
          Читаю
        </TextPrimary>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    aspectRatio: 0.7,
    overflow: 'hidden',
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
    height: 110,
    width: '100%',
    borderRadius: 4,
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
  container: { flex: 1, padding: 4, overflow: 'visible' },
  infoChip: {
    position: 'absolute',
    top: 9,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 3,
    fontSize: 11,
    backgroundColor: '#3cce7b',
  },
});
export default MangaPreview;
