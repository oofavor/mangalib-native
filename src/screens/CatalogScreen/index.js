import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Text } from 'react-native';
import MangaPreview from './MangaPreview';
import { useNavigation } from '@react-navigation/native';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { getCatalog, getCatalogMetadata } from '../../services';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WaterfallList } from 'react-native-largelist';
import MangaPlaceholder from '../../components/Placeholder/MangaPlaceholder';
import useTheme from '../../hooks/useTheme';
import Animated, { FadeIn } from 'react-native-reanimated';
import NavBar from './NavBar';
import { CatalogContext } from './CatalogContext';
const { width } = Dimensions.get('screen');
const CatalogScreen = ({ route }) => {
  const ref = useRef();
  const navigation = useNavigation();
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [config, setConfig] = useState({ sort: '-rating' });

  useEffect(() => {
    fetchMore();
    getCatalogMetadata().then((res) => setConfig(res));
  }, []);

  useEffect(() => {
    setManga([]);
    setPage(0);
    fetchMore();
  }, [config]);

  const fetchMore = () => {
    if (allLoaded) return;
    getCatalog(page, 30, config).then((data) => {
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
      <NavBar setConfig={setConfig} config={config} />
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
