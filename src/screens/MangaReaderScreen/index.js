import React, { useEffect, useState } from 'react';
import {
  Image,
  VirtualizedList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  View,
} from 'react-native';
import { getChapter } from '../../services';
import WebView from 'react-native-webview';
import { exitFullscreenMode, fullscreenMode } from '../../utils/uiModes';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
const MangaReader = ({ route }) => {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fullscreenMode();
    getChapter(route?.params.chapter).then((e) => {
      if (e.error) {
        console.log(e.msg);
        Toast.show({
          type: 'error',
          text1: e.msg,
        });
        return navigation.goBack();
      }
      setImages(e.pages.flat(Infinity));
    });
    return exitFullscreenMode;
  }, []);

  return (
    <View style={{ flex: 1, overflow: 'hidden' }}>
      <WebView
        scalesPageToFit={false}
        renderToHardwareTextureAndroid
        androidLayerType="hardware"
        decelerationRate={0.991}
        overScrollMode="never"
        style={{ backgroundColor: 'black' }}
        source={{
          html: `<body style="display: flex; align-items: center; justify-content: center; flex-direction: column; min-height: 800px;">
            ${images
              .map(
                (item) =>
                  `<img decoding="sync" width="${width}" height="${
                    (width / item.width) * item.height
                  }" src=${item.link} loading="lazy"></img>`
              )
              .join('')}
                  </body>`,
        }}
        renderLoading={() => <ActivityIndicator color="#009b88" size="large" />}
      />
    </View>
  );
};
export default MangaReader;
