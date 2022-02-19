import React from 'react';
import { View } from 'react-native';

const CollapsibleView = ({ current, route, children }) => {
  const display = current === route ? 'flex' : 'none';
  return <View style={{ display }}>{children}</View>;
};

export default CollapsibleView;
