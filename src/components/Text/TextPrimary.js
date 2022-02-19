import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

const TextPrimary = ({ weight = 400, size = 13, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontSize: size,
        fontFamily: theme.font[weight],
        color: theme.textPrimary,
        ...props.style,
      }}
    />
  );
};

export default TextPrimary;
