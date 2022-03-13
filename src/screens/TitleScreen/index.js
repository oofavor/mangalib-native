import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Chapters from './ChaptersModule';
import Comments from './CommentsModule';
import Cover from './Navigation/Cover';
import Discussions from './DiscussionsModule';
import Info from './InfoModule';
import MediaInfo from './Navigation/MediaInfo';
import useTheme from '../../hooks/useTheme';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import {
  Segmented,
  SegmentedControl,
} from 'react-native-collapsible-segmented-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTitle } from '../../services';
import { MangaContext } from './MangaContext';
const TitleScreen = ({ route }) => {
  const [current, setCurrent] = useState(0);
  const navigation = useNavigation();
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const [manga, setManga] = useState({});

  useEffect(() => {
    getTitle(route.params.title).then((data) => setManga(data));
  }, []);
  return (
    <MangaContext.Provider value={manga}>
      <Segmented.View
        control={(props) => (
          <SegmentedControl
            {...props}
            appearance="light"
            fontStyle={{ fontSize: 13 }}
          />
        )}
        lazy
        header={(props) => (
          <View pointerEvents="none" {...props}>
            <Cover />
            <MediaInfo />
            <View
              style={{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: theme.background,
              }}
            />
          </View>
        )}
      >
        <Segmented.Segment label="Информация" component={Info} />
        <Segmented.Segment label="Главы" component={Chapters} />
        <Segmented.Segment label="Комментарии" component={Comments} />
        <Segmented.Segment label="Обсуждения" component={Discussions} />
      </Segmented.View>
    </MangaContext.Provider>
  );
};

export default optimizeHeavyScreen(TitleScreen);
