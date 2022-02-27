import React from 'react';
import { Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
const CheckboxThree = ({ size = 20, state = 'none', ...props }) => {
  const { theme } = useTheme();
  const name = state === 'none' ? '' : state === 'yes' ? 'check' : 'clear';
  const color =
    state === 'none'
      ? theme.inputBg
      : state === 'yes'
      ? theme.green
      : theme.red;
  return (
    <Pressable
      {...props}
      android_ripple={{
        color: theme.ripple,
        borderless: true,
      }}
      style={{
        backgroundColor: color,
        borderColor: theme.inputBorder,
        width: size,
        height: size,
        borderRadius: 4,
        borderWidth: 1,
        ...props.style,
      }}
    >
      {!state ? (
        <View
          style={{
            backgroundColor: theme.inputBg,
            width: '100%',
            height: '100%',
            borderRadius: 3,
          }}
        ></View>
      ) : (
        <MaterialIcons color={theme.inputBg} name={name} size={size - 2} />
      )}
    </Pressable>
  );
};

export default CheckboxThree;
