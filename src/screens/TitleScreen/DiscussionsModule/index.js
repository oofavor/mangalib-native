import React from 'react';
import { SpringScrollView } from 'react-native-spring-scrollview';
import { Section } from '../../../components/Container';
import Discussion from './Discussion';

const DiscussionsModule = (props) => {
  return (
    <SpringScrollView>
      <Section>
        <Discussion />
        <Discussion />
        <Discussion />
        <Discussion />
      </Section>
    </SpringScrollView>
  );
};

export default DiscussionsModule;
