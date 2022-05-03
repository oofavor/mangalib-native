import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text, TextPrimary, TextSecondary } from '../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme';
import { RippleButton, BlankButton } from '../../../components/Button';
import { baseUrl } from '../../../constants/urls';

const Discussion = (props) => {
  const { theme } = useTheme();
  const imageSource = { uri: `${baseUrl}${props.comment?.user.avatar.low}` };

  return (
    <View style={[styles.container, { borderColor: theme.borderLight }]}>
      <RippleButton style={{ padding: 10, borderRadius: 6 }}>
        {/* Main Info */}
        <View style={styles.mainInfoContainer}>
          <TextPrimary style={styles.mainInfoLabel} weight={600} size={15}>
            Ищу Тайтл где гг жениться и имеет гарем
          </TextPrimary>
          <View style={styles.userInfo}>
            <MaterialIcons size={13} name="chat" color="#868e96" />
            <TextSecondary size={13}>1337</TextSecondary>
            <MaterialIcons
              size={13}
              name="remove-red-eye"
              color="#868e96"
              style={{ marginLeft: 10 }}
            />
            <TextSecondary size={13}>88</TextSecondary>
          </View>
        </View>
        {/* Details */}
        <View style={{ marginTop: 5 }}>
          <BlankButton style={styles.topDetailsContainer}>
            <Image source={imageSource} style={styles.image} />
            <TextPrimary numberOfLines={1} style={styles.username}>
              Дракон [обычный]
            </TextPrimary>
            <TextSecondary>Х недели назад</TextSecondary>
          </BlankButton>
          <View style={styles.chipGroup}>
            <View style={styles.chipContainer}>
              <View style={styles.chip}>
                <Text weight={700} size={12} style={styles.chipText}>
                  Обсуждения
                </Text>
              </View>
              <View style={styles.chip}>
                <Text weight={700} size={12} style={styles.chipText}>
                  Обсуждения
                </Text>
              </View>
            </View>
          </View>
        </View>
      </RippleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingBottom: 0,
    borderWidth: 1,
    marginBottom: 16,
  },
  mainInfoContainer: {
    flexDirection: 'row',
    marginBottom: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  mainInfoLabel: {
    flexWrap: 'wrap',
    maxWidth: '70%',
  },
  topDetailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 'auto',
    flex: 1,
  },
  image: {
    width: 22,
    height: 22,
    borderRadius: 5,
    marginRight: 8,
    overflow: 'hidden',
  },
  chip: {
    backgroundColor: 'red',
    borderRadius: 3,
    marginRight: 10,
    marginBottom: 10,
  },
  chipText: {
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  chipContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  username: { width: 100, marginRight: 5 },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipGroup: { flexDirection: 'row', marginTop: 10 },
});
export default Discussion;
