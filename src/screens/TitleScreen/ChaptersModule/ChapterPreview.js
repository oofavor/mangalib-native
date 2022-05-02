import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

import useTheme from '../../../hooks/useTheme';
import { Borderless, BlankButton } from '../../../components/Button';
import { TextPrimary, TextSecondary } from '../../../components/Text';

const ChapterPreview = ({ chapter }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const navigateToReader = () =>
    navigation.navigate('MangaReaderScreen', { chapter: chapter.id });

  // Time with correction to Moscow time
  const getTimeFrom = () =>
    moment(new Date(chapter.upload_date) - 3600 * 1000 * 3)
      .locale('ru')
      .fromNow();

  return (
    <View
      style={{
        borderColor: theme.backgroundFill3,
        borderBottomWidth: 1,
      }}
    >
      <BlankButton style={styles.container} onPress={navigateToReader}>
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
            <TextSecondary size={13}>{getTimeFrom()}</TextSecondary>
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

export default ChapterPreview;
