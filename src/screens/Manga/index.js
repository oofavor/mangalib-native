import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Manga = ({navigation}) => {
  return (
    <View>
      <Button title="read" onPress={() => navigation.navigate('MangaReader')}/>
    </View>
  );
};

export default Manga;

const styles = StyleSheet.create({});
