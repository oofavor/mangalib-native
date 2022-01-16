import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryText from '../../../components/Home/PrimaryText';

const Chip = () => {
  return (
    <PrimaryText
      style={{
        textAlign: 'center',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 10,
        paddingHorizontal: 5,
        fontSize: 10,
        justifyContent: 'center'
      }}
    >
      популярное
    </PrimaryText>
  );
};

export default Chip;
