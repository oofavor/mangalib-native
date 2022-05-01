import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { getTitle } from '../../services';
import { MangaContext } from './MangaContext';
import Loading from '../../components/Placeholder/Loading';
import TitleNavigation from '../../navigation/TitleNavigation';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import useTheme from '../../hooks/useTheme';

// get width of the screen
const screenWidth = Dimensions.get('window').width;
const TitleScreen = ({ route }) => {
  const [manga, setManga] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    getTitle(route.params.title).then((data) => {
      if (data.error) {
        Toast.show({
          type: 'error',
          text1: data.msg,
        });
        return navigation.goBack();
      }
      setManga(data);
    });
  }, []);

  return (
    <>
      {manga ? (
        <MangaContext.Provider value={manga}>
          <TitleNavigation />
        </MangaContext.Provider>
      ) : (
        <Placeholder />
      )}
    </>
  );
};
// {manga ? (
//   <MangaContext.Provider value={manga}>
//     <TitleNavigation />
//   </MangaContext.Provider>
// ) : (
//   <Loading />
// )}
const Placeholder = () => {
  const { theme } = useTheme();
  return (
    <View style={{ backgroundColor: theme.foreground }}>
      <ContentLoader>
        {/* Image */}
        <Rect
          x={screenWidth / 2 - 110}
          y={50}
          width={220}
          height={(200 * 7) / 5}
          rx={4}
        />
        {/* Title */}
        <Rect
          x={screenWidth / 2 - 90}
          y={50 + (200 * 7) / 5 + 20}
          width={180}
          height={16}
          rx={4}
        />
        {/* Subtitle */}
        <Rect
          x={screenWidth / 2 - 70}
          y={50 + (200 * 7) / 5 + 42}
          width={140}
          height={14}
          rx={4}
        />
        {/* Age */}
        <Rect
          x={screenWidth / 2 - 130}
          y={130 + (200 * 7) / 5}
          width={40}
          height={20}
          rx={4}
        />
        {/* Year */}
        <Rect
          x={screenWidth / 2 - 75}
          y={130 + (200 * 7) / 5}
          width={70}
          height={20}
          rx={4}
        />
        {/* Type */}
        <Rect
          x={screenWidth / 2 + 10}
          y={130 + (200 * 7) / 5}
          width={70}
          height={20}
          rx={4}
        />
        {/* Raiting */}
        <Rect
          x={screenWidth / 2 + 100}
          y={130 + (200 * 7) / 5}
          width={40}
          height={20}
          rx={4}
        />
        {/* Table->Status */}
        <Rect x={16} y={200 + (200 * 7) / 5} width={100} height={14} rx={4} />
        <Rect x={130} y={200 + (200 * 7) / 5} width={120} height={14} rx={4} />
        {/* Table->E */}
        <Rect x={16} y={224 + (200 * 7) / 5} width={100} height={14} rx={4} />
        <Rect x={130} y={224 + (200 * 7) / 5} width={120} height={14} rx={4} />
        {/* Table->E */}
        <Rect x={16} y={248 + (200 * 7) / 5} width={100} height={14} rx={4} />
        <Rect x={130} y={248 + (200 * 7) / 5} width={120} height={14} rx={4} />
        {/* Table->E */}
        <Rect x={16} y={272 + (200 * 7) / 5} width={100} height={14} rx={4} />
        <Rect x={130} y={272 + (200 * 7) / 5} width={120} height={14} rx={4} />
        {/* Table->E */}
        <Rect x={16} y={296 + (200 * 7) / 5} width={100} height={14} rx={4} />
        <Rect x={130} y={296 + (200 * 7) / 5} width={120} height={14} rx={4} />
        {/* Table->E */}
        <Rect x={16} y={320 + (200 * 7) / 5} width={100} height={14} rx={4} />
        <Rect x={130} y={320 + (200 * 7) / 5} width={120} height={14} rx={4} />
        {/* Description */}
        {Array.from(Array(4)).map((_, i) => (
          <Rect
            key={i}
            x={10}
            y={350 + (200 * 7) / 5 + i * 24}
            width={Math.min(
              (screenWidth - 20) / (i * Math.random() + 1),
              screenWidth - 20
            )}
            height={14}
            rx={4}
          />
        ))}
      </ContentLoader>
    </View>
  );
};

export default TitleScreen;
