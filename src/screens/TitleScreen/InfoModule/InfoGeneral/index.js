import React from 'react';
import { View } from 'react-native';

import { Section } from '../../../../components/Container';
import Description from './Description';
import Table from './Table';
import Translators from './Translators';
import Cover from './Cover';
import MediaInfo from './MediaInfo';
import useTheme from '../../../../hooks/useTheme';
import Genres from './Genres';

const InfoGeneral = () => {
  return (
    <Section style={{ marginTop: 0 }}>
      {/* Correction for Section styles */}
      <View
        style={{
          marginHorizontal: -12,
          marginTop: -6,
          borderBottomWidth: 1,
          borderBottomColor: 'red',
        }}
      >
        <Cover />
        <MediaInfo />
      </View>
      <Table />
      <Description />
      <Genres />
      <Translators />
    </Section>
  );
};

export default InfoGeneral;
