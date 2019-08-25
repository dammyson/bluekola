import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity,Image,  Dimensions, ImageBackground  } from 'react-native';

import Swiper from 'react-native-swiper';

export default class IntroSlider extends Component {
  
  render() {
    return(
      <Swiper style={styles.wrapper} dot={<View style={{backgroundColor: '#66cc00', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      activeDot={<View style={{backgroundColor: '#FFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      paginationStyle={{
        bottom: 200
      }}>
      <View style={styles.slide1}>
          <ImageBackground
          source={require('../../assets/bgone.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
          >

         <View style={styles.slidetop}>
         </View>
         <View style={styles.slidemid}>

              <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/bklogoo.png')}
               />
         <Text style={styles.text}>Get better control of your finances and time.</Text>
         </View>
         <View style={styles.slidebases}>
         <TouchableOpacity style={styles.buttonContainer} 
           onPress ={() =>  this.props.navigation.navigate('Registration')} >
            <Text style={styles.buttonText}
          >Sign Up</Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress ={() =>  this.props.navigation.navigate('Login')} >
          <Text style={styles.headTextW}>Sign In</Text>
          </TouchableOpacity>
         </View>
         </ImageBackground>
      </View>
     

      <View style={styles.slide1}>
          <ImageBackground
          source={require('../../assets/bgtwo.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
          >

         <View style={styles.slidetop}>
         </View>
         <View style={styles.slidemid}>
         <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/bklogoo.png')}
               />
         <Text style={styles.text}>Track Your time and maximize productivity.</Text>
         </View>
         <View style={styles.slidebases}>
         <TouchableOpacity style={styles.buttonContainer} 
           onPress ={() =>  this.props.navigation.navigate('Registration')} >
            <Text style={styles.buttonText}
          >Sign Up</Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress ={() =>  this.props.navigation.navigate('Login')} >
          <Text style={styles.headTextW}> Sign In</Text>
          </TouchableOpacity>
         </View>
         </ImageBackground>
      </View>



      <View style={styles.slide1}>
          <ImageBackground
          source={require('../../assets/bgthree.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
          >

         <View style={styles.slidetop}>
         </View>
         <View style={styles.slidemid}>
         <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/bklogoo.png')}
               />
         <Text style={styles.text}>Monitor all your finances in one place with ease.</Text>
         </View>
         <View style={styles.slidebases}>
         <TouchableOpacity style={styles.buttonContainer} 
           onPress ={() =>  this.props.navigation.navigate('Registration')} >
            <Text style={styles.buttonText}
          >Sign Up</Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress ={() =>  this.props.navigation.navigate('Login')} >
          <Text style={styles.headTextW}>Sign In</Text>
          </TouchableOpacity>
         </View>
         </ImageBackground>
      </View>
     


      <View style={styles.slide1}>
          <ImageBackground
          source={require('../../assets/bgfour.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
          >

         <View style={styles.slidetop}>
         </View>
         <View style={styles.slidemid}>
         <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/bklogoo.png')}
               />
         <Text style={styles.text}>Monitor all your finances in one place with ease.</Text>
         </View>
         <View style={styles.slidebases}>
         <TouchableOpacity style={styles.buttonContainer} 
           onPress ={() =>  this.props.navigation.navigate('Registration')} >
            <Text style={styles.buttonText}
          >Sign Up</Text>

          </TouchableOpacity>
          <TouchableOpacity
          onPress ={() =>  this.props.navigation.navigate('Login')} >
          <Text style={styles.headTextW}>Sign In</Text>
          </TouchableOpacity>
         </View>
         </ImageBackground>
      </View>
     
    </Swiper>
    );
    }
}
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  slidetop: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  slidemid: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidebases: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  text: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:25,
    marginRight:25,
    textAlign: 'center',
  },
  buttonContainer:{
    height:50,
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: 'center',
    width: 300,
    marginLeft:25,
    marginRight:25,
    justifyContent: 'center',
   
  },
  buttonText:{
        textAlign:'center',
        color: "#000",
        fontWeight: '700'
  },
  headTextW:{
    color: "#FFF",
    fontWeight: '900',
    fontSize:15,
    textAlign:'left',
    marginTop:15
  },
  logo:{
    width:150,
    height:150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
    
    
}
})