import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import RippleButton from '../../../../components/Button/RippleButton';
import { TextPrimary } from '../../../../components/Text';
import useTheme from '../../../../hooks/useTheme';

const Chip = ({ text, onPress }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        ...styles.chip,
        borderColor: theme.borderBase,
        backgroundColor: theme.backgroundFill4,
      }}
    >
      <RippleButton style={{ borderRadius: 4 }} onPress={onPress}>
        <TextPrimary
          size={14}
          style={{
            color: theme.text2,
            textAlign: 'center',
            textAlignVertical: 'center',
            paddingHorizontal: 8,
            paddingVertical: 3,
          }}
        >
          {text}
        </TextPrimary>
      </RippleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
  },
});
export default Chip;
