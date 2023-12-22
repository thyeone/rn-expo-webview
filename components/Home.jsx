import { useRef } from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

export default function Home({ allowsBackForwardNavigationGestures }) {
  const webviewRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <WebView
        source={{ uri: 'https://crescendo-study.site' }}
        ref={webviewRef}
        originWhitelist={['*']}
        style={{ flex: 1 }}
        allowsBackForwardNavigationGestures={
          allowsBackForwardNavigationGestures ?? true
        }
      />
    </SafeAreaView>
  );
}
