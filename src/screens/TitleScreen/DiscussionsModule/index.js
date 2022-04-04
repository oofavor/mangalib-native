import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Segmented } from 'react-native-collapsible-segmented-view';
import { Tabs } from 'react-native-collapsible-tab-view';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
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
