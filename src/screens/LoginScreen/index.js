import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Button onPress={() => navigation.navigate('LoginModal')}>
        Login Now!
      </Button>
    </View>
  );
};

export default LoginScreen;
