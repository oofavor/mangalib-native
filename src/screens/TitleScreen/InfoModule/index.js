import React from 'react';
import { View } from 'react-native';
import InfoGeneral from './InfoGeneral';
import InfoRelated from './InfoRelated';
import InfoSimilar from './InfoSimilar';
import InfoRating from './InfoRating';
import InfoCount from './InfoCount';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const InfoModule = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView>
      <InfoGeneral />
      {false && <InfoRelated />}
      <InfoSimilar />
      {false && <InfoCount />}
      {false && <InfoRating />}
      <View style={{ height: insets.bottom }} />
    </ScrollView>
  );
};

export default InfoModule;
