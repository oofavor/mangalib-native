import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { RippleButton } from '../../../components/Button';
import { TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';
import { getReplies } from '../../../services';
import Comment from './Comment';

const NestedComments = ({ depth, maxDepth }) => {
  const { theme } = useTheme();
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getReplies(comments).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <View>
      {depth < maxDepth &&
        comments?.map((comment, idx) => (
          <View
            key={idx}
            style={[
              styles.subcommentContainer,
              { borderColor: theme.borderBase },
            ]}
          >
            <Comment
              comment={comment}
              depth={depth + 1}
              maxDepth={maxDepth}
              more={comment['count_replies']}
            />
          </View>
        ))}
      {depth >= maxDepth && !showMoreComments && (
        
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
