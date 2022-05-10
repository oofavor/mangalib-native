import { KeyboardAvoidingView, Pressable, TextInput, View } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { MaterialIcons } from '@expo/vector-icons';
const Input = () => {
  const { theme } = useTheme();
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{
        backgroundColor: theme.foreground,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        shadowColor: 'black',
        borderTopColor: theme.borderBase,
        height: 60,
      }}
    >
      <TextInput
        placeholder="Оставить комментарий"
        placeholderTextColor={theme.textMuted}
        style={{
          fontFamily: 'OpenSans400',
          borderColor: theme.background,
          borderWidth: 1,
          borderRadius: 3,
          flex: 1,
          height: 40,
          paddingHorizontal: 12,
          color: theme.textPrimary,
        }}
      />
      <Pressable
        style={{
          aspectRatio: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primary,
          marginLeft: 10,
          padding: 1,
          height: 40,
          borderRadius: 3,
        }}
      >
        <MaterialIcons name="send" size={30} color="#fff" />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default Input;
