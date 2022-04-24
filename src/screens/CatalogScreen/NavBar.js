import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Pressable } from 'react-native';
import BlankButton from '../../components/Button/BlankButton';
import { TextSecondary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import FilterModal from './FilterModal';
import SortModal from './SortModal';

const NavBar = ({
  setSort,
  sort,
  setInclude,
  include,
  setExclude,
  exclude,
  config,
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

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.foreground,
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
              textAlign: 'center',
              textAlignVertical: 'center',
              color: theme.buttonDefaultColor,
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
              textAlign: 'center',
              textAlignVertical: 'center',
              color: theme.buttonDefaultColor,
            }}
            weight={600}
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
        <SortModal setSort={setSort} sort={sort} />
      </BottomSheetModal>
      <BottomSheetModal
        ref={filterModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <FilterModal
          include={include}
          setInclude={setInclude}
          exclude={exclude}
          setExclude={setExclude}
          config={config}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default NavBar;
