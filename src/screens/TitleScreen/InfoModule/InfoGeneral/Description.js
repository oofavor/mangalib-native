import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { TextPrimary } from '../../../../components/Text';
import { useManga } from '../../MangaContext';

const Description = () => {
  const [numLines, setNumLines] = useState(4);
  const manga = useManga();

  return (
    <View style={styles.container}>
      <TextPrimary
        size={14}
        numberOfLines={numLines}
        ellipsizeMode="clip"
        style={styles.text}
      >
        {/* Replaces html tags with ASCII alternatives */}
        {manga.description
          .replace(/(<br \/>)/g, '\n')
          .replace(/<p>/g, '')
          .replace(/<\/p>/g, '')}
      </TextPrimary>
      <TouchableOpacity onPress={() => setNumLines((e) => (e === 4 ? 0 : 4))}>
        <TextPrimary size={14} style={styles.buttonLabel}>
          {numLines === 4 ? 'Подробнее...' : 'Свернуть'}
        </TextPrimary>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    marginBottom: 16,
  },
  text: {
    lineHeight: 21,
  },
  buttonLabel: {
    color: 'orange',
  },
});

export default Description;
