import React from 'react';
import { Text, View } from 'react-native';
import { Segmented } from 'react-native-collapsible-segmented-view';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { Section } from '../../../components/Container';
import Discussion from './Discussion';

const DiscussionsModule = (props) => {
  return (
    <Segmented.ScrollView>
      <Section>
        <Discussion />
        <Discussion />
        <Discussion />
        <Discussion />
      </Section>
    </Segmented.ScrollView>
  );
};

export default DiscussionsModule;
