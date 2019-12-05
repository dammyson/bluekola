
import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, Dimensions, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Splash extends Component{
  async componentDidMount(){
    setTimeout(() => {
     //this.initPage();
    Actions.intro({ email: "jesus" });
    }, 1000);
   }

  initPage = () => {
     
    AsyncStorage.getItem('rem').then((value) => {
      console.log(value)

      if(value=='login'){
        Actions.login({ email: "jesus" });
      }else if(value=="user"){
        Actions.home({ email: "jesus" });
      }else if(value==null){
        Actions.intro({ email: "jesus" });
      }
      else{
        Actions.intro({ email: "jesus" });
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
