import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Modal,
  View,
  VirtualizedList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import FilterModal from './FilterModal';
import MangaPreview from './MangaPreview';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { getCatalog } from '../../services';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CatalogScreen = ({ route }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [checked, setChecked] = useState('none');
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    getCatalog(page, 30).then((data) => {
      setManga((e) => e.concat(data));
    });
    setPage((e) => e + 1);
  };
  return (
    <View style={{ backgroundColor: theme.foreground }}>
      <VirtualizedList
        removeClippedSubviews
        extraData={[page, manga]}
        windowSize={5}
        getItemCount={(data) => manga.length}
        data={manga}
        renderItem={({ item, index }) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            {item.map((elem, i) => (
              <MangaPreview manga={elem} key={i} />
            ))}
          </View>
        )}
        getItem={(data, idx) => {
          let items = [];
          for (let i = 0; i < 4; i++) {
            const item = data[idx * 4 + i];
            item && items.push(item);
          }
          return items;
        }}
        numColumns={3}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <ActivityIndicator
            style={{
              color: '#000',
              height: insets.bottom + 52,
              marginTop: 4,
              alignSelf: 'center',
              justifyContent: 'flex-start',
            }}
            color="orange"
            size={30}
          />
        )}
        onEndReached={fetchMore}
        onEndReachedThreshold={0}
      />
      <NavBar setShowFilter={() => navigation.navigate('Filter')} />
    </View>
  );
};

export default optimizeHeavyScreen(CatalogScreen);
