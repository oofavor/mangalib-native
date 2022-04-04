import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import faker from 'faker';
import MangaPreview from './MangaPreview';
import { getRecentTop } from '../../../services';
const MangaCarousel = () => {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    getRecentTop().then((data) => setManga(data));
  }, []);

  return (
    <FlatList
      data={manga}
      renderItem={({ item }) => <MangaPreview manga={item} />}
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      keyExtractor={(item, id) => id} // TODO: change to item.id in future
    />
  );
};

export default MangaCarousel;
