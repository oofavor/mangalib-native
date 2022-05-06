import React, { useState, useEffect, useCallback } from 'react';
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
import { OptimizedHeavyScreen } from 'react-navigation-heavy-screen';

import useTheme from '../../../hooks/useTheme';
import useChapters from '../../../hooks/useChapters';
import { useManga } from '../MangaContext';
import { TextPrimary } from '../../../components/Text';
import ChapterPreview from './ChapterPreview';
import ChooseTranslation from './ChooseTranslation';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import ItemAnimator from '../../../utils/ItemAnimator';

const screenWidth = Dimensions.get('window').width;

const layoutProvider = new LayoutProvider(
  (idx) => (idx === 0 ? 'HEADER' : 'CHAPTER'),
  (idx, dim) => {
    dim.width = screenWidth;
    dim.height = idx === 'HEADER' ? 100 : 57;
  }
);

const ChaptersModule = () => {
  const { theme } = useTheme();
  const manga = useManga();

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => r1.id !== r2.id)
  );

  const onChapterChange = (chapters) =>
    setDataProvider((prev) => prev.cloneWithRows(['HEADER', ...chapters]));

  const {
    chapters,
    fetch,
    allLoaded,
    isLoading,
    isError,
    changeBranch,
    currentBranch,
  } = useChapters(manga.branches[0], onChapterChange);

  const rowRenderer = useCallback(
    (_, data) =>
      data === 'HEADER' ? (
        <ChooseTranslation
          changeBranch={changeBranch}
          currentBranch={currentBranch}
        />
      ) : (
        <ChapterPreview chapter={data} />
      ),
    [chapters]
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
    <Animated.View style={{ flex: 1, backgroundColor: theme.foreground }}>
      {chapters.length ? (
        <RecyclerListView
          contentContainerStyle={{ marginHorizontal: 5 }}
          onEndReached={fetch}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          rowRenderer={rowRenderer}
          renderFooter={renderFooter}
          renderAheadOffse={300}
          itemAnimator={new ItemAnimator()}
        />
      ) : (
        <Placeholder />
      )}
    </Animated.View>
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
