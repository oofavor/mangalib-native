import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Heading, TextPrimary } from '../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import RippleButton from '../../../components/Button/RippleButton';
import Borderless from '../../../components/Button/Borderless';
import { useManga } from '../MangaContext';

const ChooseTranslation = (props) => {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  const manga = useManga();
  return (
    <View style={{ paddingTop: 12 }}>
      <Heading>Выбрать перевод</Heading>
      <View style={styles.chipContainer}>
        {manga?.branches.map((e, idx) => (
          <RippleButton
            onPress={() => {
              if (idx === active) return;
              setActive(idx);
            }}
            key={idx}
            style={[
              styles.chip,
              {
                backgroundColor: theme.backgroundElevated2,
                opacity: active === idx ? 1 : 0.6,
              },
            ]}
          >
            <Image source={{ uri: e.url }} style={styles.image} />
            <TextPrimary size={13} weight={600} style={styles.text}>
              {e.name}
            </TextPrimary>
            <Borderless color="orange">
              <MaterialIcons
                name="notifications-none"
                size={20}
                color={theme.textMuted}
              />
            </Borderless>
          </RippleButton>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    borderRadius: 5,
    marginRight: 10,
    maxWidth: 300,
    height: 35,
  },
  image: {
    aspectRatio: 1,
    width: 28,
    borderRadius: 4,
  },
  text: {
    paddingHorizontal: 8,
  },
});

export default ChooseTranslation;
