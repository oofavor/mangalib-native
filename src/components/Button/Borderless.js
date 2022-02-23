import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import useTheme from '../../hooks/useTheme';

const Borderless = (props) => {
  const { theme } = useTheme();
  return (
    <BorderlessButton
      rippleColor={props.color ? props.color : theme.ripple}
      activeOpacity={0.6}
      exclusive={false}
      disallowInterruption
      {...props}
    />
  );
};

export default Borderless;
