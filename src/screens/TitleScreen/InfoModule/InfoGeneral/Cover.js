import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { baseUrl } from '../../../../constants/urls';
import { useManga } from '../../MangaContext';

const Cover = () => {
  const manga = useManga();
  return (
    <View style={{ width: 400, height: 340 }}>
      <ImageBackground
        style={{
          width: 400,
          height: 360,
          alignItems: 'center',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          position: 'absolute',
          backgroundColor: 'grey',
        }}
        source={{
          uri: `${baseUrl}/${manga?.img?.mid}`,
        }}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />
        <Image
          source={{
            uri: `${baseUrl}/${manga?.img?.high}`,
          }}
          style={{
            width: 220,
            borderRadius: 8,
            aspectRatio: 250 / 350,
            bottom: -10,
            position: 'absolute',
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Cover;
