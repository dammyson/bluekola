
import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity,Image,  Dimensions, ImageBackground  } from 'react-native';

import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class IntroSlider extends Component {
  
  render() {
    return(
      <ImageBackground
      source={require('../../assets/bgtwo.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
      >

      <Swiper style={styles.wrapper} dot={<View style={{backgroundColor: '#749ad1', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      activeDot={<View style={{backgroundColor: '#2e2a79', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      paginationStyle={{
        bottom:  Dimensions.get('window').height/2
      }}
      loop={false}
      bounces = {true}>
     
     {this.renderServices()}

    </Swiper>

      </ImageBackground>
    );
    }


    renderServices() {
      let cat = [];
      for (var i = 0; i < categories.length; i++) {
          cat.push(

            <View style={styles.slide1}>

            <View style={styles.slidetop}>
                  <Image 
                    style={styles.logo}
                    resizeMode='contain'
                    source = {categories[i].image}
                  />
            </View>
  
            <View style={styles.slidebases}>
            <Text style={styles.headText}>{categories[i].title}</Text>
            <Text style={styles.text}>{categories[i].text}</Text>
            <TouchableOpacity style={styles.buttonContainer} 
              onPress ={() =>  this.props.navigation.navigate('Authentication')} >
                <Text style={styles.buttonText}
              >Sign Up</Text>
  
              </TouchableOpacity>
            </View>
          
        </View>
              );
      }
      return cat;
  }
}
var categories = [
  {
    key: 'somethun',
    title: 'Put your money where \n your phone is',
    text: 'Create a paychange wallet, and pay for petty \n transactions with your mobile phone.',
    image: require('../../assets/iconfour.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Fund your mobile wallet  ',
    text: 'Fund your wallet from your bank account, and from merchants around you.',
    image: require('../../assets/icontwo.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun-dos',
    title: 'No More Change wahala !',
    text: 'Receive your change and Pay for goods and services, on the go!',
    image: require('../../assets/iconthree.png'),
    backgroundColor: '#febe29',
  }
];
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  slidetop: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  slidebases: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },

  text: {
    color: '#2e2a79',
    fontSize: 13,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:25,
    marginRight:25,
    textAlign: 'center',
  },
  headText: {
    color: '#2e2a79',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:25,
    marginRight:25,
    textAlign: 'center',
  },
  buttonContainer:{
    height:50,
    backgroundColor: "#2e2a79",
    borderRadius: 30,
    alignItems: 'center',
    width: 300,
    marginLeft:25,
    marginRight:25,
    justifyContent: 'center',
    marginTop:35,
   
  },
  buttonText:{
        textAlign:'center',
        color: "#fff",
        fontWeight: '900'
  },
  logo:{
    width:280,
    height:280,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20

}
})