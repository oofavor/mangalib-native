import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import useTheme from '../../../hooks/useTheme';
import { TextPrimary } from '../../../components/Text';
import { RectButton } from 'react-native-gesture-handler';
import { RippleButton } from '../../../components/Button';

const MangaPreview = ({ manga }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <RippleButton
      style={styles.wrapper}
      rippleColor={theme.primary}
      onPress={() => {
        console.log('123');
        navigation.navigate('Manga');
      }}
      underlayColor="black"
    >
      <View
        style={{
          height: 160,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={{ uri: manga.image }} style={styles.mangaImage} />
        <LinearGradient
          // shadow for image
          colors={['transparent', 'rgba(0,0,0,.01)', 'rgba(0,0,0,.8)']}
          style={styles.mangaShadow}
        />

        <TextPrimary style={styles.mangaText} numberOfLines={2}>
          Том 2 Глава 53
        </TextPrimary>
      </View>
      <View style={{ marginVertical: 2 }}>
        <TextPrimary numberOfLines={2}>Система Сильнейшей злодейки</TextPrimary>
      </View>
    </RippleButton>
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
