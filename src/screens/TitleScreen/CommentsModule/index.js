import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Segmented } from 'react-native-collapsible-segmented-view';
import { Tabs } from 'react-native-collapsible-tab-view';
import { optimizeHeavyScreen } from 'react-navigation-heavy-screen';
import { Section } from '../../../components/Container';
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
  return (
    <ScrollView>
      <Section>
        <Comment comment={comments} depth={1} maxDepth={5} />
        {sub.map((com, idx) => (
          <Comment comment={com} depth={1} maxDepth={5} key={idx} />
        ))}
      </Section>
    </ScrollView>
  );
};

export default CommentsModule;
