import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Section } from '../../../../components/Container';
import {
  Heading,
  TextPrimary,
  TextSecondary,
} from '../../../../components/Text';
import Line from './Line';

const data = {
  1: {
    num: 40958,
    percent: 47.1,
    grade: 'Читаю',
  },
  2: {
    num: 27090,
    percent: 31.2,
    grade: 'В планах',
  },
  3: {
    num: 8699,
    percent: 10,
    grade: 'Брошено',
  },
  4: {
    num: 1634,
    percent: 1.9,
    grade: 'Прочитано',
  },
  5: {
    num: 3974,
    percent: 4.4,
    grade: 'Любимые',
  },
  6: {
    num: 4788,
    percent: 5.5,
    grade: 'Другое',
  },
};
const InfoCount = (props) => {
  return (
    <Section>
      <Heading>В списках у 86963 человек</Heading>
      <Line {...data[1]} />
      <Line {...data[2]} />
      <Line {...data[3]} />
      <Line {...data[4]} />
      <Line {...data[5]} />
      <Line {...data[6]} />
    </Section>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRightContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    justifyContent: 'flex-start',
    textAlignVertical: 'bottom',
  },
});
export default InfoCount;
