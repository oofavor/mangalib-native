import React from 'react';
import { Text, View } from 'react-native';

const DiscussionsModule = (props) => {
  return (
    <View style={props.style}>
      {Array.from(Array(160)).map((_, i) => (
        <Text key={i}>Discussions page</Text>
      ))}
    </View>
  );
};

export default DiscussionsModule;
