import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const MangaImage = ({ image, ...props }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: 110,
        height: 170,
        borderRadius: 4,
        ...props.style,
      }}
    />
  );
};

export default MangaImage;
