import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BlankButton,
  Borderless,
  RippleButton,
} from '../../../components/Button';
import { getReplies } from '../../../services';
import { baseUrl } from '../../../constants/urls';
import { decode } from 'html-entities';
import moment from 'moment';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';

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

const Comment = ({ comment }) => {
  const { theme } = useTheme();
  const [showAllText, setShow] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showSubcomments, setShowSubcomments] = useState(false);
  const [subComments, setSubComments] = useState([]);

  const fetchSubcomments = () => {
    setShowSubcomments(true);
    getReplies(comment.id).then((res) => {
      setSubComments(res);
    });
  };

  const imageSource = { uri: `${baseUrl}${comment.user.avatar.low}` };
  const shadow = ['transparent', theme.foreground];

  const onTextLayout = (e) => setShowMoreButton(e.nativeEvent.lines.length > 6);

  return (
    <View style={{ marginTop: 12 }}>
      {/* Top Info */}
      <View style={styles.topInfoContainer}>
        <RippleButton style={{ padding: 3, margin: -3, width: '95%' }}>
          <View style={styles.topInfoContainer}>
            <Image source={imageSource} style={styles.avatar} />
            <View>
              <TextPrimary size={13} weight={700} numberOfLines={1}>
                {comment.user.username}
              </TextPrimary>
              <TextSecondary>
                {moment(Date.now() - new Date(comment.date)).fromNow()}
              </TextSecondary>
            </View>
          </View>
        </RippleButton>
        {comment.is_pinned && (
          <TextPrimary style={styles.chip} weight={700} size={12} color="#fff">
            Закреплен
          </TextPrimary>
        )}
      </View>
      {/* Comment body*/}
      <View>
        <View style={{ marginVertical: 10 }}>
          <TextPrimary
            numberOfLines={showAllText ? 0 : 6}
            size={14}
            style={{ lineHeight: 22 }}
            ellipsizeMode="clip"
            onTextLayout={onTextLayout}
          >
            {decode(comment.text)}
          </TextPrimary>
          {!showAllText && showMoreButton && (
            <LinearGradient style={styles.gradient} colors={shadow} />
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
            <TextPrimary size={14} color={theme.primary}>
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
          color={comment.score < 0 ? '#f44336' : '#3cce7b'}
          style={styles.controlTabIcon}
        >
          {comment.score}
        </TextPrimary>
        <Pressable android_ripple={redRipple} style={styles.controlTabIcon}>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={theme.textSecondary}
          />
        </Pressable>
      </View>
      {/* Get Replies button */}
      {!showSubcomments && !!comment['count_replies'] && (
        <BlankButton style={styles.showMoreButton} onPress={fetchSubcomments}>
          <TextSecondary color={theme.textMuted}>
            Развернуть ветку
          </TextSecondary>
        </BlankButton>
      )}
      {/* Subcomments (nested) */}
      {showSubcomments &&
        (subComments.length ? (
          <View style={styles.subcommentContainer}>
            {subComments.map((subComment) => (
              <Comment comment={subComment} key={subComment.id} />
            ))}
          </View>
        ) : (
          <Placeholder />
        ))}
    </View>
  );
};

const Placeholder = () => {
  const generate = () => 300 * Math.max(Math.random(), 0.5);
  return (
    <ContentLoader height={132} width={300}>
      <Circle cx={20} cy={25} r={16} />
      <Rect x={42} y={14} width={160} height={10} cx={4} />
      <Rect x={42} y={28} width={100} height={10} cx={4} />
      {/* Comment Lines */}
      <Rect x={4} y={60} width={generate()} height={12} cx={4} />
      <Rect x={4} y={80} width={generate()} height={12} cx={4} />
      <Rect x={4} y={100} width={generate()} height={12} cx={4} />
      <Rect x={4} y={120} width={generate()} height={12} cx={4} />
    </ContentLoader>
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
    overflow: 'hidden',
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
  subcommentContainer: {
    marginLeft: 0,
    borderLeftWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 9,
    paddingTop: 7,
  },
  getRepliesButton: { padding: 7, marginRight: 'auto' },
  chip: {
    marginLeft: 'auto',
    backgroundColor: '#007feb',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
});
export default Comment;
