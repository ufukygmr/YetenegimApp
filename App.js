import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {observer, action, inject } from 'mobx-react';
import Icon from 'react-native-ionicons';
import MainStore from './mobx/store'
import Header from './components/header';
import Opening from './components/opening';
import MainPage from './components/mainPage';
import UserPage from './components/user';
import SignIn from './components/signin';
import VideoUpload from './components/videoUpload';
// import Navigator from './components/navigator';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // showLogin: MainStore.showLogin,
      // showHome: MainStore.showHome,
      // showUser: MainStore.showUser,
      // showPerson: MainStore.showPerson,
      // showAdd: MainStore.showAdd
    }
  }


  render() {
    // const page = () => {
    //   let output = null
    //   if(this.state.showLogin){
    //     output = (
    //       <Opening />
    //     )
    //   }
    //   else{
    //     if(this.state.showHome){
    //       output = (
    //         <View>
    //           <Header />
    //           <MainPage />
              
    //           {/* <SignIn /> */}
    //           <Footer />
    //         </View>
    //       )
    //     }
    //     else if (this.state.showUser){
    //       output = (
    //         <View>
    //           <Header />
    //           <UserPage />
    //           <Footer/>
    //         </View>
    //       )
    //     }
    //     else if(this.state.showAdd){
    //       output = (
    //         <View>
    //           <Header />
    //           <Footer/>
    //         </View>
            
    //       )
    //     }
    //   }
    //   return (output)
    return (
      <AppContainer />
      // <MainPage/>
    )
  }
}

const AppNavigator  = createBottomTabNavigator({
  "Ana Sayfa" : {
    screen: MainPage,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Ana Sayfa",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "home" color = {tintColor}></Icon>)
      }
    }
  },
  "Video Ekle": {
    screen : VideoUpload,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Ana Sayfa",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "add-circle-outline" color = {tintColor}></Icon>)
      }
    }
  },
  "Profil" : {
    screen : UserPage,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Profil",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "person" color = {tintColor}></Icon>)
      }
    }
  },
"Kayit Ol" : {
  screen: Opening,
  navigationOptions: {
    tabBarOptions: {
      activeTintColor: '#579ACF'
    },
    tabBarLabel: "KAyit Ol",
  }
},
"Kayit Devam": {
  screen: SignIn
}
}, 
)

const AppContainer  = createAppContainer(AppNavigator)

// <View>
      //   {page()}
      //   {/* <View style = {{
      //       flexDirection: "row",
      //       position: 'absolute',
      //       backgroundColor: 'white',
      //       padding: 10,
      //       top: 615
      //   }}>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //       >
      //         <Icon name = "home"></Icon>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //       >
      //         <Icon name = "add-circle-outline"></Icon>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //         onPress = {() => {this.props.navigation.navigate('Opening')}}
      //       >
      //         <Icon name = "person"></Icon>
      //       </TouchableOpacity>
      //   </View> */}
      // </View>