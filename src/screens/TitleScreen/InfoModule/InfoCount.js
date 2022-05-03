import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Section } from '../../../components/Container';
import {
  Heading,
  TextPrimary,
  TextSecondary,
} from '../../../components/Text';

// Placeholder data
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

const InfoCount = () => {
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

const Line = ({ num, percent, grade }) => {
  return (
    <View style={styles.lineContainer}>
      <TextPrimary size={13} style={styles.gradeText}>
        {grade}
      </TextPrimary>
      <View style={styles.gradeLineContainer}>
        <View style={{ ...styles.line, width: `${percent}%` }} />
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
    width: '53%',
    height: 10,
    backgroundColor: 'hsla(240,5%,48%,.09)',
    borderRadius: 20,
    marginRight: 5,
  },
  gradeText: {
    marginRight: 5,
    width: '20%',
  },
  line: { backgroundColor: '#ffa332', zIndex: 5, height: 10, borderRadius: 20 },
});

export default InfoCount;
