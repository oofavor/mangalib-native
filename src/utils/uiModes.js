import * as StatusBar from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export const edgeToEdgeMode = () => {
  StatusBar.setStatusBarTranslucent(true);
  StatusBar.setStatusBarBackgroundColor('rgba(0,0,0,0)');
  NavigationBar.setPositionAsync('absolute');
  NavigationBar.setBackgroundColorAsync('rgba(0,0,0,0)');
};

export const fullscreenMode = () => {
  StatusBar.setStatusBarHidden(true);
  NavigationBar.setVisibilityAsync('hidden');
};

export const exitFullscreenMode = () => {
  StatusBar.setStatusBarHidden(false);
  NavigationBar.setVisibilityAsync('visible');
};
