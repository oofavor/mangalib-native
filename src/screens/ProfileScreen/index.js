import { View, Image, ScrollView, Pressable, Text } from 'react-native';
import { TextPrimary, TextSecondary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';

const ProfileScreen = () => {
  const { theme } = useTheme();
  return (
    <ScrollView>
      <Header />
      <SearchBar />
      <Nav />
      <View style={{ backgroundColor: theme.foreground, marginTop: 4 }}>
        <MangaPreview />
        <MangaPreview />
        <MangaPreview />
        <MangaPreview />
        <MangaPreview />
        <MangaPreview />
      </View>
    </ScrollView>
  );
};

const uri =
  'https://api.remanga.org/media/titles/one_hundred_to_make_god/693ce5fef73a07dec62d9a15bdbcae2d.jpg';

const Header = () => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.foreground,
        shadowColor: 'black',
        shadowColor: theme.shadow,
        elevation: 1,
      }}
    >
      {/* Profile Background */}
      <Image style={{ width: '100%', minHeight: 160 }} source={{ uri }} />
      {/* Profile Info */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            aspectRatio: 1,
            width: 58,
            marginRight: 15,
            borderRadius: 5,
          }}
          source={{ uri }}
        />
        <View>
          <TextPrimary size={16} weight={600}>
            favorX
          </TextPrimary>
          <TextSecondary size={13}>
            Уровень 8 Ранг • #Не определен
          </TextSecondary>
        </View>
      </View>
      <Pressable
        style={{
          marginLeft: 10,
          marginTop: 6,
          marginBottom: 8,
          marginRight: 'auto',
          height: 26,
          borderRadius: 3,
          paddingHorizontal: 8,
          backgroundColor: theme.buttonDefaultBg,
          justifyContent: 'center',
        }}
      >
        <TextPrimary size={13} style={{ color: theme.buttonDefaultColor }}>
          Настройки
        </TextPrimary>
      </Pressable>
      <Pressable style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
        <TextSecondary size={14}>
          Показать информацию о пользователе
        </TextSecondary>
      </Pressable>
    </View>
  );
};

const SearchBar = () => {
  return <View style={{ height: 39 }}></View>;
};

const Nav = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 10 }}
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
    >
      <Tab num={194} active>
        Все
      </Tab>
      <Tab num={194}>Читаю</Tab>
      <Tab num={194}>В планах</Tab>
      <Tab num={194}>Брошено</Tab>
      <Tab num={194}>Прочитано</Tab>
      <Tab num={194}>Любимые</Tab>
    </ScrollView>
  );
};

const Tab = ({ children, num, active }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 3,
        backgroundColor: active && theme.foreground,
        flexDirection: 'row',
      }}
    >
      <TextPrimary size={14}>{children}</TextPrimary>
      <TextPrimary
        size={11}
        style={{
          color: theme.textMuted,
          marginLeft: 5,
          lineHeight: 20,
          textAlignVertical: 'center',
        }}
      >
        {num}
      </TextPrimary>
    </View>
  );
};

const MangaPreview = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: 'row',
      }}
    >
      <Image
        source={{ uri }}
        style={{ width: 60, height: 84, marginRight: 12, borderRadius: 3 }}
      />
      <View
        style={{
          borderBottomColor: theme.borderBase,
          borderBottomWidth: 1,
          marginBottom: -8,
          marginRight: -10,
          flex: 1,
        }}
      >
        <View
          style={{
            paddingVertical: 4,
            marginBottom: 8,
            flex: 1,
            marginRight: 10,
          }}
        >
          <Text style={{ marginRight: 5 }}>
            <TextPrimary weight={600} size={14}>
              Реинкарнация учёного
            </TextPrimary>
            <TextSecondary size={14}> / </TextSecondary>
            <TextSecondary size={12} weight={400}>
              Hagsajaesaeng
            </TextSecondary>
          </Text>
          <TextPrimary size={12} style={{ marginTop: 5 }}>
            Последняя глава 198
          </TextPrimary>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 'auto',
              justifyContent: 'space-between',
            }}
          >
            <TextSecondary>Продолжить [3-100]</TextSecondary>
            <TextPrimary>$</TextPrimary>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
