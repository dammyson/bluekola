
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ImageBackground} from 'react-native';


export default class Splash extends Component{

    performinTimeConsumingTask = async()=> {
      return new Promise((resolve) => {
          setTimeout(
            ()=> {resolve('result')},
            3000
          )
        })
    }

  async componentDidMount(){
    const data = await this.performinTimeConsumingTask();
    if(data !== null){
     this.props.navigation.navigate('IntroSlider');
    }
  }

  render() {
    return (
      <View style={styles.container}>
      
              <Image 
                style={styles.logo}
                resizeMode='contain'
                source = {require('../../assets/bklogo.png')}
               />
      </View>
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
    width:300,
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    
    
}
,
});
