import React, { useState, useEffect, useMemo } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import ContentLoader, { Rect } from 'react-content-loader/native';

import MangaPreview from './MangaPreview';
import NavBar from './NavBar';
import ItemAnimator from './ItemAnimator';
import useTheme from '../../hooks/useTheme';
import useCatalog from '../../hooks/useCatalog';

const screenWidth = Dimensions.get('window').width - 10;

const CatalogScreen = ({ route }) => {
  const { theme } = useTheme();
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    })
  );
  const layoutProvider = useMemo(
    () =>
      new LayoutProvider(
        () => 'VSEL',
        (_, dim) => {
          // responsize... almost
          if (screenWidth > 700) {
            dim.width = screenWidth / 4;
            dim.height = (screenWidth / 4) * 1.2;
          } else {
            dim.width = screenWidth / 3;
            dim.height = (screenWidth / 3) * 1.3;
          }
        }
      ),
    []
  );

  const {
    sort,
    allLoaded,
    config,
    fetchMore,
    getExcluded,
    getIncluded,
    handleConfig,
    manga,
    inProgressNetworkReq,
    refetch,
    ordering,
    handleSort,
  } = useCatalog(setDataProvider);

  const rowRenderer = (_, data) => <MangaPreview manga={data} />;

  const renderFooter = () =>
    inProgressNetworkReq ? (
      <ActivityIndicator style={{ margin: 10 }} size="large" color={'black'} />
    ) : (
      <View style={{ height: 60 }} />
    );

  return (
    <View style={{ backgroundColor: theme.foreground, flex: 1 }}>
      {manga.length ? (
        <>
          <RecyclerListView
            style={{ flex: 1 }}
            contentContainerStyle={{ marginHorizontal: 5 }}
            onEndReached={fetchMore}
            dataProvider={dataProvider}
            layoutProvider={layoutProvider}
            rowRenderer={rowRenderer}
            renderFooter={renderFooter}
            itemAnimator={new ItemAnimator()}
          />
        </>
      ) : (
        <Placeholder />
      )}
      <NavBar
        config={config}
        handleConfig={handleConfig}
        getIncluded={getIncluded}
        refetch={refetch}
        handleSort={handleSort}
        ordering={ordering}
        sort={sort}
      />
    </View>
  );
};

const Placeholder = () => {
  const tileWidth = screenWidth / 3 - 5;
  const tileHeight = 175;
  const marginVertical = 6;
  const marginHorizontal = 4;
  const initHeight = 4;
  return (
    <ContentLoader>
      {Array.from(Array(5)).map((_, i) => (
        <React.Fragment key={i}>
          <Rect
            x={marginHorizontal}
            y={initHeight + tileHeight * i + marginVertical * i}
            width={tileWidth}
            height={tileHeight}
            rx={4}
          />
          <Rect
            x={marginHorizontal * 2 + screenWidth / 3}
            y={initHeight + tileHeight * i + marginVertical * i}
            width={tileWidth}
            height={tileHeight}
            rx={4}
          />
          <Rect
            x={marginHorizontal * 3 + (screenWidth / 3) * 2}
            y={initHeight + tileHeight * i + marginVertical * i}
            width={tileWidth}
            height={tileHeight}
            rx={4}
          />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};
export default optimizeHeavyScreen(CatalogScreen);
