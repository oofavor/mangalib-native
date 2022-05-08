import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { TextPrimary } from '../../components/Text';
import useTheme from '../../hooks/useTheme';

const Nav = ({ type, setType }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 10 }}
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
    >
      <Tab num={194} active={type === 0} onPress={() => setType(0)}>
        Читаю
      </Tab>
      <Tab num={194} active={type === 1} onPress={() => setType(1)}>
        Буду читать
      </Tab>
      <Tab num={194} active={type === 2} onPress={() => setType(2)}>
        Прочитано
      </Tab>
      <Tab num={194} active={type === 3} onPress={() => setType(3)}>
        Брошено
      </Tab>
      <Tab num={194} active={type === 4} onPress={() => setType(4)}>
        Отложено
      </Tab>
      <Tab num={194} active={type === 5} onPress={() => setType(5)}>
        Не интересно
      </Tab>
    </ScrollView>
  );
};

const Tab = ({ children, num, active, ...props }) => {
  const { theme } = useTheme();
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: active ? theme.foreground : 'transparent',
        ...styles.tabContainer,
      }}
    >
      <TextPrimary size={14}>{children}</TextPrimary>
      <TextPrimary
        size={11}
        style={{
          color: theme.textMuted,
          ...styles.tabButton,
        }}
      >
        {num}
      </TextPrimary>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 3,
    flexDirection: 'row',
  },
  tabButton: { marginLeft: 5, lineHeight: 20, textAlignVertical: 'center' },
});

export default Nav;
