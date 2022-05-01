import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Pressable } from 'react-native';
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
      <View
        style={{
          backgroundColor: theme.foreground,
          flexDirection: 'row',
          paddingVertical: 5,
        }}
      >
        <BlankButton
          style={{
            backgroundColor: theme.buttonDefaultBg,
            borderRadius: 5,
            flex: 1,
            height: 28,
            marginHorizontal: 4,
            justifyContent: 'center',
          }}
          onPress={() => {
            sortModalShow();
          }}
        >
          <TextSecondary
            weight={600}
            size={14}
            style={{
              color: theme.buttonDefaultColor,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
          >
            Сортировать
          </TextSecondary>
        </BlankButton>
        <BlankButton
          onPress={() => {
            filterModalShow();
          }}
          style={{
            backgroundColor: theme.buttonDefaultBg,
            borderRadius: 5,
            flex: 1,
            height: 28,
            marginHorizontal: 4,
            justifyContent: 'center',
          }}
        >
          <TextSecondary
            size={14}
            style={{
              color: theme.buttonDefaultColor,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
            weight={600}
          >
            Фильтры
          </TextSecondary>
        </BlankButton>
      </View>
      <BottomSheetModal
        ref={sortModalRef}
        index={2}
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

export default NavBar;
