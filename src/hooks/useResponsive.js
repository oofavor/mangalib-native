import React from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const useResponsiveFlex = (margin) => {
  const screen = useSafeAreaFrame();
  let size;
  // 320px — 480px: Mobile devices
  // 481px — 768px: iPads, Tablets
  if (screen.width )
  if (screen.width < 480) size = 'md'
  if (screen.width < 768) size = 'lg'
  if (screen.width < 480) size = 'sm'

  
};

export default useResponsiveFlex