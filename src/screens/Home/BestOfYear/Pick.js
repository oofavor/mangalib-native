import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Pick = ({ choice, set, current, clicked, setClicked }) => {
  return (
    <View style={{ marginBottom: 10, marginRight: 10 }}>
      <TouchableOpacity
        style={{
          borderColor: 'black',
          backgroundColor: 'red',
          alignSelf: 'flex-start',
          paddingVertical: 4,
          paddingHorizontal: 10,
          borderRadius: 14,
          flexDirection: 'row',
        }}
        onPress={() => setClicked((e) => !e)}
      >
        <Text>
          {current} <AntDesign name="caretdown" size={13} color="black" />
        </Text>
      </TouchableOpacity>
      {clicked && (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'green',
            marginTop: 30,
            zIndex: 1,
            borderRadius: 8,
          }}
        >
          {choice.map((n) => {
            return (
              <TouchableOpacity
                style={{ paddingVertical: 5, paddingLeft: 20, width: 100 }}
                onPress={() => {
                  if (current !== n) set(n);
                  setClicked((e) => !e);
                }}
              >
                <Text style={{ fontSize: 16 }}>{n}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Pick;

const styles = StyleSheet.create({});
