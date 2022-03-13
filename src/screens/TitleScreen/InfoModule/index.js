import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import InfoGeneral from './InfoGeneral';
import useTheme from '../../../hooks/useTheme';
import InfoRelated from './InfoRelated';
import InfoSimiliar from './InfoSimiliar';
import InfoRating from './InfoRating';
import InfoCount from './InfoCount';
import { Segmented } from 'react-native-collapsible-segmented-view';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
const InfoModule = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <Segmented.ScrollView>
      <InfoGeneral />
      <InfoRelated />
      <InfoSimiliar />
      <InfoCount />
      <InfoRating />
    </Segmented.ScrollView>
  );
};

export default InfoModule;
