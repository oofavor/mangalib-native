import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

const Heading = ({ weight = 600, size = 17, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontSize: size,
        fontFamily: theme.font[weight],
        alignSelf: 'flex-start',
        color: theme.textPrimary,
        marginBottom: 10,
        ...props.style,
      }}
    />
  );

};

export default Heading;
