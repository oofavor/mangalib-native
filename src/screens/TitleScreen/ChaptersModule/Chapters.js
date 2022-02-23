import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Animated, {
  Layout,
  SlideInDown,
  SlideInUp,
  SlideOutLeft,
} from 'react-native-reanimated';
import RippleButton from '../../../components/Button/RippleButton';
import Borderless from '../../../components/Button/Borderless';

let data = [
  { name: 'Том 2 Глава 101', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 102', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 103', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 104', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 105', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 106', date: '12.12.2012', user: 'w' },
  { name: 'Том 2 Глава 107', date: '12.12.2012', user: 'w' },
];

const Chapters = (props) => {
  const { theme } = useTheme();
  const [clicked, setClicked] = useState(false);

  return (
    <View style={{ marginTop: 20 }}>
      <RippleButton
        onPress={() => {
          data = data.reverse();
          setClicked((e) => !e);
        }}
        style={styles.sortContainer}
      >
        <MaterialIcons name="sort" size={18} />
        <TextPrimary size={16}>Сортировать</TextPrimary>
      </RippleButton>
      <Animated.View
        style={{ borderColor: theme.backgroundFill3, borderTopWidth: 1 }}
      >
        {data.map((e, idx) => (
          <View
            style={{ borderColor: theme.backgroundFill3, borderBottomWidth: 1 }}
          >
            <RippleButton style={[styles.container]}>
              <Borderless style={styles.watchIcon}>
                <MaterialIcons
                  name="remove-red-eye"
                  size={22}
                  color={theme.textMuted}
                />
              </Borderless>
              <View style={styles.mainInfoContainer}>
                <TextPrimary size={14}>{e.name}</TextPrimary>
                <View style={styles.dataContainer}>
                  <TextSecondary size={13}>{e.date}</TextSecondary>
                  <View style={styles.userContainer}>
                    <MaterialIcons
                      name="verified-user"
                      color={theme.textMuted}
                    />
                    <TextSecondary size={13}> {e.user}</TextSecondary>
                  </View>
                </View>
              </View>
              <Borderless style={styles.iconEdit}>
                <MaterialIcons name="edit" size={22} color={theme.textMuted} />
              </Borderless>
              <Borderless style={styles.downloadIcon}>
                <MaterialIcons
                  name="file-download"
                  size={22}
                  color={theme.textMuted}
                />
              </Borderless>
            </RippleButton>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 7,
    paddingVertical: 2,
  },
  dataContainer: { flexDirection: 'row', alignItems: 'center' },
  iconEdit: {
    marginLeft: 'auto',
  },
  userContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  watchIcon: {
    marginLeft: 5,
  },
  mainInfoContainer: {
    paddingLeft: 10,
  },
  downloadIcon: {
    marginHorizontal: 10,
  },
  mainContainer: {
    borderTopWidth: 1,
  },
  sortContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 'auto',
    padding: 5,
  },
});
export default Chapters;
