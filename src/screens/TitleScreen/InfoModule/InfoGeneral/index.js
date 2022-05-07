import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Section } from '../../../../components/Container';
import Description from './Description';
import Table from './Table';
import Translators from './Translators';
import Cover from './Cover';
import MediaInfo from './MediaInfo';
import useTheme from '../../../../hooks/useTheme';
import Genres from './Genres';

const InfoGeneral = () => {
  const { theme } = useTheme();
  return (
    <Section>
      <View
        style={{
          ...styles.alignment,
          borderBottomColor: theme.borderBase,
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

const styles = StyleSheet.create({
  alignment: {
    marginHorizontal: -12,
    marginTop: -6,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});

export default InfoGeneral;
