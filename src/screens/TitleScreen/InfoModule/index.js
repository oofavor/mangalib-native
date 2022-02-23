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
const InfoModule = (props) => {
  const [check, setCheck] = useState('loading...');
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <View>
      <InfoGeneral />
      <InfoRelated />
      <InfoSimiliar />
      <InfoCount />
      <InfoRating />
    </View>
  );
};

export default InfoModule;
