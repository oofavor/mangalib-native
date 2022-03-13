import React, { useState } from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { TextPrimary } from '../../../../components/Text';
import RenderHtml from 'react-native-render-html';
import { useManga } from '../../MangaContext';

const Description = (props) => {
  const [numLines, setNumLines] = useState(4);
  const manga = useManga();
  const { width } = useWindowDimensions();
  return (
    <View
      style={
        {
          // paddingTop: 5,
          // marginBottom: 16
        }
      }
    >
      {/* <TextPrimary
        size={14}
        numberOfLines={numLines}
        ellipsizeMode={'clip'}
        style={{ lineHeight: 21 }}
      ></TextPrimary> */}
      <RenderHtml
        source={{ html: manga?.description }}
        systemFonts={['Open-Sans-400']}
        contentWidth={width - 32}
      />

      {/* <TouchableOpacity
        onPress={() => {
          setNumLines((e) => (e === 4 ? 0 : 4));
        }}
      >
        <TextPrimary size={14} style={{ color: 'orange' }}>
          {numLines === 4 ? 'Подробнее...' : 'Свернуть'}
        </TextPrimary>
      </TouchableOpacity> */}
    </View>
  );
};

export default Description;
