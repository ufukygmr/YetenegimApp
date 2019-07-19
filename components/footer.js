import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {observer, action, inject } from 'mobx-react';
import MainStore from './../mobx/store';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-ionicons';
import Header from './header';
import Opening from './opening';
import MainPage from './mainPage';
import UserPage from './user';
import SignIn from './signin';


class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }}

    showHome = () => {
      MainStore.showHome = true
      MainStore.showAdd = false
      MainStore.showPerson = false
      MainStore.showUser = false
    }

    showPerson = () => {
      MainStore.showHome = true
      MainStore.showAdd = false
      MainStore.showPerson = false
      MainStore.showUser = false
    }

    showUser = (id) => {
      MainStore.showHome = false
      MainStore.showAdd = false
      MainStore.showPerson = false
      MainStore.showUser = true
    }


  render() {
    return (
        <View style = {{
            flexDirection: "row",
            position: 'absolute',
            backgroundColor: 'white',
            padding: 10,
            top: 615
        }}>
            <TouchableOpacity
              style = {styles.icons}
              onPress = {this.showHome()}
            >
              <Icon name = "home"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style = {styles.icons}
            >
              <Icon name = "add-circle-outline"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style = {styles.icons}
              onPress = {() => {this.showPerson()}}
            >
              <Icon name = "person"></Icon>
            </TouchableOpacity>

        </View>
    )   
  }
}

const RootStack = createStackNavigator(
  {
    Main: MainPage,
    Opening: Opening,
  },
  {
    initialRouteName: "Main"
  }
)

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
    icons : {
        flex: 4,
        left: 50
        
    }
})

export default AppContainer;

