import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeView from '../../../components/Home/HomeView';
import Heading from '../../../components/Home/Heading';
import MangaCarousel from '../PopularMangaUpdates/MangaCarousel';
import Pick from './Pick';
const BestOfYear = () => {
  const mass = ['new', 'popular'];
  const type = ['manga', 'manhwa', 'manhua', 'oel', "author's"];
  const [sortByMass, setSortByMass] = useState(mass[0]);
  const [sortByType, setSortByType] = useState(type[0]);
  const [clicked, setClicked] = useState(false);

  return (
    <HomeView>
      <Heading>Топ 2021 года</Heading>
      <View style={{ flexDirection: 'row', marginLeft: 6 }}>
        {/* <Pick
          set={setSortByMass}
          choice={mass}
          current={sortByMass}
          clicked={clicked}
          setClicked={setClicked}
        />
        <Pick
          set={setSortByType}
          choice={type}
          current={sortByType}
          clicked={clicked}
          setClicked={setClicked}
        /> */}
      </View>
      <MangaCarousel />
    </HomeView>
  );
};

export default BestOfYear;
