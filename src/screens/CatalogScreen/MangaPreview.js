import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { RippleButton } from '../../components/Button';
import { TextPrimary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
const url =
  'https://staticlib.me/uploads/cover/i-alone-level-up/cover/SiIlhsGKHZR5_250x350.jpg';
const MangaPreview = (props) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <RippleButton
      style={styles.container}
      onPress={() => navigation.navigate('Manga')}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <LinearGradient
        colors={['rgba(0,0,0,.01)', 'rgba(0,0,0,.8)']}
        style={styles.shadow}
      />
      <View style={styles.infoContainer}>
        <TextPrimary style={{ color: 'white', marginBottom: 3 }} size={12}>
          Манхва
        </TextPrimary>
        <TextPrimary style={{ color: 'white' }} numberOfLines={2}>
          Поднятие уровня в одиночку
        </TextPrimary>
      </View>
      <View style={styles.infoChip}>
        <TextPrimary style={{ color: '#fff' }} size={11}>
          Читаю
        </TextPrimary>
      </View>
    </RippleButton>
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
  container: { width: '33.3333%', padding: 4, overflow: 'visible' },
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
