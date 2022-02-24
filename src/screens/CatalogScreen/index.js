import React, { useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { Section } from '../../components/Container';
import MangaPreview from './MangaPreview';
import NavBar from './NavBar';

const CatalogScreen = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Section>
      <FlatList
        data={Array(31).fill(0)}
        renderItem={() => <MangaPreview />}
        numColumns={3}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      />
      <NavBar setShowFilter={setShowFilter} />
      <Modal
        onRequestClose={() => setShowFilter(false)}
        animationType="slide"
        visible={showFilter}
      ></Modal>
    </Section>
  );
};

export default CatalogScreen;
