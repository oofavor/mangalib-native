import React from 'react';
import { Text, View } from 'react-native';

const Chapters = (props) => {
  return (
    <View style={props.style}>
      {Array.from(Array(60)).map((_, i) => (
        <Text key={i}>Chapters page</Text>
      ))}
    </View>
  );
};

export default Chapters;
