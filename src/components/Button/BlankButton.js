import React from 'react';
import { Pressable } from 'react-native';

const BlankButton = (props) => {
  return <Pressable unstable_pressDelay={300} {...props} />;
};

export default BlankButton;
