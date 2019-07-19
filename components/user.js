import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import {observer, action, inject } from 'mobx-react';
import MainStore from './../mobx/store';
import { black } from 'ansi-colors';
import MainPage from './mainPage';
import Header from './header';
import { FlatList } from 'react-native-gesture-handler';


@observer 
class userPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: MainStore.user,
      showProfil : false,
      showGonderiler: false,
      showTakipEdilenler: true,
      user : MainStore.mainUser,
      visible: false,
      friends: [
        {
          name: 'Ufuk',
          id: 123
        },
        {
          name: 'Anil',
          id: 1
        },
        {
          name: 'Aslan',
          id: 3
        }
      ]
    }
  }

  toggleShowProfil = () => {
    this.setState({showProfil: true}),
    this.setState({showGonderiler:false}),
    this.setState({showFriends: false})
  }
  toggleShowGonderiler = () => {
    this.setState({showProfil: false}),
    this.setState({showGonderiler: true}),
    this.setState({showFriends: false})
  }
  toggleShowFriends = () => {
    this.setState({showProfil: false}),
    this.setState({showGonderiler: false}),
    this.setState({showFriends: true})
  }
  render() {
    const arr = () => {
      let output = null 
      if (this.state.showGonderiler){
        output = (
          <View style = {{top: 100}}>
            <MainPage />
            <View style = {{height: 200}}></View>
          </View>
        )
      }
      else if (this.state.showProfil) {
        output = (
          <ScrollView style = {styles.profilYazi}>
            <Text style= {styles.gonderiText}> Isim: {this.state.user.name}</Text>
            <Text style= {styles.gonderiText}> Surname: {this.state.user.surname}</Text>
            <Text style= {styles.gonderiText}> Brans: {this.state.user.sportArea}</Text>
            <Text style= {styles.gonderiText}> Cinsiyet: {this.state.gender}</Text>
            <Text style= {styles.gonderiText}> Klup: {this.state.user.club}</Text>
            <Text style= {styles.gonderiText}> Mevki: {this.state.user.city}</Text>
            <Text style= {styles.gonderiText}> Dogum Tarihi: {this.state.user.birthDay}</Text>
            <Text style= {styles.gonderiText}> Boy: {this.state.user.height}</Text>
            <Text style= {styles.gonderiText}> Kilo: {this.state.user.weight}</Text>
            <Text style= {styles.gonderiText}> Ayak: {this.state.user.usedLeg}</Text>
            <Text style= {styles.gonderiText}> Lig: {this.state.user.leauge}</Text>
            <View style = {{height: 450}}></View>
          </ScrollView>
        )
      }
      else if(this.state.showTakipEdilenler){
        output = (
          <ScrollView>
            <FlatList 
              data = {this.state.friends}
              renderItem = {({item}) => 
              <View>
                <Text>item.name</Text>
              </View>
            }
            />
          </ScrollView>
        )
      }
      return (output)
    }
    return (
      <View>
        <Header />
        <View style = {styles.personView}>
          <View style = {styles.profilFoto}>
            <Icon name = 'person' 
              style = {styles.personIcon}
              resizeMode = "strech"
            ></Icon>
          </View>
          <Text 
            style = {styles.name}
          >@{this.state.user.surname}</Text>
        </View>
        <View 
          style = {styles.profilHeaders}
        > 
          <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowGonderiler()}}
          >
              <Icon name = 'menu' style = {styles.Icon}></Icon>
              <Text style = {styles.headerIconText}>Gonderiler</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowProfil()}}
          >
            <Icon name = 'person' style = {styles.Icon}></Icon>
            <Text style = {styles.headerProfil}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowFriends()}}
          >
            <Icon name = 'people' style = {styles.Icon}></Icon>
            <Text style = {styles.headerIconText}>Takip Edilenler</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowFriends()}}
          >
            <Icon name = 'people' style = {styles.Icon}></Icon>
            <Text style = {styles.headerIconText}>Takipçiler</Text>
          </TouchableOpacity>
        </View>
        {arr()}
      </View>
    )   
  }
}

const styles = StyleSheet.create({
  personView: {
    top: 30
  },  
  profilFoto: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
    fontSize: 200
  },
  personIcon: {
    left: 20,
    top: -13,
    fontSize: 150
  },
  name: {
    alignSelf: "center",
    top: 20
  },
  profilHeaders: {
    flexDirection: 'row',
    top: 80
  },
  headerIcons: {
    width: "25%",
  },
  Icon: {
    textAlign: "center"
  },
  headerIconText: {
    textAlign: "center"
  },
  headerProfil: {
    left: -5,
    textAlign: 'center'
  },
  profilYazi: {
    alignSelf: 'stretch',
    top: 100,
    width: "90%",
    // height: 300,
    marginHorizontal : "5%"
  },
  gonderiText: {
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    marginVertical: "1%",
    borderColor: '#579ACF'
  }
})


export default userPage;

