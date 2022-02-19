import React from 'react';
import { Text as Text_ } from 'react-native';
import useTheme from '../../hooks/useTheme';

const Text = ({ weight = 400, size = 14, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text_
      {...props}
      style={{
        ...props.style,
        fontFamily: theme.font[weight],
        fontSize: size,
      }}
    />
  );
};

export default Text;
