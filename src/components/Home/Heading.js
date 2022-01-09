import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

const Heading = (props) => {
  const { theme } = useTheme();
  return (
    <Text
      {...props}
      style={{
        fontSize: 18,
        fontFamily: theme.fontFamilyBold,
        alignSelf: 'flex-start',
        color: theme.textPrimary,
        marginBottom: 12,
        ...props.style,
      }}
    />
  );
};

export default Heading;
