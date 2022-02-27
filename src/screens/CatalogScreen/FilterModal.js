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
const FilterModal = (props) => {
  const { theme } = useTheme();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.foreground, padding: 7 }}
    >
      <RippleButton style={styles.navigateButtonContainer}>
        <TextPrimary size={14} weight={600}>
          Жанры
        </TextPrimary>
        <View style={styles.navigateButtonInfo}>
          <TextSecondary numberOfLines={1} style={styles.navigateButtonChosen}>
            ЛюбыеЛюбыеЛюбыеЛюбыеЛюбыеЛюбыеЛюбыеЛюбые,Любые
          </TextSecondary>
          <MaterialIcons size={16} name="keyboard-arrow-right" />
        </View>
      </RippleButton>
      <RippleButton style={styles.navigateButtonContainer}>
        <TextPrimary size={14} weight={600}>
          Теги
        </TextPrimary>
        <View style={styles.navigateButtonInfo}>
          <TextSecondary numberOfLines={1} style={styles.navigateButtonChosen}>
            ЛюбыеЛюбыеЛюбыеЛюбыеЛюбыеЛюбыеЛюбыеЛюбые,Любые
          </TextSecondary>
          <MaterialIcons size={16} name="keyboard-arrow-right" />
        </View>
      </RippleButton>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Количество Глав
        </TextPrimary>
        <View style={styles.inputGroup}>
          <FilterInput keyboardType="numeric" placeholder="От" />
          <TextPrimary style={{ color: theme.textMuted, marginHorizontal: 10 }}>
            —
          </TextPrimary>
          <FilterInput keyboardType="numeric" placeholder="До" />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Год Выпуска
        </TextPrimary>
        <View style={styles.inputGroup}>
          <FilterInput keyboardType="numeric" placeholder="От" />
          <TextPrimary style={{ color: theme.textMuted, marginHorizontal: 10 }}>
            —
          </TextPrimary>
          <FilterInput keyboardType="numeric" placeholder="До" />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Оценка
        </TextPrimary>
        <View style={styles.inputGroup}>
          <FilterInput keyboardType="numeric" placeholder="От" />
          <TextPrimary style={{ color: theme.textMuted, marginHorizontal: 10 }}>
            —
          </TextPrimary>
          <FilterInput keyboardType="numeric" placeholder="До" />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Возрастной рейтинг
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox25pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>16+</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox25pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>18+</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox25pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Отсутствует</TextPrimary>
          </RippleButton>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Тип
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Манга</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>OEL-манга</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Манхва</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Маньхуа</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Руманга</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>
              Комикс западный
            </TextPrimary>
          </RippleButton>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Формат выпускаа
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>
              4-кома (Ёнкома)
            </TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Сборник</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Додзинси</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>В цвете</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Сингл</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Веб</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Вебтун</TextPrimary>
          </RippleButton>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Статус перевода
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Продолжается</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Завершен</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Заморожен</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Заброшен</TextPrimary>
          </RippleButton>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Статус тайтла
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Онгоинг</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Завершен</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>Анонс</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>
              Приостановлен
            </TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox50pc]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>
              Выпуск завершен
            </TextPrimary>
          </RippleButton>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Статус тайтла
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>
              Нет перевода уже 3 месяца
            </TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <Checkbox />
            <TextPrimary style={styles.checkboxTitle}>
              Лицензировано
            </TextPrimary>
          </RippleButton>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <TextPrimary size={14} weight={600}>
          Мои списки
        </TextPrimary>
        <View style={styles.checkboxGroup}>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <CheckboxThree />
            <TextPrimary style={styles.checkboxTitle}>Читаю</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <CheckboxThree />
            <TextPrimary style={styles.checkboxTitle}>В планах</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <CheckboxThree />
            <TextPrimary style={styles.checkboxTitle}>Брошено</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <CheckboxThree />
            <TextPrimary style={styles.checkboxTitle}>Прочитано</TextPrimary>
          </RippleButton>
          <RippleButton style={[styles.checkboxContainer, styles.checkbox100]}>
            <CheckboxThree />
            <TextPrimary style={styles.checkboxTitle}>Любимые</TextPrimary>
          </RippleButton>
        </View>
      </View>
    </ScrollView>
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
    minWidth: '50%',
  },
  checkbox25pc: {
    minWidth: '25%',
  },
  checkbox100: {
    minWidth: '100%',
  },
});
export default FilterModal;
