import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import PrimaryText from '../../../components/Home/PrimaryText';
import useTheme from '../../../hooks/useTheme';
import MangaImage from '../../../components/Home/MangaImage';

const MangaPreview = ({ manga }) => {
  const screen = useSafeAreaFrame();
  const { theme } = useTheme();
  return (
    <View
      style={{
        width: 110,
        paddingBottom: 5,
      }}
    >
      <TouchableOpacity>
        <MangaImage image={manga.image} />

        <LinearGradient
          // shadow for image
          colors={['transparent', 'rgba(0,0,0,.01)', 'rgba(0,0,0,.8)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            borderRadius: 8,
            height: '100%',
          }}
        />

        <PrimaryText
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: 0,
            left: 0,
            paddingLeft: 5,
            paddingBottom: 8,
            fontSize: 13,
            color: theme.white,
          }}
          numberOfLines={2}
        >
          Том 2 Глава 53
        </PrimaryText>
      </TouchableOpacity>
      <TouchableOpacity>
        <PrimaryText numberOfLines={2} style={{ fontSize: 13 }}>
          {manga.name}
        </PrimaryText>
      </TouchableOpacity>
    </View>
  );
};

export default MangaPreview;
