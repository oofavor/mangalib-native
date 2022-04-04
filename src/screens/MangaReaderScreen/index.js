import React, { useEffect, useState } from 'react';
import {
  Image,
  VirtualizedList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { getChapter } from '../../services';
import WebView from 'react-native-webview';
import { exitFullscreenMode, fullscreenMode } from '../../utils/uiModes';

const { width } = Dimensions.get('screen');
const MangaReader = ({ route }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fullscreenMode();
    getChapter(route?.params.chapter).then((e) =>
      setImages(e.pages.flat(Infinity))
    );
    return exitFullscreenMode;
  }, []);

  return (
    <WebView
      startInLoadingState
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
                  `<img width="${width}" height="${
                    (width / item.width) * item.height
                  }" src=${item.link} loading="lazy"></img>`
              )
              .join('')}
            </body>`,
      }}
      renderLoading={() => <ActivityIndicator color="#009b88" size="large" />}
    />
  );
};

export default MangaReader;
