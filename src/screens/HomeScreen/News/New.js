import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';

const New = () => {
  return (
    <TouchableOpacity style={{ marginBottom: 6 }}>
      <TextPrimary style={{ fontSize: 14, marginBottom: 2 }}>
        Нестабильная работа сервера по вечерам
      </TextPrimary>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name="person"
          size={11}
          color="gray"
          style={{ marginRight: 2 }}
        />
        <TextSecondary style={{ marginRight: 12 }}>pepe</TextSecondary>
        <TextSecondary>1 неделю назад</TextSecondary>
      </View>
    </TouchableOpacity>
  );
};

export default New;
