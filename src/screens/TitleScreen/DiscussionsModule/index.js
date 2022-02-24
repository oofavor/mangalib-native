import React from 'react';
import { Text, View } from 'react-native';
import { Section } from '../../../components/Container';
import Discussion from './Discussion';

const DiscussionsModule = (props) => {
  return (
    <Section>
      <Discussion />
      <Discussion />
      <Discussion />
      <Discussion />
    </Section>
  );
};

export default DiscussionsModule;
