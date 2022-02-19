import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { FontAwesome5 } from '@expo/vector-icons';

const TabButton = ({ name, ...props }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      {...props}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <FontAwesome5 name={name} size={18} color={theme.textPrimary} />
    </TouchableOpacity>
  );
};

export default TabButton;

