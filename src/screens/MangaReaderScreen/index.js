import React, { useEffect, useState } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import * as StatusBar from 'expo-status-bar';
import {
  Image,
  VirtualizedList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getChapter } from '../../services';
import FastImage from 'react-native-fast-image';

const MangaReader = ({ route }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    StatusBar.setStatusBarHidden(true);
    getChapter(route?.params.chapter).then((e) =>
      setImages(e.pages.flat(Infinity))
    );
    console.log(route?.params.chapter);
    return () => {
      NavigationBar.setVisibilityAsync('visible');
      StatusBar.setStatusBarHidden(false);
    };
  }, []);

  return (
    <VirtualizedList
      contentContainerStyle={{ backgroundColor: 'black' }}
      removeClippedSubviews
      showsVerticalScrollIndicator={false}
      
      getItemCount={(data) => data.length}
      data={images}
      getItem={(data, idx) => data[idx]}
      renderItem={({ item }) => {
        return (
          <>
            <FastImage
              source={{ uri: item.link }}
              style={{
                aspectRatio: item.width / item.height,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <ActivityIndicator
              style={{
                position: 'absolute',
                top: '50%',
                left: '46%',
                zIndex: -1,
              }}
              size={50}
              color="orange"
            />
          </>
        );
      }}
    />
  );
};

export default MangaReader;
