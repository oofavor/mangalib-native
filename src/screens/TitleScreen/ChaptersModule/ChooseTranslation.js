import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { Heading, TextPrimary } from '../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme';
import { RippleButton, Borderless } from '../../../components/Button';
import { useManga } from '../MangaContext';
import { baseUrl } from '../../../constants/urls';

const ChooseTranslation = ({ setCurrentBranch }) => {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  const manga = useManga();

  return (
    <View style={{ paddingTop: 12 }}>
      <Heading style={{ paddingLeft: 12 }}>Выбрать перевод</Heading>
      <ScrollView horizontal>
        {manga?.branches.map((branch, idx) => (
          <RippleButton
            key={idx}
            onPress={() => {
              if (idx === active) return;
              setActive(idx);
            }}
            style={{
              ...styles.chip,
              backgroundColor: theme.backgroundElevated2,
              opacity: active === idx ? 1 : 0.6,
            }}
          >
            <Image
              source={{ uri: `${baseUrl}${branch.img}` }}
              style={styles.image}
            />
            <TextPrimary size={13} weight={600} style={styles.text}>
              {branch.publishers[0].name}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    borderRadius: 5,
    margin: 2,
    marginRight: 12,
    maxWidth: 300,
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
