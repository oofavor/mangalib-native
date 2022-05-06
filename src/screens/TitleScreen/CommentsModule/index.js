import React, { useEffect, useState } from 'react';
import { Section } from '../../../components/Container';
import { getComments } from '../../../services';
import { useManga } from '../MangaContext';
import Comment from './Comment';
import { Button, ScrollView } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import useTheme from '../../../hooks/useTheme';
import useComments from '../../../hooks/useComments';

// TODO: Add Placeholder
const CommentsModule = () => {
  const manga = useManga();
  const { theme } = useTheme();
  const { comments, fetch, allLoaded, isLoading, isError } = useComments(
    manga.id
  );

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.foreground,
        paddingHorizontal: 12,
        paddingTop: 6,
      }}
    >
      {comments.length ? (
        comments.map((comment, idx) => <Comment comment={comment} key={idx} />)
      ) : (
        <Placeholder />
      )}
      <Button title="Show more" onPress={fetch} />
    </ScrollView>
  );
};

const Placeholder = () => {
  const generate = () => 300 * Math.max(Math.random(), 0.5);

  return (
    <ContentLoader width={500} height={160 * 6}>
      {Array.from(Array(5)).map((_, idx) => (
        <React.Fragment key={idx}>
          <Circle cx={20} cy={25 + idx * 160} r={16} />
          <Rect x={42} y={14 + idx * 160} width={160} height={10} cx={4} />
          <Rect x={42} y={28 + idx * 160} width={100} height={10} cx={4} />
          {/* Comment Lines */}
          <Rect
            x={4}
            y={60 + idx * 160}
            width={generate()}
            height={12}
            cx={4}
          />
          <Rect
            x={4}
            y={80 + idx * 160}
            width={generate()}
            height={12}
            cx={4}
          />
          <Rect
            x={4}
            y={100 + idx * 160}
            width={generate()}
            height={12}
            cx={4}
          />
          <Rect
            x={4}
            y={120 + idx * 160}
            width={generate()}
            height={12}
            cx={4}
          />
          <Rect
            x={4}
            y={140 + idx * 160}
            width={generate()}
            height={12}
            cx={4}
          />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

export default CommentsModule;
