import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

const PrimaryText = ({ fontWeight, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontSize: 13,
        fontFamily: fontWeight ? theme.font['w' + fontWeight] : theme.font.w400,
        color: theme.textPrimary,
        ...props.style,
      }}
    />
  );
};

export default PrimaryText;
