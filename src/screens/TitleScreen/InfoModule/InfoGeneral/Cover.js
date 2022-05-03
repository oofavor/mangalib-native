import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { baseUrl } from '../../../../constants/urls';
import { useManga } from '../../MangaContext';

const Cover = () => {
  const manga = useManga();
  const imageSource = { uri: `${baseUrl}/${manga.img?.high}` };
  const shadow = ['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)'];

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={imageSource}>
        <LinearGradient colors={shadow} style={styles.shadow} />
        <Image source={imageSource} style={styles.image} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 340,
  },
  backgroundImage: {
    width: '100%',
    height: 360,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: 'grey',
  },
  shadow: { position: 'absolute', left: 0, right: 0, top: 0, height: '100%' },
  image: {
    width: 220,
    borderRadius: 8,
    aspectRatio: 250 / 350,
    bottom: -10,
    position: 'absolute',
  },
});
export default Cover;
