import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import useTheme from '../../../../hooks/useTheme';
import { useManga } from '../../MangaContext';
import {
  TextPrimary,
  TextSecondary,
  Heading,
} from '../../../../components/Text';

const MediaInfo = () => {
  const { theme } = useTheme();
  const manga = useManga();

  return (
    <View
      style={{
        backgroundColor: theme.foreground,
        ...styles.container,
      }}
    >
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Heading size={20} style={styles.titleText}>
          {manga?.rus_name}
        </Heading>
        <TextPrimary size={14} style={{ textAlign: 'center' }}>
          {manga?.en_name}
        </TextPrimary>
      </TouchableOpacity>
      <View style={{ marginTop: 8, flexDirection: 'row' }}>
        <TextSecondary size={15} color="red" style={styles.mark}>
          16+
        </TextSecondary>
        <TextSecondary size={15} style={styles.mark}>
          {manga?.issue_year} г.
        </TextSecondary>
        <TextSecondary size={15} style={styles.mark}>
          {manga?.type?.name}
        </TextSecondary>
        <View style={styles.metadateContainer}>
          <MaterialIcons name="star" color="#ffb300" size={17} />
          <TextSecondary weight={600} size={15}>
            {manga?.avg_rating}
          </TextSecondary>
          <TextSecondary size={12} style={styles.ratingCount}>
            [{manga.count_rating}]
          </TextSecondary>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 20,
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  titleText: {
    alignSelf: 'center',
    marginBottom: 2,
    fontSize: 20,
    textAlign: 'center',
  },
  mark: { padding: 5, paddingRight: 14 },
  metadateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingCount: {
    opacity: 0.7,
    paddingLeft: 5,
  },
});

export default MediaInfo;
