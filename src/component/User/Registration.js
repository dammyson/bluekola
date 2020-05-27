import React, { Component } from "react";
import { Image, Dimensions, TextInput, StyleSheet, AsyncStorage, Alert, ImageBackground, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  View,
 
} from "native-base";
import {  Icon} from 'react-native-elements'
import { Field, reduxForm, Form } from 'redux-form';
const URL = require("../server");
import {
  SkypeIndicator,
} from 'react-native-indicators';
import Swiper from 'react-native-swiper';


const bg = require('../../assets/bgthree.png');
const logo = require('../../assets/logo.png');
import { Actions } from 'react-native-router-flux';


export default class Registration extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      buttonState: 'idle',
      phone:''
    };

  }

  componentDidMount() {
    this.setState({
      phone: this.props.navigation.getParam("userDetails", "defaultValue").phone
    })

  }

 


 login() {
   
    const { email, confirm_password, password, phone} = this.state
    if (email == "" || password == "" || confirm_password == "") {

      Alert.alert('Validation failed', ' Fields cannot be empty', [{ text: 'Okay' }])
      return

    } else {


      if(password.length > 5 ){
        if (password == confirm_password) {
          const userDetails = {phone: phone, email: email, password: password }
          console.warn(userDetails)
  
          this.setState({ buttonState: 'busy' })
          setTimeout(() => {
            this.setState({ buttonState: 'success' })

            this.props.navigation.navigate('Username', 
            {
              userDetails: userDetails,
            })
          
  
          }, 2000);
  
        } else {
          Alert.alert('Validation failed', 'Password are not the same please enter them again', [{ text: 'Okay' }]);
          return
        }
      }else{
        
        Alert.alert('Validation failed', 'Password must be morethan 5 character', [{ text: 'Okay' }]);
          return
      }

      


    }



    
  }


  render() {
    return (
      <Container>
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={styles.contentstyles}>

            <Swiper style={styles.wrapper}>

            <View style={styles.main}>

              <View style={styles.formArea}>

              <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} >
              <Icon
                name="arrowleft"
                size={30}
                type='antdesign'
                color= '#fff'
              />
              </TouchableOpacity>
              </View>
                <View style={styles.card} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Create email & Password </Text>
                  </View>
                    <Text style={styles.subTitle}> Enter email and password</Text>

                     <TextInput
                    placeholder="Email"
                    placeholderTextColor='#000'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    inlineImageLeft='ios-call'
                    onChangeText={text => this.setState({ email: text })}
                  />

                   <TextInput
                    placeholder="Password"
                    placeholderTextColor='#000'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordConfirmInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    inlineImageLeft='ios-call'
                    ref={(input)=> this.passwordInput = input}
                    onChangeText={text => this.setState({ password: text })}
                  />



                   <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor='#000'
                    returnKeyType="next"
                    onSubmitEditing={() =>this.login()}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    inlineImageLeft='ios-call'
                    onChangeText={text => this.setState({ confirm_password: text })}
                    ref={(input)=> this.passwordConfirmInput = input}
                  />

                  {this.state.buttonState =='busy' ?  
                  <Button style={styles.buttonContainer} block iconLeft>
                   <SkypeIndicator color='white' />  
                  </Button>               
                  : this.state.buttonState =='success' ?    
                   <Button style={styles.successButtonContainer} block iconLeft>
                  <Icon  name="check" size={30}  type='antdesign'  color= '#fff' />
                  </Button> 
                  : 
                   <Button onPress={() => this.login()} style={styles.buttonContainer} block iconLeft>
                  <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>ENTER</Text>
                  </Button>     }

                </View>

              </View>
            </View>
           
             </Swiper>
          </Content>
        </ImageBackground>
      </Container>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  background: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: 'center',

  },
  contentstyles: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  formArea: {
    flex: 1,
    justifyContent: 'center',
  },
  slideArea: {
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 20,
    paddingBottom: 40,
    paddingTop: 20
  },
  input: {
    height: 45,
    borderColor: '#3E3E3E',
    color: '#3E3E3E',
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#f1f1f1',
    borderColor: '#ffffff',
    paddingLeft:20
  },
  titleContainer: {
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    fontWeight: '800'
  },
  subTitle: {
    marginRight: 13,
    fontSize: 14,
    color: '#000',
    textAlign: 'left',
    fontWeight: '700',
    marginLeft: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#1A4093",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    borderRadius: 20,
  },
  successButtonContainer: {
    backgroundColor: "#5889c7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    borderRadius: 20,
  },
  arrowContainer: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent:'flex-start',
    marginLeft: 40,
    marginRight: 20,
  },
 
})