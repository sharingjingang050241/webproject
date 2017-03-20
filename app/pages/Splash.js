import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Alert,
  Platform,
  BackAndroid
} from 'react-native';

// import SplashScreen from "rn-splash-screen";

// import Storage from '../utils/Storage';
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
// const splashImg = require('../img/splash.png');
// import codePush from 'react-native-code-push';
import Tab from './Tab';
import FirstPage from './FirstPage';

class Splash extends Component {

  componentDidMount() {
    if(Platform.OS=="android"){
      //判断运行的是那个app
    //   SplashScreen.hide();
    }
   const { navigator } = this.props;
   
    // codePush.sync({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_RESUME });
     
       navigator.resetTo({
         component: FirstPage,
         name: 'FirstPage' , 
         params:{       
            id:0 ,
          
          }
      });
  }

  render() {
    return (
      <Image  style={{ width: maxWidth, height: maxHeight }}   />
    );
  }
}
// Splash =codePush(Splash);

export default Splash;
