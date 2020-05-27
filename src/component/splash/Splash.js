
import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, Dimensions, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Splash extends Component{
  async componentDidMount(){
    setTimeout(() => {
     this.initPage();
    // this.props.navigation.navigate('IntroSlider');
    }, 1000);
   }

  initPage = () => {
    AsyncStorage.getItem('rem').then((value) => {
      console.warn(value);
      if(value=='login'){
        this.props.navigation.navigate('Home');
      }else if(value==null){
        this.props.navigation.navigate('IntroSlider');
      }
      else{
        this.props.navigation.navigate('IntroSlider');
      } 
    })
   
  }

  render() {
    return (
      <ImageBackground
      source={require('../../assets/bgtwo.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
      >
      <View style={styles.container}>
              <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/logo.png')}
               />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
    height: Dimensions.get('window').height,
  },
  logo:{
    width:160,
    height:160,
    alignItems: 'center',
    justifyContent: 'center',
    
    
}
,
});
