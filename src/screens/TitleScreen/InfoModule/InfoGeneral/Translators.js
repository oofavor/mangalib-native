import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import useTheme from '../../../../hooks/useTheme';
import { useManga } from '../../MangaContext';
import { baseUrl } from '../../../../constants/urls';
import { RippleButton } from '../../../../components/Button/';
import { Heading, TextPrimary } from '../../../../components/Text';

const Translators = () => {
  const { theme } = useTheme();
  const manga = useManga();

  return (
    <View>
      <Heading style={styles.heading}>Переводчики</Heading>
      <ScrollView contentContainerStyle={styles.container} horizontal>
        {manga.publishers.map((item) => (
          <RippleButton
            key={item.id}
            style={{
              ...styles.chip,
              backgroundColor: theme.backgroundElevated2,
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: `${baseUrl}${item.img}` }}
            />
            <TextPrimary size={16} style={styles.text}>
              {item.name}
            </TextPrimary>
          </RippleButton>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 3,
    width: 30,
    aspectRatio: 1,
  },
  heading: {
    marginBottom: 0,
    marginTop: 10,
  },
});

export default Translators;
