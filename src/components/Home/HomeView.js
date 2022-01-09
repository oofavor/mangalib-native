import React from 'react';
import { View } from 'react-native';
import useTheme from '../../hooks/useTheme';

const HomeView = (props) => {
  const { theme } = useTheme();
  return (
    <View
      {...props}
      style={{
        backgroundColor: theme.foreground,
        paddingHorizontal: 12,
        paddingVertical:10,
        marginBottom: 12,
        ...props.style,
      }}
    />
  );
};

export default HomeView;
