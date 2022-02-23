import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextPrimary, TextSecondary } from '../../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import Ripple from 'react-native-advanced-ripple';
import { TouchableRipple } from 'react-native-paper';
import {
  BaseButton,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';
import useTheme from '../../../../hooks/useTheme';
import RippleButton from '../../../../components/Button/RippleButton';
import Borderless from '../../../../components/Button/Borderless';

const Preview = ({ data }) => {
  const { theme } = useTheme();

  return (
    <RippleButton
      style={[styles.container, { backgroundColor: theme.backgroundElevated2 }]}
    >
      <Image source={{ uri: data.url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <TextPrimary style={styles.text1}>{data.type}</TextPrimary>
        <TextPrimary size={16} weight={600} style={styles.title}>
          {data.name}
        </TextPrimary>
        <View style={styles.bottomText}>
          <TextSecondary size={14} style={styles.statusText}>
            {data.status}
          </TextSecondary>
          <TextSecondary size={14}>{data.typeOf}</TextSecondary>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Borderless color="rgba(0,255,0,0.25)">
          <MaterialIcons name="add" size={24} color={theme.backgroundFill1} />
        </Borderless>
        <TextPrimary
          style={{
            color: 'green',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          {data.count}
        </TextPrimary>
        <Borderless rippleColor="rgba(255,0,0,0.25)">
          <MaterialIcons
            name="remove"
            size={24}
            color={theme.backgroundFill1}
          />
        </Borderless>
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
    flexDirection: 'row',
  },
  statusText: {
    marginRight: 10,
  },
  title: {
    flexWrap: 'wrap',
    width: 200,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default Preview;
