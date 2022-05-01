import React from 'react';
import { Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
const Checkbox = ({
  size = 20,
  color = 'orange',
  state = 'none',
  ...props
}) => {
  const { theme } = useTheme();
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
      {state === 'none' ? (
        <View
          style={{
            backgroundColor: theme.inputBg,
            width: '100%',
            height: '100%',
            borderRadius: 3,
          }}
        ></View>
      ) : (
        <MaterialIcons color={theme.inputBg} name="check" size={size - 2} />
      )}
    </Pressable>
  );
};

export default Checkbox;
