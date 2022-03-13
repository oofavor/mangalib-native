import React from 'react';
import { View, TextInput as Input } from 'react-native';
import useTheme from '../../hooks/useTheme';

const TextInput = (props) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        borderRadius: 10,
        height: 30,
        width: 300,
        backgroundColor: theme.tagBg,
      }}
    >
      <Input
        textAlignVertical="center"
        style={{
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderTopRightRadius: 10,
          overflow: 'hidden',
          textAlignVertical: 'center',
          fontFamily: 'Open-Sans-400',
          fontSize: 16,
        }}
        {...props}
      />
    </View>
  );
};

export default TextInput;
