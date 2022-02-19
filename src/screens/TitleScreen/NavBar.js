import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { Text } from '../../components/Text';
const NavBar = ({ setRoute }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <Ripple onPress={() => setRoute(0)} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>Info</Text>
      </Ripple>
      <Ripple onPress={() => setRoute(1)} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>Chapters</Text>
      </Ripple>
      <Ripple onPress={() => setRoute(2)} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>Comments</Text>
      </Ripple>
      <Ripple onPress={() => setRoute(3)} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>Discussions</Text>
      </Ripple>
    </View>
  );
};

export default NavBar;
