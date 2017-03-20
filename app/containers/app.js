import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Alert
} from 'react-native';

// 开发测试用
import Splash from '../pages/Splash';
// import { registerApp } from 'react-native-wechat';
import { naviGoBack } from '../utils/CommonUtil';
let tempNavigator;
let isRemoved = false;

class App extends Component {
  constructor(props) {
    super(props);
    // registerApp('wxaf2e02e761529c70'); //微信分享的id 没有ID分享不
    this.renderScene = this.renderScene.bind(this);
    this.goBack = this.goBack.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);
  }

  goBack() {
    return naviGoBack(tempNavigator);
  }

  configureScene() {
    return {...Navigator.SceneConfigs.HorizontalSwipeJump, gestures: false };
  }

  renderScene(route, navigator) {
    let Component = route.component;
    tempNavigator = navigator;
 
    //Alert.alert("hahha ","active名称＝"+route.name);
    if (route.name === 'WebViewPage') {
        BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
     isRemoved = true;
    } else {
      if (isRemoved) {
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
      }
    }
    return (
      <Component navigator={navigator} route={route}  {...route.params}  />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#3e9ce9"
          barStyle="default"
          />
        <Navigator
          ref="navigator"
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;
