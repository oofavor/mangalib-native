import React from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryText from '../../../components/Home/PrimaryText';
import SecondaryText from '../../../components/Home/SecondaryText';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const New = () => {
  return (
    <TouchableOpacity style={{ marginBottom: 6 }}>
      <PrimaryText style={{ fontSize: 14, marginBottom: 2 }}>
        Нестабильная работа сервера по вечерам
      </PrimaryText>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name="person"
          size={11}
          color="gray"
          style={{ marginRight: 2 }}
        />
        <SecondaryText style={{ marginRight: 12 }}>pepe</SecondaryText>
        <SecondaryText>1 неделю назад</SecondaryText>
      </View>
    </TouchableOpacity>
  );
};

export default New;
