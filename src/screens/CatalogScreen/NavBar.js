import React from 'react';
import { View } from 'react-native';
import { RippleButton } from '../../components/Button';
import { TextSecondary } from '../../components/Text';

const NavBar = ({ setShowFilter }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 70,
        backgroundColor: 'red',
      }}
    >
      <RippleButton>
        <TextSecondary size={16} style={{ textAlign: 'center' }}>
          Сортировать
        </TextSecondary>
      </RippleButton>
      <RippleButton onPress={() => setShowFilter(true)}>
        <TextSecondary size={16}>Фильтры</TextSecondary>
      </RippleButton>
    </View>
  );
};

export default NavBar;
