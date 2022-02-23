import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RippleButton } from '../../../components/Button';
import { TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';
import Comment from './Comment';

const NestedComments = ({ depth, maxDepth, subcomments }) => {
  const { theme } = useTheme();
  const [showMoreComments, setShowMoreComments] = useState(false);

  return (
    <View>
      {depth < maxDepth &&
        subcomments?.map((com, idx) => (
          <View
            key={idx}
            style={[
              styles.subcommentContainer,
              { borderColor: theme.borderBase },
            ]}
          >
            <Comment comment={com} depth={depth + 1} maxDepth={maxDepth} />
          </View>
        ))}
      {depth >= maxDepth && subcomments && !showMoreComments && (
        <RippleButton
          style={{ padding: 7, marginRight: 'auto' }}
          onPress={() => setShowMoreComments(true)}
        >
          <TextSecondary style={{ color: theme.textMuted }}>
            Развернуть ветку
          </TextSecondary>
        </RippleButton>
      )}
      {showMoreComments && (
        <NestedComments
          depth={depth}
          maxDepth={Infinity}
          subcomments={subcomments}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subcommentContainer: {
    marginLeft: 0,
    borderLeftWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 9,
    paddingTop: 7,
  },
});
export default NestedComments;
