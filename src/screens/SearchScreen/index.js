import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { TextInput } from '../../components/Input';

const Search = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            height: '100%',
          }}
        >
          <TextInput />
        </View>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>helo</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
