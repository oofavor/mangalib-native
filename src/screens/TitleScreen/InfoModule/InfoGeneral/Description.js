import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextPrimary } from '../../../../components/Text';
const desc =
  '"После целой ночи крепкого пьянства я оказалась внутри романа в теле злодейки — императрицы Юлии, которую через три дня должны были казнить за измену." Эта история о женщине-трудоголике, которая живет в теле правительницы и пытается предотвратить все жестокие события. Сможет ли она стать хорошей и мудрой императрицей? Так и начинается царствование Императрицы Юлии - кроткой снаружи, но железной внутри.';

const Description = (props) => {
  const [numLines, setNumLines] = useState(4);

  return (
    <View style={{ paddingTop: 5, marginBottom: 16 }}>
      <TextPrimary
        size={14}
        numberOfLines={numLines}
        ellipsizeMode={'clip'}
        style={{ lineHeight: 21 }}
      >
        {desc}
      </TextPrimary>
      <TouchableOpacity
        onPress={() => {
          setNumLines((e) => (e === 4 ? 0 : 4));
        }}
      >
        <TextPrimary size={14} style={{ color: 'orange' }}>
          {numLines === 4 ? 'Подробнее...' : 'Свернуть'}
        </TextPrimary>
      </TouchableOpacity>
    </View>
  );
};

export default Description;
