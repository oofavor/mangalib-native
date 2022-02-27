import React, { useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { Checkbox, CheckboxThree } from '../../components/Button';
import { Section } from '../../components/Container';
import FilterModal from './FilterModal';
import MangaPreview from './MangaPreview';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native';
const CatalogScreen = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [checked, setChecked] = useState('none');
  const navigation = useNavigation();

  return (
    <Section>
      <FlatList
        data={Array(31).fill(0)}
        renderItem={() => <MangaPreview />}
        numColumns={3}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      />
      <NavBar setShowFilter={() => navigation.navigate('Filter')} />
      <Modal
        onRequestClose={() => setShowFilter(false)}
        animationType="slide"
        visible={showFilter}
      >
        <FilterModal />
      </Modal>
    </Section>
  );
};

export default CatalogScreen;
