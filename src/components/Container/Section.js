import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, Screen, } from 'react-native-screens';
import useTheme from '../../hooks/useTheme';

const Section = (props) => {
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
        elevation: 5,
        shadowOffset: { width: 3454, height: 199 }, // fix it for ios
        ...props.style,
      }}
    />
  );
};

export default Section;
