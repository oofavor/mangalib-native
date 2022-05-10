import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextPrimary, TextSecondary } from '../../../../components/Text';
import { useManga } from '../../MangaContext';

const Table = () => {
  const manga = useManga();
  return (
    <View>
      <View style={styles.entry}>
        <TextSecondary size={14} style={styles.keyText}>
          Статус Тайтла
        </TextSecondary>
        <TextPrimary size={14}>{manga.status.name}</TextPrimary>
      </View>
      <View style={styles.entry}>
        <TextSecondary size={14} style={styles.keyText}>
          Статус перевода
        </TextSecondary>
        <TextPrimary size={14}>{manga.status.name}</TextPrimary>
      </View>
      <View style={styles.entry}>
        <TextSecondary size={14} style={styles.keyText}>
          Загружено Глав
        </TextSecondary>
        <TextPrimary size={14}>{manga.count_chapters}</TextPrimary>
      </View>
      <View style={styles.entry}>
        <TextSecondary size={14} style={styles.keyText}>
          Формат Выпуска
        </TextSecondary>
        <TextPrimary size={14}>{manga.type.name}</TextPrimary>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  keyText: {
    minWidth: 140,
  },
});

export default Table;
