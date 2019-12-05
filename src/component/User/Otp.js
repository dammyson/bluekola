import React, { Component } from "react";
import { Image, Dimensions, TextInput, StyleSheet, AsyncStorage, Alert, ImageBackground, Platform, ActivityIndicator } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  View,
 
} from "native-base";
import { Field, reduxForm, Form } from 'redux-form';
const URL = require("../server");
import {
    SkypeIndicator,
  } from 'react-native-indicators';
import Swiper from 'react-native-swiper';
import {  Icon} from 'react-native-elements'

const bg = require('../../assets/bgthree.png');
const logo = require('../../assets/logo.png');
import { Actions } from 'react-native-router-flux';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default class Otp extends Component {


  componentDidMount() {
    AsyncStorage.setItem('rem', "login");

    AsyncStorage.getItem('email').then((value) => {
      if (value.toString() == '') {
        this.setState({ 'demail': "" })
      } else {

        this.setState({ 'demail': value.toString() })
      }

    })


  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: true,
      demail: "",
      buttonState: 'idle'
    };

  }

/*
  login() {

    let mail = "";
    const { email, demail, token, password } = this.state
    if (email == "") {

      if (demail == "") {
        Alert.alert('Validation failed', 'Email field cannot be empty', [{ text: 'Okay' }])
        return
      } else {
        mail = demail;
      }

    } else {
      mail = email;
    }

    if (password == "") {
      Alert.alert('Validation failed', 'Password field cannot be empty', [{ text: 'Okay' }])
      return
    }

    this.setState({ loading: true })
    fetch(URL.url + '/api/login', {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
        email: mail,
        mobile_token: token,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          AsyncStorage.setItem('auth', res.token.toString());
          AsyncStorage.setItem('email', email);
          AsyncStorage.setItem('rem', "user");
          this.setState({ loading: false })
          Actions.home();
        } else {

          Alert.alert('Login failed', "Check your email and password and try again", [{ text: 'Okay' }])
          this.setState({ loading: false })
        }
      }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
        this.setState({ loading: false })
      });

  }*/

  logIn() {
    this.setState({ buttonState: 'busy' })

    setTimeout(() => {
      this.setState({ buttonState: 'success' })
      setTimeout(() => {
       Actions.reg();
      }, 2000);
  
    }, 2000);

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
              <Icon
                name="arrowleft"
                size={30}
                type='antdesign'
                color= '#fff'
              />
              </View>
                <View style={styles.card} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Verify your Number</Text>
                  </View>
                    <Text style={styles.subTitle}>A one time password has been sent to your mobile device. Enter the code to verify your number</Text>
                    <View style={styles.otpContainer}>

                        <OTPInputView
                            style={{width: '80%', height: 60}}
                            pinCount={6}
                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            // onCodeChanged = {code => { this.setState({code})}}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled = {(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        />
                    </View>
                    

                   {this.state.buttonState =='busy' ?  
                  <Button style={styles.buttonContainer} block iconLeft>
                   <SkypeIndicator color='white' />  
                  </Button>               
                  : this.state.buttonState =='success' ?    
                   <Button onPress={() => this.logIn()} style={styles.successButtonContainer} block iconLeft>
                  <Icon  name="check" size={30}  type='antdesign'  color= '#fff' />
                  </Button> 
                  : 
                   <Button onPress={() => this.logIn()} style={styles.buttonContainer} block iconLeft>
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


  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 40,
    height: 40,
    borderWidth: 1,
    margin:3,
    borderRadius: 20,
    backgroundColor:'#f1f1f1',
   
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  otpContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  }
  
 
})