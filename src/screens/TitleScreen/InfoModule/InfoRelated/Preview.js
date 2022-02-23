import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RippleButton from '../../../../components/Button/RippleButton';
import { TextPrimary, TextSecondary } from '../../../../components/Text';
import useTheme from '../../../../hooks/useTheme';

const Preview = ({ data }) => {
  const { theme } = useTheme();
  return (
    <RippleButton
      style={[styles.container, { backgroundColor: theme.backgroundElevated2 }]}
    >
      <Image source={{ uri: data.url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <TextPrimary style={styles.text1}>Источник</TextPrimary>
        <TextPrimary size={16} weight={600} style={styles.title}>
          {data.name}
        </TextPrimary>
        <TextSecondary style={styles.bottomText} size={14}>
          {data.status}
        </TextSecondary>
      </View>
    </RippleButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    width: 330,
    height: 120,
    margin: 5,
  },
  image: {
    width: 85,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text1: {
    color: '#007feb',
    marginBottom: 3,
  },
  infoContainer: {
    paddingVertical: 7,
    paddingLeft: 10,
  },
  bottomText: {
    marginTop: 'auto',
  },
  title: {
    flexWrap: 'wrap',
    width: 230,
  },
});
export default Preview;
