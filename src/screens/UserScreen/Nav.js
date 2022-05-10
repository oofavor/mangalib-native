import ContentLoader, { Rect } from 'react-content-loader/native';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { TextPrimary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';

const Nav = ({ type, setType, bookmarksData }) => {
  console.log(bookmarksData?.bookmark_types ?? 'no data');
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 10 }}
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
    >
      {bookmarksData?.bookmark_types ? (
        bookmarksData?.bookmark_types?.map((bookmark, _) => (
          <Tab
            key={bookmark.id}
            num={bookmark.count}
            active={type === bookmark.id}
            onPress={() => setType(bookmark.id)}
          >
            {bookmark.name}
          </Tab>
        ))
      ) : (
        <Placeholder />
      )}
    </ScrollView>
  );
};

const Tab = ({ children, num, active, ...props }) => {
  const { theme } = useTheme();
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: active ? theme.foreground : 'transparent',
        ...styles.tabContainer,
      }}
    >
      <TextPrimary size={14}>{children}</TextPrimary>
      <TextPrimary
        size={11}
        style={{
          color: theme.textMuted,
          ...styles.tabButton,
        }}
      >
        {num}
      </TextPrimary>
    </Pressable>
  );
};

const Placeholder = () => {
  const { theme } = useTheme();
  return (
    <ContentLoader foregroundColor={theme.foreground} height={45} width={410}>
      <Rect x={0} y={10} width={90} height={30} rx={3} />
      <Rect x={100} y={10} width={100} height={30} rx={3} />
      <Rect x={210} y={10} width={80} height={30} rx={3} />
      <Rect x={300} y={10} width={90} height={30} rx={3} />
    </ContentLoader>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 3,
    flexDirection: 'row',
  },
  tabButton: { marginLeft: 5, lineHeight: 20, textAlignVertical: 'center' },
});

export default Nav;
