import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextPrimary, TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';

const Table = ({ data }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { theme } = useTheme();
  let showButton = true;
  if (data.length < 3) showButton = false;
  const getFirst = (n) => {
    let returnData = [];
    for (let i = 0; i < Math.min(data.length, n); i++) {
      returnData.push(data[i]);
    }
    return returnData;
  };
  return (
    <View>
      <View>
        {(collapsed ? getFirst(3) : data).map((item, idx) => (
          <View
            key={idx}
            style={{ backgroundColor: idx % 2 === 0 && theme.foregroundDarken }}
          >
            <TextPrimary style={{ fontSize: 14 }} fontWeight={'600'}>
              {item}
            </TextPrimary>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={() => setCollapsed((e) => !e)}>
        <TextSecondary>{collapsed ? 'show more' : 'hide'}</TextSecondary>
      </TouchableOpacity>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({});
