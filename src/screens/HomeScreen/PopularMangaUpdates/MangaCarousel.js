import React, { useEffect, useState } from 'react';
import { LayoutAnimation, FlatList } from 'react-native';
import MangaPreview from './MangaPreview';
import { getRecentTop } from '../../../services';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import MangaPlaceholder from '../../../components/Placeholder/MangaPlaceholder';
import ContentLoader from 'react-content-loader/native';

const MangaCarousel = () => {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    getRecentTop().then((data) => {
      setManga(data);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(300, 'easeOut', 'opacity')
      );
    });
  }, []);

  return manga.length ? (
    <FlatList
      data={manga}
      horizontal
      overScrollMode="never"
      renderItem={({ item }) => <MangaPreview manga={item} key={item.id} />}
    />
  ) : (
    <Placeholder />
  );
};

const Placeholder = () => (
  <ContentLoader width={470} height={205}>
    <MangaPlaceholder x={0} y={0} />
    <MangaPlaceholder x={120} y={0} />
    <MangaPlaceholder x={240} y={0} />
    <MangaPlaceholder x={360} y={0} />
  </ContentLoader>
);

export default MangaCarousel;
