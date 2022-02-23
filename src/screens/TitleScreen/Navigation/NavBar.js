import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';
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
      <Ripple onPress={() => setRoute(0)}>
        <TextPrimary size={16}>Информация</TextPrimary>
      </Ripple>
      <Ripple onPress={() => setRoute(1)}>
        <TextPrimary size={16}>Главы</TextPrimary>
      </Ripple>
      <Ripple onPress={() => setRoute(2)}>
        <TextPrimary size={16}>Комментарии</TextPrimary>
      </Ripple>
      <Ripple onPress={() => setRoute(3)}>
        <TextPrimary size={16}>Обсуждения</TextPrimary>
      </Ripple>
    </View>
  );
};

export default NavBar;
