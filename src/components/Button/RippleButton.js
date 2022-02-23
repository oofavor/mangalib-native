import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import useTheme from '../../hooks/useTheme';

const RippleButton = (props) => {
  const { theme } = useTheme();
  return (
    <RectButton
      rippleColor={theme.ripple}
      activeOpacity={0.6}
      exclusive={false}
      disallowInterruption
      {...props}
    />
  );
};

export default RippleButton;
