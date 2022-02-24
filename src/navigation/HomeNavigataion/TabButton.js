import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useTheme from '../../hooks/useTheme';
import { FontAwesome5 } from '@expo/vector-icons';
import { Borderless } from '../../components/Button';

const TabButton = ({ name, ...props }) => {
  const { theme } = useTheme();

  return (
    <Pressable
      {...props}
      android_ripple={{ color: theme.ripple, radius: 48, borderless: true }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}
    >
      <FontAwesome5 name={name} size={18} color={theme.textMuted} />
    </Pressable>
  );
};

export default TabButton;
