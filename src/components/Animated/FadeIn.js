import Animated, { FadeIn as A } from 'react-native-reanimated';

const FadeInView = (props) => {
  <Animated.View entering={A} {...props} />;
};

export default FadeInView;
