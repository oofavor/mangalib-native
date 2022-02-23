import React from 'react';
import { View } from 'react-native';
import { Section } from '../../../../components/Container';
import Chip from './GenreChip';
import Description from './Description';
import Table from './Table';
import Translators from './Translators';

const InfoGeneral = (props) => {
  return (
    <Section style={{ marginTop: 0 }}>
      <Table />
      <Description />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from(Array(20)).map((e) => (
          <Chip text="Жанр" />
        ))}
      </View>
      <Translators />
    </Section>
  );
};

export default InfoGeneral;
