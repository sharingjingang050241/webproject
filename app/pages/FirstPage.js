import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Alert,
  Platform,
  BackAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tinder from './Tender';

class FirstPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Text style={styles.title}>kmb</Text>
                </View>
                <View style={styles.Tinder}>
                    <Tinder style={{flex: 1}} />
                </View>
                <View style={{height:100}}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 nav:{
     height:50,
     backgroundColor:'#ff0000',
     flexDirection:'row',
     
 },
 title:{
     marginTop:20,
     color:'#ffffff'
 },
 Tinder:{
     flex:1,
     marginTop:20
 }
});
export default FirstPage;