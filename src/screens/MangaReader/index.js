import React, { useEffect, useState } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import * as StatusBar from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import { Image, StyleSheet } from 'react-native';

const MangaReader = () => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    StatusBar.setStatusBarHidden(true);
    fetch('https://api.remanga.org/api/titles/chapters/124287/')
      .then((res) => res.json())
      .then((res) => setImages(res.content.pages));
    return () => {
      NavigationBar.setVisibilityAsync('visible');
      StatusBar.setStatusBarHidden(false);
    };
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={images}
      renderItem={({ item }) => {
        return (
          <Image
            source={{ uri: item.link }}
            style={{
              aspectRatio: item.width / item.height,
            }}
          />
        );
      }}
    />
  );
};

export default MangaReader;
