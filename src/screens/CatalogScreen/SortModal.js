import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BlankButton, RippleButton } from '../../components/Button';
import { TextPrimary } from '../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useTheme from '../../hooks/useTheme';

const SortModal = ({ setSort, sort }) => {
  const { theme } = useTheme();
  const ordering = useMemo(
    () => [
      { text: 'По новизне', value: 'id' },
      { text: 'По последним обновлениям', value: 'chapter_date' },
      { text: 'По популярности', value: 'rating' },
      { text: 'По лайкам', value: 'votes' },
      { text: 'По просмотрам', value: 'views' },
      { text: 'По кол-ву глав', value: 'count_chapters' },
      { text: 'Мне повезет', value: 'random' },
    ],
    []
  );
  const [order, setOrder] = useState('-');
  const [currentSort, setCurrentSort] = useState('rating');
  const rotation = useSharedValue('0deg');

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotation.value }],
    };
  });

  const handlePress = (value) => {
    if (value.value === sort.replace('-', '')) {
      setSort((order === '-' ? '' : '-') + value.value);
      rotation.value = withTiming(order === '' ? '0deg' : '180deg');
      setOrder(order === '-' ? '' : '-');
    } else {
      setOrder('-');
      setSort(value.value);
      rotation.value = '0deg';
      setSort('-' + value.value);
    }
  };

  return (
    <BottomSheetScrollView style={{ flex: 1 }}>
      {ordering.map((item) => (
        <View key={item.value}>
          <RippleButton
            onPress={() => {
              handlePress(item);
            }}
            style={{
              padding: 8,
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TextPrimary size={16} weight={400}>
              {item.text}
            </TextPrimary>
            {item.value === sort.replace('-', '') && (
              <Animated.View style={animatedStyles}>
                <MaterialIcons name="sort" size={18} />
              </Animated.View>
            )}
          </RippleButton>
          <View
            style={{
              height: 1,
              backgroundColor: theme.borderBase,
              marginHorizontal: -8,
            }}
          />
        </View>
      ))}
    </BottomSheetScrollView>
  );
};

export default SortModal;
