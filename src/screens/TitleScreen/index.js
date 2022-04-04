import React, { useEffect, useState } from 'react';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { getTitle } from '../../services';
import { MangaContext } from './MangaContext';
import Loading from '../../components/Placeholder/Loading';
import TitleNavigation from '../../navigation/TitleNavigation';

const TitleScreen = ({ route }) => {
  const [manga, setManga] = useState();

  useEffect(() => {
    getTitle(route.params.title).then((data) => setManga(data));
  }, []);

  return (
    <>
      {manga ? (
        <MangaContext.Provider value={manga}>
          <TitleNavigation />
        </MangaContext.Provider>
      ) : (
        <Loading />
      )}
    </>
  );
};

{
  /* <Segmented.View
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
</Segmented.View>; */
}

export default optimizeHeavyScreen(TitleScreen, Loading);
