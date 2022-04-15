import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextPrimary, TextSecondary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import { BlankButton } from '../../components/Button';

// height - 94
const Notification = () => {
  const { theme } = useTheme();
  return (
    <BlankButton
      style={[styles.container, { borderBottomColor: theme.borderBase }]}
    >
      <Image
        style={styles.image}
        source={{
          uri: 'https://api.remanga.org/media/titles/one_hundred_to_make_god/693ce5fef73a07dec62d9a15bdbcae2d.jpg',
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.headerContainer}>
          <TextPrimary weight={600} size={14} style={styles.headerText}>
            Gl Group
          </TextPrimary>
          <TextSecondary size={14}>20 минут назад</TextSecondary>
        </View>
        <TextPrimary size={14}>Новая глава 56</TextPrimary>
        <TextPrimary size={14}>
          В тайтле{' '}
          <TextPrimary size={14} weight={600}>
            Игрок
          </TextPrimary>
        </TextPrimary>
      </View>
    </BlankButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 7,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  infoContainer: {
    paddingLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  headerText: { marginRight: 5 },
  image: {
    width: 50,
    minHeight: 70,
    borderRadius: 3,
  },
});

export default Notification;
