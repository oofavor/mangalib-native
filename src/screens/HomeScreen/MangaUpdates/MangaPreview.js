import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '../../../hooks/useTheme';
import Table from './Table';
import faker from 'faker';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import BlankButton from '../../../components/Button/BlankButton';
import { baseUrl } from '../../../constants/urls';
import moment from 'moment';
import 'moment/locale/ru'; // doesnt work without this line
import { useNavigation } from '@react-navigation/native';

const data = [
  faker.name.firstName(),
  faker.name.firstName(),
  faker.name.firstName(),
  faker.name.firstName(),
  faker.name.firstName(),
];
const MangaPreview = ({ manga }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <BlankButton
        style={styles.mangaWrapper}
        onPress={() => {
          navigation.navigate('TitleScreen', { title: manga.dir });
        }}
      >
        <Image
          source={{ uri: `${baseUrl}${manga.img.low}` }}
          style={styles.mangaImage}
        />
        {/* <LinearGradient
          // shadow for image
          colors={['rgba(0,0,0,.8)', 'transparent', 'rgba(0,0,0,.01)']}
          style={styles.mangaShadow}
        />
        <TextPrimary style={styles.mangaText}>Манга</TextPrimary> */}
      </BlankButton>
      <View style={{ flex: 1 }}>
        <View style={styles.infoWrapper}>
          <TextPrimary style={{ flex: 1 }} numberOfLines={1} fontWeight="600">
            {manga['rus_name']}
          </TextPrimary>
          {manga['is_hottest'] && (
            <TextPrimary
              style={{
                textAlign: 'center',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: 10,
                paddingHorizontal: 5,
                fontSize: 10,
                justifyContent: 'center',
              }}
            >
              популярное
            </TextPrimary>
          )}
        </View>
        <View
          style={[
            styles.infoWrapper,
            {
              paddingBottom: 4,
              borderBottomColor: theme.primary,
              borderBottomWidth: 1,
            },
          ]}
        >
          <TextSecondary style={{ flex: 1 }} numberOfLines={1}>
            {manga['en_name']}
          </TextSecondary>
          <TextSecondary numberOfLines={1}>
            {moment(Date.now() - manga['upload_date'].toFixed(0))
              .locale('ru')
              .fromNow()}
          </TextSecondary>
        </View>
        <Table data={[[manga.tome, manga.chapter, manga.name]]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  mangaWrapper: { marginRight: 10 },
  mangaImage: {
    width: 80,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  mangaShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 4,
    height: 110,
  },
  mangaText: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    paddingBottom: 8,
    color: 'white',
    textAlign: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {},
});

export default MangaPreview;
