import React from 'react';
import { View, TextInput as Input } from 'react-native';
import useTheme from '../../hooks/useTheme';

const FilterInput = (props) => {
  const { theme } = useTheme();
  return (
    <Input
      {...props}
      placeholderTextColor={theme.textMuted}
      style={{
        flex: 1,
        backgroundColor: theme.inputBg,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 8,
        fontFamily: theme.font[400],
        fontSize: 14,
        height: 28,
        borderColor: theme.inputBorder,
      }}
    />
  );
};

export default FilterInput;
