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
  const genres = [
    ...manga.genres.map((item) => ({ ...item, type: 'genres' })),
    ...manga.categories.map((item) => ({ ...item, type: 'categories' })),
  ];

  const onPress = (item, idx) =>
    hide && idx === 20
      ? setHide(!hide)
      : navigation.navigate('CatalogScreen', { include: [item] });

  const renderItem = (item, idx) =>
    (!hide || idx <= 20) && (
      <Genre
        info={item}
        onPress={() => onPress(item, idx)}
        isLast={hide && idx === 20}
        key={item.type + item.id}
      />
    );

  return <View style={styles.container}>{genres.map(renderItem)}</View>;
};

const Genre = ({ info, isLast, ...props }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        ...styles.chip,
        borderColor: theme.borderBase,
        backgroundColor: theme.backgroundFill4,
      }}
      {...props}
    >
      <TextPrimary size={14} color={theme.text2} style={styles.genreText}>
        {isLast ? '...' : info.name}
      </TextPrimary>
    </TouchableOpacity>
  );
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
