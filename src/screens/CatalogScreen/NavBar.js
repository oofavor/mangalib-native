import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BlankButton from '../../components/Button/BlankButton';
import { TextSecondary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import FilterModal from './FilterModal';
import SortModal from './SortModal';

const NavBar = ({
  config,
  handleConfig,
  getIncluded,
  refetch,
  sort,
  handleSort,
  ordering,
}) => {
  const { theme } = useTheme();
  const filterModalRef = useRef(null);
  const sortModalRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const filterModalShow = useCallback(() => {
    filterModalRef.current?.present();
  }, []);

  const sortModalShow = useCallback(() => {
    sortModalRef.current?.present();
  }, []);

  const handleSheetChanges = (index) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      refetch();
    }
  };

  return (
    <BottomSheetModalProvider>
      <View style={{ backgroundColor: theme.foreground, ...styles.container }}>
        <BlankButton
          style={{ backgroundColor: theme.buttonDefaultBg, ...styles.button }}
          onPress={sortModalShow}
        >
          <TextSecondary
            weight={600}
            size={14}
            style={styles.centerText}
            color={theme.buttonDefaultColor}
          >
            Сортировать
          </TextSecondary>
        </BlankButton>
        <BlankButton
          onPress={filterModalShow}
          style={{ backgroundColor: theme.buttonDefaultBg, ...styles.button }}
        >
          <TextSecondary
            size={14}
            style={styles.centerText}
            weight={600}
            color={theme.buttonDefaultColor}
          >
            Фильтры
          </TextSecondary>
        </BlankButton>
      </View>
      <BottomSheetModal
        ref={sortModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <SortModal sort={sort} handleSort={handleSort} ordering={ordering} />
      </BottomSheetModal>
      <BottomSheetModal
        ref={filterModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <FilterModal
          handleConfig={handleConfig}
          config={config}
          getIncluded={getIncluded}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  centerText: { textAlign: 'center', textAlignVertical: 'center' },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 28,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  container: { flexDirection: 'row', paddingVertical: 5 },
});

export default NavBar;
