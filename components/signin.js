import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Picker,
  ScrollView,
  MultipleChoice
} from 'react-native';
import axios from "axios";
import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import {observer, action, inject } from 'mobx-react';
import MainStore from './../mobx/store';
import { black } from 'ansi-colors';


@observer 
class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        brans: "Futbolcu",
        newUser: {
            brans: 'brans',
            lig: 'lig'
        },
        
    }
  }

  updateBrans = (brans) => {
      this.setState({brans: brans})
      this.state.newUser.brans = brans
  }
  addGecmisKulup = (kulup) =>{
      this.state.newUser.kulup = kulup
  }

  onSubmit = () => {
      
  }


  render() {
      const signin = () => {
          let output = null
          const brans = this.state.brans
        if(brans === "Antrenor"){
            output = (
                <View>
                    <View   style = {styles.container}>
                        <Text>Gecmis Kulupler</Text>
                        <TextInput 
                            value = 'Gecmis Kulipler'
                            style = {styles.input}
                        />
                    </View>
                    <View   style = {styles.container}>
                        <Text>Sertifikalar</Text>
                        <TextInput 
                            value = {this.state.newUser.sertifikalar}
                            onChangeText = {(sertifikalar) => {
                                this.state.newUser.sertifikalar = sertifikalar
                            }}
                            style = {styles.input}
                        />
                    </View>
                    <View   style = {styles.container}>
                        <Text>TFF linki</Text>
                        <TextInput 
                            value = 'TFF linki'
                            style = {styles.input}
                        />
                    </View>
                </View>
            )
        }
        else if(brans === 'Kulup Personeli'){
            output = (
                <View style = {styles.container}>
                    <Text style = {styles.texts}>Calistigi Pozisyon</Text>
                    <TextInput 
                        value = 'calistigi Pozisyon'
                        style = {styles.input}
                    />
                </View>
            )
        }
        else if( brans === "Futbolcu"){
            output = (
                <View>
                    <View style = {styles.container}>
                        <Text>Mevki</Text>
                        {/* <MultipleChoice
                            options = {[
                                'Kaleci',
                                'Stoper',
                                'Sağ Bek',
                                'Sol Bek',
                                'Ön Libero',
                                'Defansif Orta Saha',
                                'Ofansif Orta Saha',
                                'Orta Saha',
                                'Sağ Kanat',
                                'Sol Kanat',
                                'Kanat Forvet',
                                'Forvet',
                                'Santrafor'
                            ]}
                        /> */}
                    </View>
                    

                    <View   style = {styles.container}>
                        <Text style = {styles.texts}>Dogum Yili</Text>
                        <TextInput 
                            value = "9999999999"
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Boy</Text>
                        <TextInput 
                            value = "9999999999"
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Kilo</Text>
                        <TextInput 
                            value = "9999999999"
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text>Kullandigi Ayak</Text>
                        <Picker>
                            <Picker.Item label = "Sag" value = "Sag" />
                            <Picker.Item label = "Sol" value = "Sol" />
                        </Picker>
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Lig</Text>
                        <TextInput 
                            value = {this.state.lig}
                            style = {styles.input}
                            onChangeText ={(input) => {
                                this.setState({lig: input})
                            }}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Lisans No</Text>
                        <TextInput 
                            value = "9999999999"
                            style = {styles.input}
                        />
                    </View>
                </View>
            )
        }
        else {
            return (null)
        }
        return (output)
      }
    
    return (
        <ScrollView>
            <View>
                <View style = {styles.container}>
                    <Text style = {styles.texts}>Isim</Text>
                    <TextInput 
                        value = 'buraya isim girilecek'
                        style = {styles.input}
                    />
                </View>
                <View   style = {styles.container}>
                    <Text   style = {styles.texts}>Soy Isim</Text>
                    <TextInput 
                        value = 'buraya soyisim girilecek'
                        style = {styles.input}
                    />
                </View >
            </View>
            
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Brans</Text>
                <Picker selectedValue = {this.state.brans} onValueChange = {this.updateBrans} >
                    <Picker.Item label = "Futbolcu" value = "Futbolcu"/> 
                    <Picker.Item label = "Antrenor" value = "Antrenor"/> 
                    <Picker.Item label = "Kulup Personeli" value = "Kulup Personeli"/> 
                    <Picker.Item label = "Sivili Gozlemci" value = "Sivil Gozlemci"/> 

                </Picker>
            </View>
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Cinsiyet</Text>
                <Picker>
                    <Picker.Item value = "Erkek" label = "Erkek" />
                    <Picker.Item value = "Kadin" label = "Kadin" />
                </Picker>
            </View>
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Kulup</Text>
                <TextInput 
                    value = 'Fenerbahce'
                    style = {styles.input}
                />
            </View>
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Sehir</Text>
                <TextInput 
                    value = 'buraya sehir girilecek'
                    style = {styles.input}
                />
            </View>
            {signin()}
            <TouchableOpacity style = {styles.submit}>
                <Text style = {styles.submitText}>Kaydi Tamamla</Text>
            </TouchableOpacity>
        </ScrollView>
    )   
  }
}

const styles = StyleSheet.create({
    isim: {
        flexDirection: 'row'
    },
    container: {
        top: 40,
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        left: 40,
        padding: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'white'
    },
    texts: {
        fontSize: 16,
        left : 20,
        color: 'black'

    },
    input: {
        color: '#c1c0c0',
        marginTop: 10,
        marginBottom: 10,
        left: 20
    },  
    submit : {
        borderWidth: 1,
        borderColor: '#579ACF',
        borderRadius: 20,
        width: 150,
        height: 40,
        top: 60,
        marginBottom: 250,
        left: 120
    },
    submitText:{
        top: 10,
        left: 25
    },
    empty:{
        height: 300
    }
})

export default SignIn;

