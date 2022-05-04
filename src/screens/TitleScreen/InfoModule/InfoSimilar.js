import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Section } from '../../../components/Container';
import { Heading, TextPrimary, TextSecondary } from '../../../components/Text';
import { RippleButton, Borderless } from '../../../components/Button';
import { getSimilar } from '../../../services';
import { baseUrl } from '../../../constants/urls';
import { useManga } from '../MangaContext';
import useTheme from '../../../hooks/useTheme';

const InfoSimilar = () => {
  const manga = useManga();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (manga.dir && !similar.length) {
      getSimilar(manga.dir).then((data) => {
        setSimilar(data);
      });
    }
  }, [manga]);

  return (
    <>
      {!!similar.length && (
        <Section>
          <Heading>Похожее</Heading>
          <FlatList
            data={similar}
            renderItem={({ item }) => <Preview data={item} />}
            horizontal
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.99}
            overScrollMode="never"
          />
        </Section>
      )}
    </>
  );
};

const Preview = ({ data }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const onPress = () => navigation.push('TitleScreen', { title: data.dir });
  const imageSource = { uri: `${baseUrl}/${data.img.mid}` };

  return (
    <RippleButton
      style={[styles.container, { backgroundColor: theme.backgroundElevated2 }]}
      onPress={onPress}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <TextPrimary style={styles.text1}>{data.type}</TextPrimary>
        <TextPrimary
          size={16}
          weight={600}
          style={styles.title}
          numberOfLines={2}
        >
          {data.rus_name}
        </TextPrimary>
        <View style={styles.bottomText}>
          <TextSecondary size={14} style={styles.statusText}></TextSecondary>
          <TextSecondary size={14}>{/* {data.typeOf} */}</TextSecondary>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Borderless color="rgba(0,255,0,0.25)">
          <MaterialIcons name="add" size={24} color={theme.backgroundFill1} />
        </Borderless>
        <TextPrimary style={styles.ratingText}>0</TextPrimary>
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
  list: {
    margin: 0,
    padding: 0,
    marginTop: 0,
    paddingTop: 0,
  },
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
  ratingText: {
    color: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default InfoSimilar;
