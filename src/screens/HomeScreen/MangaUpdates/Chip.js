import React from 'react';
import { TextPrimary } from '../../../components/Text';

const Chip = () => {
  return (
    <TextPrimary
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
    </TextPrimary>
  );
};

export default Chip;
