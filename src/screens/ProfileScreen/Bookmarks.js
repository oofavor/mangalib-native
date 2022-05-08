import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useBookmarks from '../../hooks/useBookmarks';
import useTheme from '../../hooks/useTheme';
import MangaPreview from './MangaPreview';

const Bookmarks = ({ userId, type }) => {
  const { bookmarks, fetch, allLoaded, isLoading } = useBookmarks(userId, type);
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.foreground, marginTop: 4 }}>
      {bookmarks.map((item) => (
        <MangaPreview manga={item} key={item.id} />
      ))}
      <Button onPress={fetch}>Показать больше</Button>
    </View>
  );
};

export default Bookmarks;
