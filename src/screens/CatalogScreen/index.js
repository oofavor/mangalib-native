import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import MangaPreview from './MangaPreview';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { getCatalog, getCatalogMetadata } from '../../services';
import NavBar from './NavBar';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
const screenWidth = Dimensions.get('window').width - 10;

const CatalogScreen = ({ route }) => {
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [config, setConfig] = useState();
  const [sort, setSort] = useState('-rating');
  const [include, setInclude] = useState([]);
  const [exclude, setExclude] = useState([]);
  const [inProgressNetworkReq, setInProgressNetworkReq] = useState(false);
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    })
  );
  const [layoutProvider, setLayoutProvider] = useState(
    new LayoutProvider(
      () => 'VSEL',
      (_, dim) => {
        dim.width = screenWidth / 3;
        dim.height = 186;
      }
    )
  );

  useEffect(() => {
    fetchMore();
    getCatalogMetadata().then((res) => {
      for (const key in res) {
        // settings type for each item
        // for easier passing to fetchMore
        res[key] = res[key].map((item) => ({ ...item, type: key }));
      }
      setConfig(res);
    });
  }, []);

  useEffect(() => {
    if (route.params?.include) {
      setInclude(route.params.include);
      setExclude([]);
      setPage(1);
      setSort('-rating');
      setManga([]);
      setDataProvider(dataProvider.cloneWithRows([]));
    }
  }, [route.params]);

  useEffect(() => {
    setManga([]);
    setDataProvider(dataProvider.cloneWithRows([]));
    setPage(1);
    setAllLoaded(false);
  }, [sort, include, exclude]);

  const fetchMore = () => {
    if (allLoaded) return;
    if (!inProgressNetworkReq) {
      setInProgressNetworkReq(true);
      getCatalog(page, 50, sort, include, exclude).then((data) => {
        setInProgressNetworkReq(false);
        setManga((e) => e.concat(data));
        setDataProvider(dataProvider.cloneWithRows(manga.concat(data)));
        setPage((e) => e + 1);
        if (data.length === 0) {
          setAllLoaded(true);
        }
      });
    }
  };

  const rowRenderer = (_, data) => <MangaPreview manga={data} />;

  const renderFooter = () => {
    return inProgressNetworkReq ? (
      <ActivityIndicator style={{ margin: 10 }} size="large" color={'black'} />
    ) : (
      <View style={{ height: 60 }} />
    );
  };

  return (
    <>
      <RecyclerListView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginHorizontal: 5 }}
        onEndReached={fetchMore}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={renderFooter}
      />
      <NavBar
        config={config}
        setSort={setSort}
        sort={sort}
        setInclude={setInclude}
        include={include}
        setExclude={setExclude}
        exclude={exclude}
      />
    </>
  );
};

export default optimizeHeavyScreen(CatalogScreen);
