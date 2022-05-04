import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

import useTheme from '../../../hooks/useTheme';
import useChapters from '../../../hooks/useChapters';
import { useManga } from '../MangaContext';
import { TextPrimary } from '../../../components/Text';
import ChapterPreview from './ChapterPreview';
import ChooseTranslation from './ChooseTranslation';

const screenWidth = Dimensions.get('window').width;

const layoutProvider = new LayoutProvider(
  () => 'YES',
  (_, dim) => {
    dim.width = screenWidth;
    dim.height = 57;
  }
);

const ChaptersModule = () => {
  const { theme } = useTheme();
  const manga = useManga();

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => r1.id !== r2.id)
  );

  const onChapterChange = (chapters) =>
    setDataProvider((prev) => prev.cloneWithRows(chapters));

  const { chapters, fetch, allLoaded, isLoading, isError } = useChapters(
    manga.branches[0],
    onChapterChange
  );

  useEffect(() => {
    fetch().then(() => {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(300, 'easeIn', 'opacity')
      );
    });
  }, []);

  const rowRenderer = (_, data) =>
    data === 'HEADER' ? (
      <ChooseTranslation />
    ) : (
      <ChapterPreview chapter={data} />
    );

  const renderFooter = () =>
    isError ? (
      <TouchableOpacity style={styles.footer} onPress={fetch}>
        <TextPrimary color={theme.primary}>Попробовать снова</TextPrimary>
      </TouchableOpacity>
    ) : isLoading ? (
      <ActivityIndicator style={styles.footer} size="large" color="black" />
    ) : allLoaded ? (
      <View style={styles.footer}>
        <TextPrimary color={theme.textMuted}>Больше ничего...</TextPrimary>
      </View>
    ) : (
      <View style={styles.footer} />
    );

  return (
    <View style={{ flex: 1, backgroundColor: theme.foreground }}>
      {chapters.length ? (
        <RecyclerListView
          style={{ flex: 1 }}
          contentContainerStyle={{ marginHorizontal: 5 }}
          onEndReached={fetch}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          rowRenderer={rowRenderer}
          renderFooter={renderFooter}
          applyWindowCorrection={(offsetX, offsetY, windowCorrection) => {
            windowCorrection.windowShift = 80;
            windowCorrection.startCorrection = -120;
            windowCorrection.endCorrection = 65;
          }}
        />
      ) : (
        <Placeholder />
      )}
    </View>
  );
};

const Placeholder = () => {
  return (
    <ContentLoader>
      {Array.from(Array(20)).map((_, i) => (
        <React.Fragment key={i}>
          <Circle cx={32} cy={32 + 50 * i} r={16} />
          <Rect
            x={60}
            y={16 + 50 * i}
            width={200 * (Math.random() + 0.1)}
            height={10}
            rx={3}
          />
          <Rect x={60} y={34 + 50 * i} width={120} height={10} rx={3} />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default ChaptersModule;
