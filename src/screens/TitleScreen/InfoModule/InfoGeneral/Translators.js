import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RippleButton from '../../../../components/Button/RippleButton';
import { Heading, TextPrimary } from '../../../../components/Text';
import useTheme from '../../../../hooks/useTheme';
const rndurl =
  'https://staticlib.me/uploads/team/korporaciya-x/cover/sVyhjh8ZJKNC_250x350.jpg?';
const Translators = (props) => {
  const { theme } = useTheme();
  return (
    <View>
      <Heading style={styles.heading}>Переводчики</Heading>
      <View style={styles.container} horizontal>
        <RippleButton
          style={[styles.chip, { backgroundColor: theme.backgroundElevated2 }]}
        >
          <Image style={styles.image} source={{ uri: rndurl }} />
          <TextPrimary size={16} style={styles.text}>
            Sky Hunters
          </TextPrimary>
        </RippleButton>
        <RippleButton
          style={[styles.chip, { backgroundColor: theme.backgroundElevated2 }]}
        >
          <Image style={styles.image} source={{ uri: rndurl }} />
          <TextPrimary size={16} style={styles.text}>
            Sky Hunters
          </TextPrimary>
        </RippleButton>
        <RippleButton
          style={[styles.chip, { backgroundColor: theme.backgroundElevated2 }]}
        >
          <Image style={styles.image} source={{ uri: rndurl }} />
          <TextPrimary size={16} style={styles.text}>
            Sky Hunters
          </TextPrimary>
        </RippleButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 3,
    width: 30,
    aspectRatio: 1,
  },
  heading: {
    marginBottom: 0,
    marginTop: 10,
  },
});

export default Translators;
