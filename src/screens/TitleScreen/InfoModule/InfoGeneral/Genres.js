import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextPrimary } from '../../../../components/Text';
import useTheme from '../../../../hooks/useTheme';
import { useManga } from '../../MangaContext';
const Genres = () => {
  const navigation = useNavigation();
  const manga = useManga();
  const [hide, setHide] = useState(true);
  const { theme } = useTheme();
  const genres = [
    ...manga.genres.map((item) => ({ ...item, type: 'genres' })),
    ...manga.categories.map((item) => ({ ...item, type: 'categories' })),
  ];

  const renderItem = (e, idx) => {
    if (hide && idx > 20) {
      return null;
    }

    return (
      <TouchableOpacity
        key={e.type + e.id}
        style={[
          {
            borderColor: theme.borderBase,
            backgroundColor: theme.backgroundFill4,
          },
          styles.chip,
        ]}
        onPress={() =>
          hide && idx === 20
            ? setHide(!hide)
            : navigation.navigate('CatalogScreen', { include: [e] })
        }
      >
        <TextPrimary
          size={14}
          style={{ color: theme.text2, ...styles.genreText }}
        >
          {hide && idx === 20 ? '...' : e.name}
        </TextPrimary>
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{genres.map(renderItem)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  genreText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});

export default Genres;
