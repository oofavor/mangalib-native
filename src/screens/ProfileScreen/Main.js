import { Image, Pressable, StyleSheet, View } from 'react-native';
import { TextPrimary, TextSecondary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';

const Main = ({ user }) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.foreground,
        shadowColor: theme.shadow,
        elevation: 1,
      }}
    >
      {/* Profile Info */}
      <Image
        style={styles.imageOverlay}
        source={{
          uri: 'https://api.remanga.org/media/titles/one_hundred_to_make_god/693ce5fef73a07dec62d9a15bdbcae2d.jpg',
        }}
      />
      <View style={styles.info}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: 'https://api.remanga.org/media/titles/one_hundred_to_make_god/693ce5fef73a07dec62d9a15bdbcae2d.jpg',
          }}
        />
        <View>
          <TextPrimary size={16} weight={600}>
            {user.username}
          </TextPrimary>
          <TextSecondary size={13}>
            Уровень X Ранг • #Не определен
          </TextSecondary>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: theme.buttonDefaultBg,
          ...styles.button,
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

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    width: 58,
    marginRight: 15,
    borderRadius: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  button: {
    marginLeft: 10,
    marginTop: 6,
    marginBottom: 8,
    marginRight: 'auto',
    height: 26,
    borderRadius: 3,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  imageOverlay: {
    width: '100%',
    minHeight: 160,
  },
});

export default Main;
