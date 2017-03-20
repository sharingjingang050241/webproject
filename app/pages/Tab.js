import React,{Component,PropTypes} from 'react';
import {
  StyleSheet,
  ListView,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  DrawerLayoutAndroid,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Platform,
  View,
  Alert,
  DeviceEventEmitter,
  Modal,
  BackAndroid,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import TabBar from './TabBar';
import {connect} from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
// import JPushModule from 'jpush-react-native';
const home = require('../img/home.png')
const home1 = require('../img/home1.png')
const us = require('../img/us.png')
const us1 = require('../img/us1.png')
class Tab extends Component {
  constructor(props) {
    super(props);
      //  if(Platform.OS === 'android') JPushModule.initPush();
    this.state = {
      tabNames: ['主页','我的','全部'],
      
      tabIconName: [home,home,  us],
      tabIconNames: [home1,home1, us1],
      isShareModal: false,
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
     
    }

  }


    componentWillUnmount(){
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }
  
        this.subscription && this.subscription.remove();
    }
   

   render() {
     
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    let tabIconName=this.state.tabIconName;
    const { navigator } = this.props;
  
    return (
      <ScrollableTabView
        renderTabBar={() => <TabBar  tabNames={tabNames} tabIconNames={tabIconNames} tabIconName={tabIconName} />}
        tabBarPosition='bottom'
        locked={true}
        scrollWithoutAnimation={true}
        initialPage={this.props.id} 
        prerenderingSiblingsNumber={1}  
        >
        <View tabLabel="ReactNative" style={styles.center}>
            <Text>11111</Text>          
        </View>
        <View tabLabel="0000" style={styles.center}>
            <Text>22222</Text>
        </View>
        <View tabLabel="1111" style={styles.center}>
            <Text>33333</Text>
        </View>
        
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  zhu:{
    backgroundColor: '#ff00ff',
  },
  center: {
    flex: 1,
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  listView: {
    backgroundColor: '#eeeeec'
  },
  no_data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginLeft: 2
  },
  drawerText: {
    fontSize: 18,
    marginLeft: 35,
    textAlign: 'center',
    color: 'black'
  },
  // 微信分享
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width ,
    //width: 1000 ,
    height: Dimensions.get('window').width * (7 / 12) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 0,
    borderRadius: 5,
    margin:0

  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center',
    marginTop: 5
  },
  shareContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
});

function select(store) {

 return {
   
      };
}
export default  connect(select)(Tab);