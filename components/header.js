import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView
} from 'react-native';

import {observer, action, inject } from 'mobx-react';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
    return (
      <SafeAreaView  style = {styles.header}>
        <Image source = {require('./../static/yetenegimLogo.jpeg')}
          style = {styles.Logo}
        ></Image>
        <Text style = {styles.yetenegim}>{ this.state.headerText }</Text>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#579ACF',
    zIndex: 1
  },
  Logo: {
    width: 50,
    height: 50,
    left: 20,
    borderWidth: 0,
    borderRadius: 25
  },
  yetenegim: {
    width: "100%",
    paddingLeft: "23%",
    top: 10,
    fontSize: 24,
    fontWeight: 'bold',
    height: 30

  }
})

export default Header;

