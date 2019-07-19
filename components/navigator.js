import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {observer, action, inject } from 'mobx-react';
import AppContainer from './footer';
import mainPage from './mainPage';
import Header from './header';
import Opening from './opening';
import UserPage from './user';
import SignIn from './signin';

class Navigator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <AppContainer2 />
    )
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen : mainPage
  },
  Profil: {
    screen: UserPage
  }
})

const AppContainer2 = createAppContainer(BottomTabNavigator)


export default Navigator;

