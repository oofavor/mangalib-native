import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text, TextPrimary, TextSecondary } from '../../components/Text';
import { baseUrl } from '../../constants/urls';
import useTheme from '../../hooks/useTheme';

const MangaPreview = ({ manga, loggedInUser }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const imageSource = { uri: `${baseUrl}${manga.title.img.mid}` };

  const navigateToManga = () =>
    navigation.push('TitleScreen', { title: manga.title.dir });
    
  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToManga}>
        <Image source={imageSource} style={styles.image} />
      </Pressable>
      <View
        style={{
          borderBottomColor: theme.borderBase,
          ...styles.infoContainer,
        }}
      >
        <Text style={{ marginRight: 5 }} numberOfLines={2}>
          <TextPrimary weight={600} size={14}>
            {manga.title['rus_name']}
          </TextPrimary>
          <TextSecondary size={14}> / </TextSecondary>
          <TextSecondary size={12} weight={400}>
            {manga.title['en_name']}
          </TextSecondary>
        </Text>
        <TextPrimary size={12} style={{ marginTop: 5 }}>
          Последняя глава {manga.title['count_chapters']}
        </TextPrimary>
        {loggedInUser && (
          <View style={styles.bottomInfo}>
            <TextSecondary>
              Продолжить [{manga['read_progress']}-
              {manga['read_progress_total']}]
            </TextSecondary>
            <TextPrimary>$</TextPrimary>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 84,
    marginRight: 12,
    borderRadius: 3,
  },
  infoContainer: {
    borderBottomWidth: 1,
    marginBottom: -8,
    marginRight: -10,
    paddingRight: 10,
    paddingVertical: 4,
    paddingBottom: 8,
    flex: 1,
  },
  bottomInfo: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
});

export default MangaPreview;
