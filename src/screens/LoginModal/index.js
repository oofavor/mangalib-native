import AsyncStorage from '@react-native-async-storage/async-storage';
import CookieManager from '@react-native-cookies/cookies';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import WebView from 'react-native-webview';
import useUser from '../../hooks/useUser';
import { saveToken } from '../../utils/loginStorage';

const LoginModal = () => {
  const webViewRef = useRef();
  const navigation = useNavigation();
  const { refetch } = useUser();

  const CHECK_COOKIE = `
    ReactNativeWebView.postMessage("Cookie: " + document.cookie);
    true;
  `;
  const cookiePollingJS = `
  function listenCookieChange(callback, interval = 1000) {
    let lastCookie = document.cookie;
    setInterval(()=> {
      let cookie = document.cookie;
      if (cookie !== lastCookie) {
        try {
          callback({oldValue: lastCookie, newValue: cookie});
        } finally {
          lastCookie = cookie;
        }
      }
    }, interval);
  }
  
  listenCookieChange(({oldValue, newValue})=> {
    ${CHECK_COOKIE}
  }, 1000);
  `;

  const onMessage = async (event) => {
    const { data } = event.nativeEvent;
    if (data.includes('Cookie:')) {
      // process the cookies
      const storedCookies = await CookieManager.get(
        'https://remanga.org/',
        true
      );
      if (storedCookies.user) {
        const decodedUserData = decodeURIComponent(storedCookies.user.value);
        const userData = JSON.parse(decodedUserData);
        const token = userData['access_token'];
        saveToken(token);
        refetch();
        navigation.goBack();
      }
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'https://remanga.org/' }}
      sharedCookiesEnabled
      onMessage={onMessage}
      injectedJavaScript={cookiePollingJS}
      userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
      allowsBackForwardNavigationGestures
    />
  );
};

export default LoginModal;
