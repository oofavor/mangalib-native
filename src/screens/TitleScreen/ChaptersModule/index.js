import React from 'react';
import { Text, View } from 'react-native';
import { Section } from '../../../components/Container';
import Chapters from './Chapters';
import ChooseTranslation from './ChooseTranslation';
const ChaptersModule = (props) => {
  return (
    <Section style={{ paddingHorizontal: 0 }}>
      <View style={{ paddingHorizontal: 12 }}>
        <ChooseTranslation />
      </View>
      <Chapters />
    </Section>
  );
};

export default ChaptersModule;
