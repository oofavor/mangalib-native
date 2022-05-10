import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useBookmarks from '../../hooks/useBookmarks';
import useTheme from '../../hooks/useTheme';
import MangaPreview from './MangaPreview';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

const Bookmarks = ({ userId, type, setBookmarksData, loggedInUser }) => {
  const { bookmarks, fetch, allLoaded, isLoading } = useBookmarks(
    userId,
    type,
    setBookmarksData
  );
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.foreground, marginTop: 4 }}>
      {bookmarks.length > 0 || allLoaded ? (
        bookmarks.map((item) => (
          <MangaPreview
            manga={item}
            key={item.id}
            loggedInUser={loggedInUser}
          />
        ))
      ) : (
        <Placeholder />
      )}
    </View>
  );
};

const Placeholder = () => {
  return (
    <ContentLoader height={500}>
      {Array.from(new Array(5)).map((_, index) => (
        <React.Fragment key={index}>
          <Rect x={16} y={10 + 90 * index} width={60} height={80} rx={3} />
          <Rect x={90} y={20 + 90 * index} width={220} height={16} rx={3} />
          <Rect x={90} y={40 + 90 * index} width={140} height={12} rx={3} />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

export default Bookmarks;
