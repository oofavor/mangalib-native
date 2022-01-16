import React from 'react';
import { StyleSheet, Text as Text_, View } from 'react-native';
import useTheme from '../../hooks/useTheme';

const Text = ({ fontWeight, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontFamily: theme.font.fontWeight,
      }}
    />
  );
};

export default Text;
