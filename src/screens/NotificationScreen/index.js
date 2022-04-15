import { forwardRef, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Notification from './Notification';
import { BlankButton } from '../../components/Button';
import useTheme from '../../hooks/useTheme';
import { TextPrimary, TextSecondary } from '../../components/Text';

const NotificationScreen = () => {
  const { theme } = useTheme();
  return (
    <ScrollView onRefresh={() => {}} stickyHeaderIndices={[0]}>
      <View style={{ backgroundColor: theme.background }}>
        <Header />
        <Nav />
      </View>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </ScrollView>
  );
};

const Header = forwardRef(() => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <TextPrimary>Icon</TextPrimary>
      <TextPrimary size={15} weight={700}>
        Уведомления
      </TextPrimary>
      <TextPrimary>Icon</TextPrimary>
    </View>
  );
});

const Nav = forwardRef(() => {
  const [active, setActive] = useState(0);
  const changeActive = (n) => () => setActive(n);
  const { theme } = useTheme();
  return (
    <ScrollView
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.borderBase,
      }}
    >
      <Tab num={64} active={active === 0} onPress={changeActive(0)}>
        Все
      </Tab>
      <Tab num={64} active={active === 1} onPress={changeActive(1)}>
        Все
      </Tab>
      <Tab num={64} active={active === 2} onPress={changeActive(2)}>
        Все
      </Tab>
      <Tab num={64} active={active === 3} onPress={changeActive(3)}>
        Все
      </Tab>
      <Tab num={64} active={active === 4} onPress={changeActive(4)}>
        Все
      </Tab>
      <Tab num={64} active={active === 5} onPress={changeActive(5)}>
        Все
      </Tab>
      <Tab num={64} active={active === 6} onPress={changeActive(6)}>
        Все
      </Tab>
    </ScrollView>
  );
});

const Tab = ({ children, active, num, ...rest }) => {
  const { theme } = useTheme();

  return (
    <BlankButton
      {...rest}
      style={{
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomColor: theme.primary,
        borderBottomWidth: active ? 3 : 0,
      }}
    >
      <TextPrimary size={13}>
        {children} <TextSecondary size={13}>{num}</TextSecondary>
      </TextPrimary>
    </BlankButton>
  );
};
export default NotificationScreen;
