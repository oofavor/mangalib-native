import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Animated, {
  Layout,
  SlideInDown,
  SlideInUp,
  SlideOutLeft,
} from 'react-native-reanimated';
import RippleButton from '../../../components/Button/RippleButton';
import Borderless from '../../../components/Button/Borderless';
import { useNavigation } from '@react-navigation/native';
import { useManga } from '../MangaContext';
import { getChapters } from '../../../services';
import { Segmented } from 'react-native-collapsible-segmented-view';
import ChooseTranslation from './ChooseTranslation';
import { Section } from '../../../components/Container';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

let data = [
  { name: 'Том 2 Глава 101', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 102', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 103', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 104', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 105', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 106', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 107', date: '12.12.2012', user: 'w' },
];

const ChaptersModule = () => {
  const manga = useManga();
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(1);
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  useEffect(() => {
    fetchMore();
  }, [manga]);

  let fetchMore = () => {
    if (manga?.branches) {
      getChapters(manga.branches[0].id, page).then((data) => {
        setChapters((e) => e.concat(data));
        if (data.length === 0) {
          fetchMore = () => {};
        }
      });
      setPage((e) => e + 1);
    }
  };
  return (
    <Segmented.FlatList
      extraData={fetchMore}
      removeClippedSubviews
      contentContainerStyle={{ backgroundColor: theme.foreground }}
      onEndReached={fetchMore}
      data={chapters}
      renderItem={({ item }) => <ChapterPreview chapter={item} />}
      ListHeaderComponent={() => (
        <View style={{ paddingTop: 12 }}>
          <View style={{ paddingHorizontal: 12 }}>
            <ChooseTranslation />
          </View>
          <View style={{ marginTop: 20 }}>
            <RippleButton
              onPress={() => {
                data = data.reverse();
              }}
              style={styles.sortContainer}
            >
              <MaterialIcons name="sort" size={18} />
              <TextPrimary size={16}>Сортировать</TextPrimary>
            </RippleButton>
          </View>
        </View>
      )}
      keyExtractor={(item, idx) => item.id}
    />
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
      <RippleButton
        style={styles.container}
        onPress={() => navigation.navigate('/reader', { chapter: chapter.id })}
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
              {new Date(chapter.upload_date).toLocaleDateString()}
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
      </RippleButton>
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
