import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Section } from '../../../components/Container';
import { Heading, TextPrimary, TextSecondary } from '../../../components/Text';

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
const InfoRating = () => {
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
const Line = ({ color, num, percent, grade }) => {
  return (
    <View style={styles.lineContainer}>
      <TextPrimary size={13} style={styles.gradeText}>
        {grade}
      </TextPrimary>
      <MaterialIcons
        name="star"
        color="rgba(0,0,0,0.35)"
        style={styles.gradeText}
      />
      <View style={styles.gradeLineContainer}>
        <View
          style={{
            width: `${percent}%`,
            backgroundColor: color,
            ...styles.line,
          }}
        />
      </View>
      <TextPrimary weight={600} size={13}>
        {percent}%
      </TextPrimary>
      <TextSecondary style={{ marginLeft: 'auto' }} size={13}>
        {num}
      </TextSecondary>
    </View>
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
  lineContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  gradeLineContainer: {
    width: '70%',
    height: 10,
    backgroundColor: 'hsla(240,5%,48%,.09)',
    borderRadius: 20,
    marginRight: 5,
  },
  gradeText: {
    marginRight: 5,
  },
  line: { zIndex: 5, height: 10, borderRadius: 20 },
  lineContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default InfoRating;
