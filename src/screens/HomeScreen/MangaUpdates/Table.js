import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { TextPrimary, TextSecondary } from '../../../components/Text';
import useTheme from '../../../hooks/useTheme';

const Table = ({ data }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { theme } = useTheme();

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
            <TextPrimary weight={600} size={14}>
              Том {item[0]}. Глава {item[1]}. {item[2]}
            </TextPrimary>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={() => setCollapsed((e) => !e)}>
        <TextSecondary>
          {collapsed && data.length > 3 && 'показать'}
        </TextSecondary>
      </TouchableOpacity>
    </View>
  );
};

export default Table;
