import React, { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, View } from 'react-native';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { Borderless, RippleButton } from '../../../components/Button';
import NestedComments from './NestedComments';

const Comment = ({ comment, depth, maxDepth }) => {
  const { theme } = useTheme();
  const [showAllText, setShow] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const numberOfVotes = 10;
  const greenRipple = {
    color: 'rgba(0,255,0,0.3)',
    borderless: true,
    radius: 16,
  };
  const redRipple = {
    color: 'rgba(255,0,0,0.3)',
    borderless: true,
    radius: 16,
  };
  return (
    <View style={{ marginTop: 12 }}>
      {/* Top Info */}
      <View style={styles.topInfoContainer}>
        <RippleButton style={{ padding: 3, margin: -3 }}>
          <View style={styles.topInfoContainer}>
            <Image
              source={{ uri: 'https://i.imgur.com/msRGMnX.gif' }}
              style={[styles.avatar, { overlayColor: theme.foreground }]}
            />
            <View>
              <TextPrimary size={13} weight={700}>
                Имя Пользователя
              </TextPrimary>
              <TextSecondary>X дней назад</TextSecondary>
            </View>
          </View>
        </RippleButton>
        <MaterialIcons
          name="sports-basketball"
          size={16}
          color="blue"
          style={{ marginLeft: 'auto' }}
        />
      </View>
      {/* Comment body*/}
      <View>
        <View style={{ marginVertical: 10 }}>
          <TextPrimary
            numberOfLines={showAllText ? 0 : 6}
            size={14}
            style={{ lineHeight: 22 }}
            ellipsizeMode="clip"
            onTextLayout={(e) =>
              setShowMoreButton(e.nativeEvent.lines.length > 6)
            }
          >
            {comment.text}
          </TextPrimary>
          {!showAllText && showMoreButton && (
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', theme.foreground]}
            />
          )}
        </View>
        {showMoreButton && (
          <RippleButton
            onPress={() => setShow((e) => !e)}
            style={styles.showMoreButton}
          >
            <TextSecondary
              size={14}
              style={{
                color: showAllText ? theme.primary : theme.textSecondary,
                padding: 5,
              }}
            >
              {showAllText ? 'СВЕРНУТЬ' : 'ПОКАЗАТЬ ПОЛНОСТЬЮ'}
            </TextSecondary>
          </RippleButton>
        )}
      </View>
      {/* Bottom Tab for managing, answering and rating the comment */}
      <View style={styles.controlTabContainer}>
        <View style={{ marginRight: 'auto', flexDirection: 'row' }}>
          <RippleButton style={styles.answerButton}>
            <TextPrimary style={{ color: theme.primary }} size={14}>
              ответить
            </TextPrimary>
          </RippleButton>
          <Borderless>
            <MaterialIcons
              name="keyboard-control"
              size={18}
              color={theme.textSecondary}
            />
          </Borderless>
        </View>
        <Pressable android_ripple={greenRipple} style={styles.controlTabIcon}>
          <MaterialIcons
            name="keyboard-arrow-up"
            size={24}
            color={theme.textSecondary}
          />
        </Pressable>
        <TextPrimary
          weight={600}
          style={{
            ...styles.controlTabIcon,
            color: numberOfVotes < 0 ? '#f44336' : '#3cce7b',
          }}
        >
          16
        </TextPrimary>
        <Pressable android_ripple={redRipple} style={styles.controlTabIcon}>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={theme.textSecondary}
          />
        </Pressable>
      </View>
      {/* Subcomments (nested) */}
      <NestedComments
        depth={depth}
        maxDepth={maxDepth}
        subcomments={comment.subcomment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },
  controlTabIcon: { marginHorizontal: 10 },
  subcommentContainer: {
    marginLeft: 0,
    borderLeftWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 9,
    paddingVertical: 7,
  },
  topInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 8,
  },
  showMoreButton: {
    marginRight: 'auto',
    marginLeft: -5,
    marginBottom: 2,
  },
  gradient: {
    width: '100%',
    height: 50,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  answerButton: { padding: 5, margin: -5, marginRight: 5 },
});
export default Comment;
