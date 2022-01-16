import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

const SecondaryText = (props) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontFamily: theme.font400,
        color: theme.textMuted,
        fontSize: 12,
        ...props.style,
      }}
    />
  );
};

export default SecondaryText;
