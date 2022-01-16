import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Footer = () => {
  const insets = useSafeAreaInsets();

  return <View style={{ paddingBottom: insets.bottom + 60 }}></View>;
};

export default Footer;

const styles = StyleSheet.create({});
