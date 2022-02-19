import React from 'react';
import { Text, View } from 'react-native';

const Discussions = (props) => {
  return (
    <View style={props.style}>
      {Array.from(Array(160)).map((_, i) => (
        <Text key={i}>Discussions page</Text>
      ))}
    </View>
  );
};

export default Discussions;
