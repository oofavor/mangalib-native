import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';
import RippleButton from '../../../components/Button/RippleButton';
import Borderless from '../../../components/Button/Borderless';
import { useNavigation } from '@react-navigation/native';
import { useManga } from '../MangaContext';
import { getChapters } from '../../../services';
import BlankButton from '../../../components/Button/BlankButton';
import { ScrollView } from 'react-native';
import moment from 'moment';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
const screenWidth = Dimensions.get('window').width;
const ChaptersModule = () => {
  const manga = useManga();
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
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
        dim.width = screenWidth;
        dim.height = 57;
      }
    )
  );

  useEffect(() => {
    fetchMore();
  }, [manga]);

  const fetchMore = () => {
    if (manga?.branches && !inProgressNetworkReq) {
      setInProgressNetworkReq(true);
      getChapters(manga.branches[0].id, page).then((data) => {
        setPage((e) => e + 1);
        setInProgressNetworkReq(false);
        setChapters((e) => e.concat(data));
        setDataProvider(dataProvider.cloneWithRows(chapters.concat(data)));
        if (data.length === 0) setAllLoaded(true);
      });
    }
  };

  const rowRenderer = (_, data) => <ChapterPreview chapter={data} />;

  const renderFooter = () => {
    return inProgressNetworkReq ? (
      <ActivityIndicator style={{ margin: 10 }} size="large" color={'black'} />
    ) : (
      <View style={{ height: 60 }} />
    );
  };

  return (
    !!chapters.length && (
      <RecyclerListView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginHorizontal: 5 }}
        onEndReached={fetchMore}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={renderFooter}
      />
    )
  );
};

const ChapterPreview = ({ chapter }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <View
      style={{
        borderColor: theme.backgroundFill3,
        borderBottomWidth: 1,
      }}
    >
      <BlankButton
        style={styles.container}
        onPress={() =>
          navigation.navigate('MangaReaderScreen', { chapter: chapter.id })
        }
      >
        <Borderless style={styles.watchIcon}>
          <MaterialIcons
            name="remove-red-eye"
            size={22}
            color={theme.textMuted}
          />
        </Borderless>
        <View style={styles.mainInfoContainer}>
          <TextPrimary size={14}>
            Том {chapter.tome} Глава {chapter.chapter}
          </TextPrimary>
          <View style={styles.dataContainer}>
            <TextSecondary size={13}>
              {moment(new Date(chapter.upload_date)).locale('ru').fromNow()}
            </TextSecondary>
            <View style={styles.userContainer}>
              <MaterialIcons name="verified-user" color={theme.textMuted} />
              <TextSecondary size={13}> {chapter.user}</TextSecondary>
            </View>
          </View>
        </View>
        <Borderless style={styles.iconEdit}>
          <MaterialIcons name="edit" size={22} color={theme.textMuted} />
        </Borderless>
        <Borderless style={styles.downloadIcon}>
          <MaterialIcons
            name="file-download"
            size={22}
            color={theme.textMuted}
          />
        </Borderless>
      </BlankButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 7,
    paddingVertical: 2,
  },
  dataContainer: { flexDirection: 'row', alignItems: 'center' },
  iconEdit: {
    marginLeft: 'auto',
  },
  userContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  watchIcon: {
    marginLeft: 5,
  },
  mainInfoContainer: {
    paddingLeft: 10,
  },
  downloadIcon: {
    marginHorizontal: 10,
  },
  mainContainer: {
    borderTopWidth: 1,
  },
  sortContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 'auto',
    padding: 5,
  },
});

export default ChaptersModule;
