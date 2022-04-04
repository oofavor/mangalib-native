import React, { useState, useEffect, useRef } from 'react';
import {
  FlatList,
  Modal,
  View,
  VirtualizedList,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import FilterModal from './FilterModal';
import MangaPreview from './MangaPreview';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { getCatalog } from '../../services';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LargeList, WaterfallList } from 'react-native-largelist';
import BigList from 'react-native-big-list';

const CatalogScreen = ({ route }) => {
  const ref = useRef();
  const navigation = useNavigation();
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    getCatalog(page, 30).then((data) => {
      if (ref.current) {
        ref.current.endLoading();
      }
      setManga((e) => e.concat(data));
    });
    setPage((e) => e + 1);
  };

  return (
    <WaterfallList
      ref={ref}
      data={manga}
      heightForItem={() => 186}
      renderItem={(item) => {
        return <MangaPreview manga={item} />;
      }}
      onEndReached={fetchMore}
      numColumns={3}
      onLoading={fetchMore}
      style={{ marginHorizontal: 4 }}
    />
  );
};

export default optimizeHeavyScreen(CatalogScreen);
