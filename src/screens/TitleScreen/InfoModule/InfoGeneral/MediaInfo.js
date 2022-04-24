import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  TextPrimary,
  TextSecondary,
  Heading,
} from '../../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../../../hooks/useTheme';
import { useManga } from '../../MangaContext';

const MediaInfo = () => {
  const { theme } = useTheme();
  const manga = useManga();

  return (
    <View
      style={{
        paddingTop: 8,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: theme.foreground,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Heading
          size={20}
          style={{
            alignSelf: 'center',
            marginBottom: 2,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          {manga?.rus_name}
        </Heading>
        <TextPrimary size={14} style={{ textAlign: 'center' }}>
          {manga?.en_name}
        </TextPrimary>
      </TouchableOpacity>
      <View style={{ marginTop: 8, flexDirection: 'row' }}>
        <TextSecondary
          size={15}
          style={{ color: 'red', padding: 5, paddingRight: 14 }}
        >
          16+
        </TextSecondary>
        <TextSecondary size={15} style={{ padding: 5, paddingRight: 14 }}>
          {manga?.issue_year} г.
        </TextSecondary>

        <TextSecondary size={15} style={{ padding: 5, paddingRight: 14 }}>
          {manga?.type?.name}
        </TextSecondary>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialIcons name="star" color="#ffb300" size={17} />
          <TextSecondary weight={600} size={15}>
            {manga?.avg_rating}
          </TextSecondary>
          <TextSecondary
            size={12}
            style={{
              opacity: 0.7,
              paddingLeft: 5,
            }}
          >
            [{manga.count_rating}]
          </TextSecondary>
        </View>
      </View>
    </View>
  );
};

export default MediaInfo;
