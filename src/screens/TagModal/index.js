import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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

const TagModal = (props) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  console.log('123');
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.foreground, padding: 7 }}
    >
      <View
        style={[
          styles.titleContainer,
          { backgroundColor: theme.backgroundHighlight },
        ]}
      >
        <TextPrimary weight={600} size={14}>
          Популярные
        </TextPrimary>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginHorizontal: -7,
  },
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
  checkbox100: {
    minWidth: '100%',
  },
});
export default TagModal;
