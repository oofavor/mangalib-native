import React, { useRef, useMemo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, CheckboxThree, RippleButton } from '../../components/Button';
import FilterInput from '../../components/Input/FilterInput';
import {
  Heading,
  Text,
  TextPrimary,
  TextSecondary,
} from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';

const FilterModal = ({ setInclude, setExclude, include, exclude, config }) => {
  const { theme } = useTheme();
  const includeItem = (item) => {
    if (include.includes(item)) {
      setInclude(include.filter((i) => i !== item));
    } else {
      setInclude([...include, item]);
    }
  };

  const excludeItem = (item) => {
    if (exclude.includes(item)) {
      setExclude(exclude.filter((i) => i !== item));
    } else {
      setExclude([...exclude, item]);
    }
  };
  const getCheckboxState = (item, handleThree = false) => {
    if (!handleThree) {
      return include.includes(item);
    }
    return include.includes(item)
      ? 'yes'
      : exclude.includes(item)
      ? 'no'
      : null;
  };

  const getCheckboxHandler = (item, handleThree = false) => {
    const state = getCheckboxState(item, handleThree);
    if (!handleThree) {
      return includeItem(item);
    }
    if (state === 'yes') {
      includeItem(item);
      return excludeItem(item);
    }
    if (state === 'no') {
      return excludeItem(item);
    }
    return includeItem(item);
  };

  const genreModalRef = useRef(null);
  const tagModalRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const genreModalShow = useCallback(() => {
    genreModalRef.current?.present();
  }, []);

  const tagModalShow = useCallback(() => {
    tagModalRef.current?.present();
  }, []);

  return (
    <BottomSheetScrollView
      style={{ flex: 1, backgroundColor: theme.foreground, padding: 7 }}
    >
      <RippleButton
        style={styles.navigateButtonContainer}
        onPress={genreModalShow}
      >
        <TextPrimary size={14} weight={600}>
          Жанры
        </TextPrimary>
        <View style={styles.navigateButtonInfo}>
          <TextSecondary numberOfLines={1} style={styles.navigateButtonChosen}>
            {`${include
              .filter((item) => item.type === 'genres')
              .map((item) => item.name)}`}
          </TextSecondary>
          <MaterialIcons size={16} name="keyboard-arrow-right" />
        </View>
      </RippleButton>
      <RippleButton
        style={styles.navigateButtonContainer}
        onPress={tagModalShow}
      >
        <TextPrimary size={14} weight={600}>
          Теги
        </TextPrimary>
        <View style={styles.navigateButtonInfo}>
          <TextSecondary numberOfLines={1} style={styles.navigateButtonChosen}>
            {`${include
              .filter((item) => item.type === 'categories')
              .map((item) => item.name)}`}
          </TextSecondary>
          <MaterialIcons size={16} name="keyboard-arrow-right" />
        </View>
      </RippleButton>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Возрастной рейтинг
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          {config['age_limit'].map((item) => (
            <RippleButton
              style={[styles.checkboxContainer, styles.checkbox25pc]}
              onPress={() => getCheckboxHandler(item)}
            >
              <Checkbox state={getCheckboxState(item)} />
              <TextPrimary style={styles.checkboxTitle}>
                {item.name}
              </TextPrimary>
            </RippleButton>
          ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Тип
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          {config['types'].map((item) => (
            <RippleButton
              style={[styles.checkboxContainer, styles.checkbox50pc]}
              onPress={() => getCheckboxHandler(item, true)}
            >
              <CheckboxThree state={getCheckboxState(item, true)} />
              <TextPrimary style={styles.checkboxTitle}>
                {item.name}
              </TextPrimary>
            </RippleButton>
          ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Статус тайтла
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          {config['status'].map((item) => (
            <RippleButton
              style={[styles.checkboxContainer, styles.checkbox50pc]}
              onPress={() => getCheckboxHandler(item)}
            >
              <Checkbox state={getCheckboxState(item)} />
              <TextPrimary style={styles.checkboxTitle}>
                {item.name}
              </TextPrimary>
            </RippleButton>
          ))}
        </View>
      </View>
      <BottomSheetModal
        ref={genreModalRef}
        index={1}
        snapPoints={snapPoints}
        style={{ padding: 7 }}
      >
        <BottomSheetScrollView>
          <View style={styles.sectionContainer}>
            <TextPrimary size={14} weight={600}>
              Жанры
            </TextPrimary>
            <View style={styles.checkboxGroup}>
              {config['genres'].map((item) => (
                <RippleButton
                  style={[styles.checkboxContainer, { flexBasis: '100%' }]}
                  onPress={() => getCheckboxHandler(item, true)}
                >
                  <CheckboxThree state={getCheckboxState(item, true)} />
                  <TextPrimary style={styles.checkboxTitle}>
                    {item.name}
                  </TextPrimary>
                </RippleButton>
              ))}
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
      <BottomSheetModal ref={tagModalRef} index={1} snapPoints={snapPoints}>
        <BottomSheetScrollView style={{ padding: 7 }}>
          <View style={styles.sectionContainer}>
            <TextPrimary size={14} weight={600}>
              Теги
            </TextPrimary>
            <View style={styles.checkboxGroup}>
              {config['categories'].map((item) => (
                <RippleButton
                  style={[styles.checkboxContainer, { flexBasis: '100%' }]}
                  onPress={() => getCheckboxHandler(item, true)}
                >
                  <CheckboxThree state={getCheckboxState(item, true)} />
                  <TextPrimary style={styles.checkboxTitle}>
                    {item.name}
                  </TextPrimary>
                </RippleButton>
              ))}
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  navigateButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 7,
    marginBottom: 3,
    borderRadius: 3,
  },
  navigateButtonInfo: { flexDirection: 'row', flex: 1, alignItems: 'center' },
  navigateButtonChosen: { flex: 1, marginHorizontal: 10 },
  sectionContainer: {
    paddingVertical: 6,
    paddingHorizontal: 7,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  checkboxGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 3,
    marginLeft: -5,
  },
  checkboxTitleContainer: {
    flexDirection: 'row',
  },
  checkboxTitle: {
    marginLeft: 7,
  },
  checkboxContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox50pc: {
    flexBasis: '50%',
  },
  checkbox25pc: {
    flexBasis: '25%',
  },
  checkbox100: {
    flexBasis: '100%',
  },
});
export default optimizeHeavyScreen(FilterModal);
