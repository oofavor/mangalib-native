import React, { useState } from 'react';
import { View } from 'react-native';
import { Section } from '../../../../components/Container';
import Chip from './GenreChip';
import Description from './Description';
import Table from './Table';
import Translators from './Translators';
import { useManga } from '../../MangaContext';
import Cover from './Cover';
import MediaInfo from './MediaInfo';
import useTheme from '../../../../hooks/useTheme';

const InfoGeneral = () => {
  const manga = useManga();
  const [hide, setHide] = useState(true);
  const { theme } = useTheme();

  const genres = [...manga?.genres, ...manga?.categories].filter((a) =>
    Boolean(a)
  );

  const renderItem = (e, idx) => {
    if (hide) {
      if (idx === 20) {
        return <Chip text={'...'} key={idx} onPress={() => setHide(false)} />;
      }
      if (idx > 20) {
        return null;
      }
    }
    return (
      <Chip
        text={e.name}
        key={idx}
        onPress={() => {
          // navigate to categories page with filter on genre
        }}
      />
    );
  };

  return (
    <Section style={{ marginTop: 0 }}>
      {/* Correction for Section styles */}
      <View style={{ marginHorizontal: -12, marginTop: -6 }}>
        <Cover />
        <MediaInfo />
        <View
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: theme.background,
          }}
        />
      </View>
      <Table />
      <Description />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {genres.map(renderItem)}
      </View>
      <Translators />
    </Section>
  );
};

export default InfoGeneral;
