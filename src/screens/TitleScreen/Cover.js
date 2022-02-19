import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, } from 'react-native';

const Cover = (props) => {
  return (
    <ImageBackground
      style={{
        position: 'absolute',
        width: 400,
        height: 390,
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
      source={{
        uri: 'https://media.istockphoto.com/photos/st-basils-cathedral-picture-id502362300?k=20&m=502362300&s=612x612&w=0&h=BXAIKqtQV5VhhtBaXh6jL5d7qmNHSWYsDZgHTQhuQtM=',
      }}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          borderRadius: 4,
          height: '100%',
        }}
      />
      <Image
        source={{
          uri: 'https://staticlib.me/uploads/cover/aeneulg-eun-i/cover/rduoXvpitrSz_250x350.jpg',
        }}
        style={{
          width: 220,
          borderRadius: 8,
          aspectRatio: 250 / 350,
          bottom: -10,
        }}
      />
    </ImageBackground>
  );
};

export default Cover;
