import React from 'react';
import { View } from 'react-native';
import { TextPrimary, TextSecondary, Heading } from '../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
const MediaInfo = (props) => {
  return (
    <View
      style={{
        paddingTop: 8,
        paddingBottom: 5,
        alignItems: 'center',
      }}
    >
      <Heading size={20} style={{ alignSelf: 'center', marginBottom: 2, fontSize: 20 }}>
        Эпос о Гильгамеше
      </Heading>
      <TextPrimary size={16}>Epic of Gilgamesh</TextPrimary>
      <View style={{ marginTop: 8, flexDirection: 'row' }}>
        <TextSecondary size={16} style={{ padding: 5, paddingRight: 14 }}>
          2015 г.
        </TextSecondary>

        <TextSecondary size={16} style={{ padding: 5, paddingRight: 14 }}>
          Манхва
        </TextSecondary>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialIcons name="star" color="#ffb300" size={17} />
          <TextSecondary weight={600} size={16}>
            4.6
          </TextSecondary>
          <TextSecondary
            weight={600}
            size={12}
            style={{
              opacity: 0.7,
              paddingLeft: 5,
            }}
          >
            [605]
          </TextSecondary>
        </View>
      </View>
    </View>
  );
};

export default MediaInfo;
