import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextPrimary, TextSecondary } from '../../../../components/Text';
const Line = ({  num, percent, grade }) => {
  return (
    <View style={styles.container}>
      <TextPrimary size={13} style={styles.gradeText}>
        {grade}
      </TextPrimary>
      <View style={styles.gradeLineContainer}>
        <View
          style={{
            backgroundColor: '#ffa332',
            width: `${percent}%`,
            zIndex: 5,
            height: 10,
            borderRadius: 20,
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
  container: {
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
    width: '20%'
  },
});

export default Line;
