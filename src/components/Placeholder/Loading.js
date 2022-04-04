import { View, ActivityIndicator } from 'react-native';

const Loading = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <ActivityIndicator size={50} color="orange" />
  </View>
);

export default Loading;
