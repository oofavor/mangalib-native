import React, { useEffect, useState } from 'react';

import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { Section } from '../../../components/Container';
import { getComments } from '../../../services';
import { useManga } from '../MangaContext';
import Comment from './Comment';
import { ScrollView } from 'react-native';
const CommentsModule = (props) => {
  const [comments, setComments] = useState([]);
  const manga = useManga();

  useEffect(() => {
    getComments(manga.id).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <ScrollView>
      <Section>
        {comments.map((comment, idx) => (
          <Comment comment={comment} key={idx} />
        ))}
      </Section>
    </ScrollView>
  );
};

export default CommentsModule;
