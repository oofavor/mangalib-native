import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Section } from '../../../components/Container';
import { Ionicons } from '@expo/vector-icons';
import { TextPrimary, TextSecondary, Heading } from '../../../components/Text';

// should be replaced with api request
const news = ['Новость 1', 'Новость 2', 'Новость 3', 'Новость 4', 'Новость 5'];

const News = () => {
  return (
    <Section>
      <Heading>Последние новости</Heading>
      {news.map((item, index) => (
        <TouchableOpacity style={{ marginBottom: 6 }} key={index}>
          <TextPrimary style={{ fontSize: 14, marginBottom: 2 }}>
            {item}
          </TextPrimary>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              name="person"
              size={11}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <TextSecondary style={{ marginRight: 12 }}>pepe</TextSecondary>
            <TextSecondary>1 неделю назад</TextSecondary>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={{ marginTop: 6 }}>
        <TextPrimary style={{ fontSize: 14 }}>Все новости {' >'}</TextPrimary>
      </TouchableOpacity>
    </Section>
  );
};
export default News;
