import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  List
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { StackNavigator } from 'react-native-navigation';
import {observer} from 'mobx-react';
import MainStore from './../mobx/store'
import Header from './header';


@observer 
class mainPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            videoPosts: [
                {
                    name : "Nicat",
                    sharedDate: " 4 gun once",
                    videoUrl: './../static/video.mp4',
                    videoText: "12 numara orta acan benim",
                    profilPhoto: './../static/yetenegimLogo.jpeg',
                },
                {
                    name : "Nicat",
                    sharedDate: " 4 gun once",
                    videoUrl: "./../static/video.mp4",
                    videoText: "12 numara orta acan benim",
                    profilPhoto: './../static/yetenegimLogo.jpeg',
                }
            ],
        }
    }

    renderItem = ({item}) => {
        return(
        <View>
            <Image 
                source={{uri: item.profilPhoto}}
            />
        </View>)
    }
  
    render() {
    return (
        <View>
            <ScrollView
                style= {styles.main}
            >   
                <FlatList
                    data={[{url : 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}, {url: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}]}
                    renderItem={(item) => <Text>{item.url}</Text>}
                />  
                <View style ={styles.empty}></View>
            </ScrollView>
        </View>
        
    )   
  }
}

const styles = StyleSheet.create({
    logo: {
        width : 24,
        height: 24
    },
    main:{
        top: 50,
        // bottom:700,
    },
    userText: {
        flexDirection: 'row'
    },
    sharedDate: {
        color: 'grey'
    },
    sharedUserName: {
        color: 'blue',
        left: 15
    },
    backgroundVideo: {
        flex: 1,
        width: 400,
        height: 250,
        marginTop: 20
    },
    videoFooter: {
        flexDirection: "row",
    },
    videoFooter2: {
        flexDirection: "row",
        paddingBottom: 10
    },
    expand: {
        left: 290
    }, 
    yorum : {
        position: 'absolute',
        top: 50
    },
    icons:{
        flex: 4,
        left: 30,
    },
    empty:{
        height: 200
    },
    eyeIcon:{
        flex: 3,
        marginLeft: 30,
        paddingBottom: 20,
        flexDirection: 'row'
    },  
    eyeText: {
        top: 7,
        left: 10
    },
    iconBalls:{
        flexDirection: 'row',
        flex: 4,
    },
    rating: {
        borderRadius: 24
    },
    ratingText: {
        top: 5,
        left: 20
    } ,
    commandContainer: {
        flexDirection: 'row',
        left: 10,
        paddingTop: 10
    },
    commandOwner: {
        color: '#579ACF',
    },
    commandText: {
        left: 10
    },
    commandContent: {
        flex: 1,
        left: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    commands: {
        backgroundColor: '#F9F9F9',
        marginVertical: 5,
    }
    // Main :{
    //     paddingTop: 50,
    //     paddingBottom: 75
    // }
})

export default mainPage;

