import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

const TextSecondary = ({ weight = 400, size = 12, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontSize: size,
        fontFamily: theme.font[weight],
        color: theme.textMuted,
        ...props.style,
      }}
    />
  );
};

export default TextSecondary;
