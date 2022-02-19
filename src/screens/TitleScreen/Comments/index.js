import React from 'react';
import { Text, View } from 'react-native';

const Comments = (props) => {
  return (
    <View style={props.style}>
      {Array.from(Array(60)).map((_, i) => (
        <Text key={i}>Comments page</Text>
      ))}
    </View>
  );
};

export default Comments;
