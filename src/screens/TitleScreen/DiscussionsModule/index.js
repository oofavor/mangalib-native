import React from 'react';
import { ScrollView } from 'react-native';
import { Section } from '../../../components/Container';
import Discussion from './Discussion';

const DiscussionsModule = (props) => {
  return (
    <ScrollView>
      <Section>
        <Discussion />
        <Discussion />
        <Discussion />
        <Discussion />
      </Section>
    </ScrollView>
  );
};

export default DiscussionsModule;
