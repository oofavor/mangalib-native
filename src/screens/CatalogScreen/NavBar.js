import React from 'react';
import { View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RippleButton } from '../../components/Button';
import BlankButton from '../../components/Button/BlankButton';
import { TextSecondary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';

const NavBar = ({ setShowFilter }) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.foreground,
      }}
    >
      <BlankButton
        style={{
          backgroundColor: theme.buttonDefaultBg,
          borderRadius: 5,
          flex: 1,
          height: 28,
          marginHorizontal: 4,
          justifyContent: 'center',
        }}
      >
        <TextSecondary
          weight={600}
          size={14}
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            color: theme.buttonDefaultColor,
          }}
        >
          Сортировать
        </TextSecondary>
      </BlankButton>
      <BlankButton
        onPress={() => setShowFilter(true)}
        style={{
          backgroundColor: theme.buttonDefaultBg,
          borderRadius: 5,
          flex: 1,
          height: 28,
          marginHorizontal: 4,
          justifyContent: 'center',
        }}
      >
        <TextSecondary
          size={14}
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            color: theme.buttonDefaultColor,
          }}
          weight={600}
        >
          Фильтры
        </TextSecondary>
      </BlankButton>
    </View>
  );
};

export default NavBar;