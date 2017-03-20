import {
  StyleSheet,
  Navigator,
  BackAndroid,
  View,
  Alert,
  ToastAndroid,
  NativeModules
} from 'react-native';
import {connect} from 'react-redux';

let lastBackPressed;

export function naviGoBack(navigator) {
   
  if (navigator.getCurrentRoutes().length == 1) {
    if (lastBackPressed && (lastBackPressed + 2000 >= Date.now())) {
        NativeModules.RnNativeModule.BackExit();
      return false;
    }
    else {
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      lastBackPressed = Date.now();
      return true;
    }
  } else {

  if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  }

}



