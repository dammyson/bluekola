import React, { Component } from "react";
import { View, StyleSheet, NativeModules,Image, AsyncStorage, Dimensions, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { Container, Content, Text, Button, Left, Right, Body, Title, List, Item, Thumbnail, Grid, Col } from 'native-base';
import { Card, Icon, SocialIcon } from 'react-native-elements'

var ImagePicker = NativeModules.ImageCropPicker;
import Navbar from '../utilities/Navbar';
import color from '../utilities/color';


export default class ServiceImage extends Component {

  constructor(props) {
    super(props);


    this.state = {
      loading: false,
      data: [],
      auth: '',
      dataone: [3, 4, 8],
      datatwo: [],
      slider1ActiveSlide: 0,
      selected: null,
      img_url: null,
      image: null,
      done: false,
    };
  }




  componentDidMount() {
    AsyncStorage.getItem('auth').then((value) => {
      if (value == '') {

      } else {
        this.setState({ auth: value })
      }

    })

  }

  

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
        width: 500,
        height: 300,
        cropping: cropit,
        cropperCircleOverlay: circular,
        sortOrder: 'none',
        compressImageMaxWidth: 1000,
        compressImageMaxHeight: 1000,
        compressImageQuality: 1,
        includeExif: true,
    }).then(image => {
        console.log('received image', image);
        this.setState({
            image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
        });
       // this.uploadPhoto();
    }).catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
    });
}


  render() {



    var left = (
      <Left style={{ flex: 1 }}>
        <Button transparent onPress={this.props.back}>
          <Icon
            active
            name="arrowleft"
            type='antdesign'
            color={color.black}
          />
        </Button>
      </Left>
    );

    var right = (
      <Right style={{ flex: 1, flexDirection: 'row' }}>
      </Right>
    );


    if (this.state.loading) {
      return (
        <View
          style={styles.backgroundImage}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.welcome}>
              <PulseIndicator color={color.slide_color_dark} size={70} />
            </View>
          </View>
        </View>
      );
    }

    if (this.state.done) {
      return (
        <View
        style={{ flex: 1, justifyContent: 'center' }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/checked.png')}
               />
          <Text style={styles.title}>Congratulations</Text>
          <Text style={styles.description}>You have successfully created a new service </Text>
          <Button style={styles.doneButtonContainer} block iconLeft>
               <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>ENTER</Text>
          </Button>
          </View>
        </View>
      );
    }

    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Navbar left={left} right={right} title='Profile' bg='#fff' />
        <Content>
          <View style={styles.backgroundImage}>
            <View style={{ flex: 1 }}>
              <View style={styles.pageHeading}>
                <Text style={styles.title}>Upload Image </Text>
                <Text style={styles.description}>Put up an image that best describes the service 
you are willing to offer  </Text>
              </View>
              <View style={styles.form}>
                <Text style={styles.label}>Enter Service name </Text>
               
                {this.state.image == null ?
                  <ImageBackground
                    style={styles.pictureContainer}>
                      <View style={{alignItems:'center',justifyContent: 'center',}}>
                      <Button style={{alignItems:'center'}} transparent onPress={() => this.pickSingle(true)}>
                      <Icon
                        active
                        name="camera"
                        type='feather'
                        color='#000'
                        size={40}
                      />
                    </Button>
                    </View>
                    <View style={{alignItems:'center',justifyContent: 'center',}}>
                    <Text style={{ fontSize: 14, color: '#000', textAlign:'center' }}>Add Event Poster/Image </Text>

                      </View>
                  </ImageBackground>
                  :
                  <ImageBackground
                    opacity={this.state.img_url != null ? 1 : 0.5}
                    source={this.state.img_url != null ? { uri: this.state.img_url } : this.state.image}
                    style={[styles.pictureContainer, { backgroundColor: "#000" }]}>
                        <View style={{alignItems:'center',justifyContent: 'center',}}>
                      <Button style={{alignItems:'center'}} transparent onPress={() => this.pickSingle(true)}>
                      <Icon
                        active
                        name="camera"
                        type='feather'
                        color='#000'
                        size={40}
                      />
                    </Button>
                    </View>
                    <View style={{alignItems:'center',justifyContent: 'center',}}>
                    <Text style={{ fontSize: 14, color: '#000', textAlign:'center' }}>Add Event Poster/Image </Text>

                      </View>
                  </ImageBackground>
                }
            
              </View>





              {this.state.buttonState == 'busy' ?
                    <Button style={styles.buttonContainer} block iconLeft>
                      <SkypeIndicator color='white' />
                    </Button>
                    : this.state.buttonState == 'success' ?
                      <Button style={styles.successButtonContainer} block iconLeft>
                        <Icon name="check" size={30} type='antdesign' color='#fff' />
                      </Button>
                      :
                      <Button style={styles.buttonContainer} block iconLeft>
                        <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>ENTER</Text>
                      </Button>}









            </View>
          </View>
        </Content>
      </Container>

    );
  }

}

const styles = StyleSheet.create({
  welcome: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
  },
  pageHeading: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25
  },
  title: {
    color: color.dark_blue,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  description: {
    color: color.dark_blue,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 10,
  },
  form: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25
  },
  label: {
    color: color.dark_blue,
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    marginTop: 15,
  },


  buttonContainer: {
    backgroundColor: "#749AD1",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  doneButtonContainer: {
    backgroundColor: "#17153D",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
    marginTop:20
  },
  successButtonContainer: {
    backgroundColor: "#5889c7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
  },

  pictureContainer: {
    height: Dimensions.get('window').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d96a6',
    margin: 10,
    borderRadius:15
  },
  logo:{
    width:160,
    height:160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:30
    
    
}
  


});