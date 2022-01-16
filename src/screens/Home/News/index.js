import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Heading from '../../../components/Home/Heading';
import HomeView from '../../../components/Home/HomeView';
import PrimaryText from '../../../components/Home/PrimaryText';
import New from './New';

const News = () => {
  return (
    <HomeView>
      <Heading>Последние новости</Heading>
      <New />
      <New />
      <New />
      <New />
      <TouchableOpacity style={{ marginTop: 6 }}>
        <PrimaryText style={{ fontSize: 14 }}>Все новости {' >'}</PrimaryText>
      </TouchableOpacity>
    </HomeView>
  );
};
export default News;
