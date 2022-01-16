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
        paddingTop: 6,
        paddingBottom: 12,
        marginBottom: 10,
        shadowColor: theme.shadow,
        shadowOffset: { width: 3454, height: 199 }, // fix it for ios
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
        ...props.style,
      }}
    />
  );
};

export default HomeView;
