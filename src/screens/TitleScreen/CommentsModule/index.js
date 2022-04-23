import React, { useEffect, useState } from 'react';
import { SpringScrollView } from 'react-native-spring-scrollview';

import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { Section } from '../../../components/Container';
import { getComments } from '../../../services';
import { useManga } from '../MangaContext';
import Comment from './Comment';
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sodales rhoncus. Morbi consectetur euismod augue vel mollis. Cras a fringilla leo. Suspendisse viverra urna molestie egestas varius. Aliquam erat volutpat. Maecenas at elit ligula. Duis faucibus metus tellus.Phasellus sodales, urna in imperdiet placerat, ipsum orci cursus libero, laoreet egestas nisl elit vitae lectus. Curabitur quis feugiat ex. Maecenas non sapien convallis, lobortis urna sed, dictum diam. Aenean consectetur vitae nisi sed pretium. Nam sollicitudin euismod enim in sodales. In quis hendrerit sem, vel bibendum nisl. Mauris tristique posuere mattis. Cras tempus tellus ut purus blandit, in luctus nisi dictum.`;

const sub = [
  {
    text: lorem,
    user: 'Имя Пользователя2',
    date: 'X дней назад2',
    subcomment: [
      {
        text: 'abs',
        user: 'Имя Пользователя3',
        date: 'X дней назад3',
        subcomment: [
          {
            text: 'abs',
            user: 'Имя Пользователя3',
            date: 'X дней назад3',
          },
        ],
      },
    ],
  },
  {
    text: lorem,
    user: 'Имя Пользователя2',
    date: 'X дней назад2',
  },
  {
    text: lorem,
    user: 'Имя Пользователя2',
    date: 'X дней назад2',
  },
];

const comments = {
  text: lorem,
  user: 'Имя Пользователя',
  date: 'X дней назад',
  subcomment: sub,
};

const CommentsModule = (props) => {
  const [comments, setComments] = useState([]);
  const manga = useManga();

  useEffect(() => {
    getComments(manga.id).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <SpringScrollView>
      <Section>
        {comments.map((comment, idx) => (
          <Comment comment={comment} key={idx} />
        ))}
      </Section>
    </SpringScrollView>
  );
};

export default CommentsModule;
