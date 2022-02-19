import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
const Info = (props) => {
  const [check, setCheck] = useState('loading...');
  const navigation = useNavigation();

  useEffect(() => {
    let time = setTimeout(() => setCheck(''), 5000);
    return () => clearTimeout(time);
  }, []);
  return (
    <View style={props.style}>
      <Ripple
        onPress={() => {
          navigation.navigate('/reader');
        }}
      >
        <Text>To Manga</Text>
      </Ripple>
      {Array.from(Array(60)).map((_, i) => (
        <Text key={i}>Info page{check}</Text>
      ))}
    </View>
  );
};

export default Info;
