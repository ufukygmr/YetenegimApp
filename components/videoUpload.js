import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  DocumentPicker,
  DocumentPickerUtil,
} from 'react-native-document-picker';

import Header from './header'
 
class VideoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      fileType: '',
      fileName: '',
      fileSize: '',
    };
  }
  handleChange() {
    //Opening Document Picker
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()],
        //All type of Files DocumentPickerUtil.allFiles()
        //Only PDF DocumentPickerUtil.pdf()
        //Audio DocumentPickerUtil.audio()
        //Plain Text DocumentPickerUtil.plainText()
      },
      (error, res) => {
        this.setState({ fileUri: res.uri });
        this.setState({ fileType: res.type });
        this.setState({ fileName: res.fileName });
        this.setState({ fileSize: res.fileSize });
 
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.fileName);
        console.log('File Size : ' + res.fileSize);
      }
    );
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ alignItems: 'center' }}
          onPress={this.handleChange.bind(this)}>
          <Image
            source={{
              uri:
                'https://aboutreact.com/wp-content/uploads/2018/09/clips.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={{ marginTop: 10 }}>Add Attachment</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          {this.state.fileUri ? 'URI\n' + this.state.fileUri : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileType ? 'Type\n' + this.state.fileType : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileName ? 'File Name\n' + this.state.fileName : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileSize ? 'File Size\n' + this.state.fileSize : ''}
        </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  text: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
    color: 'black',
  },
  ImageIconStyle: {
    height: 80,
    width: 80,
    resizeMode: 'stretch',
  },
});

export default VideoUpload;