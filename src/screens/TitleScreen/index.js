import React, { useEffect, useState } from 'react';
import { getTitle } from '../../services';
import { MangaContext } from './MangaContext';
import Loading from '../../components/Placeholder/Loading';
import TitleNavigation from '../../navigation/TitleNavigation';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const TitleScreen = ({ route }) => {
  const [manga, setManga] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    getTitle(route.params.title).then((data) => {
      if (data.error) {
        Toast.show({
          type: 'error',
          text1: data.msg,
        });
        return navigation.goBack();
      }
      setManga(data);
    });
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

export default TitleScreen;
