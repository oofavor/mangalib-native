import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextPrimary, Heading } from '../../../components/Text';
import { Section } from '../../../components/Container';
import New from './New';

const News = () => {
  return (
    <Section>
      <Heading>Последние новости</Heading>
      <New />
      <New />
      <New />
      <New />
      <TouchableOpacity style={{ marginTop: 6 }}>
        <TextPrimary style={{ fontSize: 14 }}>Все новости {' >'}</TextPrimary>
      </TouchableOpacity>
    </Section>
  );
};
export default News;
