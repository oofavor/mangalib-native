import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { RippleButton } from '../../../components/Button';
import { Text, TextPrimary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';
const NavBar = ({ setRoute }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: theme.foreground,
        textAlign: 'center',
      }}
    >
      <RippleButton onPress={() => setRoute(0)}>
        <TextPrimary size={16}>Информация</TextPrimary>
      </RippleButton>
      <RippleButton onPress={() => setRoute(1)}>
        <TextPrimary size={16}>Главы</TextPrimary>
      </RippleButton>
      <RippleButton onPress={() => setRoute(2)}>
        <TextPrimary size={16}>Комментарии</TextPrimary>
      </RippleButton>
      <RippleButton onPress={() => setRoute(3)}>
        <TextPrimary size={16}>Обсуждения</TextPrimary>
      </RippleButton>
    </View>
  );
};

export default NavBar;
