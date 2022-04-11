import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import MangaPreview from './MangaPreview';
import { getRecentTop } from '../../../services';
import Animated, { FadeIn } from 'react-native-reanimated';
import MangaPlaceholder from '../../../components/Placeholder/MangaPlaceholder';
const MangaCarousel = () => {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    getRecentTop().then((data) => setManga(data));
  }, []);

  return (
    <ScrollView horizontal overScrollMode="never">
      {manga.map((item) => (
        <Animated.View
          style={{ marginRight: 10 }}
          key={item.id}
          entering={FadeIn}
        >
          <MangaPreview manga={item} />
        </Animated.View>
      ))}
      {manga.length === 0 && <Placeholder />}
    </ScrollView>
  );
};

const Placeholder = () => (
  <>
    <MangaPlaceholder />
    <View style={{ width: 10 }} />
    <MangaPlaceholder />
    <View style={{ width: 10 }} />
    <MangaPlaceholder />
  </>
);

export default MangaCarousel;
