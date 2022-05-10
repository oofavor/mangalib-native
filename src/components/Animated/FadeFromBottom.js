import Animated, { FadeInDown } from 'react-native-reanimated';

const FadeFromBottom = (props) => {
  return <Animated.View entering={FadeInDown} {...props} />;
};

export default FadeFromBottom;
