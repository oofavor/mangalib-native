import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions } from 'react-native';
import MangaPreview from './MangaPreview';
import { useNavigation } from '@react-navigation/native';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { getCatalog } from '../../services';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WaterfallList } from 'react-native-largelist';
import MangaPlaceholder from '../../components/Placeholder/MangaPlaceholder';
import useTheme from '../../hooks/useTheme';
import Animated, { FadeIn } from 'react-native-reanimated';
const { width } = Dimensions.get('screen');
const CatalogScreen = ({ route }) => {
  const ref = useRef();
  const navigation = useNavigation();
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const insets = useSafeAreaInsets();
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    if (allLoaded) return;
    getCatalog(page, 30).then((data) => {
      ref.current?.endLoading();
      setManga((e) => e.concat(data));
      if (data.length === 0) {
        setAllLoaded(true);
      }
    });
    setPage((e) => e + 1);
  };

  return (
    <>
      {allLoaded || manga.length !== 0 ? (
        <WaterfallList
          ref={ref}
          data={manga}
          heightForItem={() => 186}
          renderItem={(item) => <MangaPreview manga={item} />}
          onEndReached={fetchMore}
          numColumns={3}
          onLoading={fetchMore}
          style={{ marginHorizontal: 4 }}
          allLoaded={allLoaded}
        />
      ) : (
        <Placeholder />
      )}
    </>
  );
};

const Placeholder = () => {
  const { theme } = useTheme();
  return (
    <View style={{ backgroundColor: theme.foreground, marginTop: 10 }}>
      {Array.from(Array(5)).map((_, idx) => (
        <View
          key={idx}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          <MangaPlaceholder />
          <View style={{ width: 20 }} />
          <MangaPlaceholder />
          <View style={{ width: 20 }} />
          <MangaPlaceholder />
        </View>
      ))}
    </View>
  );
};
export default optimizeHeavyScreen(CatalogScreen);
