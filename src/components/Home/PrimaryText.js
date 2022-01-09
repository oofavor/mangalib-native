import React from 'react';
import { StyleSheet, Text as Text_, View } from 'react-native';
import useTheme from '../../hooks/useTheme';

const PrimaryText = (props) => {
  const { theme } = useTheme();
  return (
    <Text_
      {...props}
      numberOfLines={2}
      style={{
        fontFamily: theme.fontFamily,
        color: theme.textPrimary,
        fontSize: 13,
        ...props.style,
      }}
    />
  );
};

export default PrimaryText;

const styles = StyleSheet.create({});
