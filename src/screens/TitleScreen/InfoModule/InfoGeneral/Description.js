import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { TextPrimary } from '../../../../components/Text';
import { useManga } from '../../MangaContext';
import { decode } from 'html-entities';

const Description = () => {
  const manga = useManga();
  const [numLines, setNumLines] = useState(4);
  const [showMoreButton, setShowMoreButton] = useState(false);

  return (
    <View style={styles.container}>
      <TextPrimary
        size={14}
        numberOfLines={numLines}
        ellipsizeMode="clip"
        style={styles.text}
        onTextLayout={(e) => {
          setShowMoreButton(e.nativeEvent.lines.length > 4);
        }}
      >
        {/* Replaces html tags with ASCII alternatives */}
        {decode(manga.description)
          .replace(/\r\n/g, '<br />')
          .replace(/(<br \/>)/g, '\n')
          .replace(/\n+/g, '\n')
          .replace(/<p>/g, '')
          .replace(/<\/p>/g, '')
          .replace(/<strong>/g, '')
          .replace(/<\/strong>/g, '')}
      </TextPrimary>
      {showMoreButton && (
        <TouchableOpacity
          // sets numLines to 0 to show all text
          onPress={() => setNumLines((e) => (e === 4 ? 0 : 4))}
        >
          <TextPrimary size={14} style={styles.buttonLabel}>
            {numLines === 4 ? 'Подробнее...' : 'Свернуть'}
          </TextPrimary>
        </TouchableOpacity>
      )}
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
