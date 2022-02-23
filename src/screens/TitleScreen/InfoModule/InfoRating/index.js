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
    color: '#f17a54',
    num: 360,
    percent: 5.9,
    grade: 1,
  },
  2: {
    color: '#fbb851',
    num: 140,
    percent: 2.3,
    grade: 2,
  },
  3: {
    color: '#f6d757',
    num: 190,
    percent: 3.1,
    grade: 3,
  },
  4: {
    color: '#b7ea83',
    num: 280,
    percent: 4.6,
    grade: 4,
  },
  5: {
    color: '#76db98',
    num: 5094,
    percent: 84,
    grade: 5,
  },
};
const InfoRating = (props) => {
  return (
    <Section>
      <View style={styles.headingContainer}>
        <Heading>Оценки пользователей</Heading>
        <View style={styles.headerRightContainer}>
          <MaterialIcons size={16} name="star" color="orange"></MaterialIcons>
          <TextPrimary size={14} weight={600}>
            4.58
          </TextPrimary>
          <TextSecondary size={13} style={{ textAlignVertical: 'bottom' }}>
            {' '}
            6.1k
          </TextSecondary>
        </View>
      </View>
      <Line {...data[5]} />
      <Line {...data[4]} />
      <Line {...data[3]} />
      <Line {...data[2]} />
      <Line {...data[1]} />
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
export default InfoRating;
