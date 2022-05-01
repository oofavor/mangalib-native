import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
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

const SortModal = ({ sort, ordering, handleSort, order }) => {
  const { theme } = useTheme();

  const rotation = useSharedValue('0deg');
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotation.value }],
    };
  });

  const handleAnimation = (order) =>
    (rotation.value = withTiming(order === '-' ? '0deg' : '180deg'));

  return (
    <BottomSheetScrollView style={{ flex: 1 }}>
      {ordering.map((item) => (
        <View key={item.value}>
          <RippleButton
            onPress={() => handleAnimation(handleSort(item))}
            style={styles.button}
          >
            <TextPrimary size={16} weight={400}>
              {item.text}
            </TextPrimary>
            {item.value === sort && (
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

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SortModal;
