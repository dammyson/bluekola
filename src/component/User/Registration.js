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
      loading: false,
      demail: "",
      buttonState: 'idle'
    };

  }


 /*  login() {
    this.setState({ loading: true })
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
        this.setState({ buttonState: 'idle' })
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
                    <Text style={styles.title}> Create Username & Password </Text>
                  </View>
                    <Text style={styles.subTitle}> Enter username and password</Text>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor='#000'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    inlineImageLeft='ios-call'
                    onChangeText={text => this.setState({ username: text })}
                  />

                   <TextInput
                    placeholder="Password"
                    placeholderTextColor='#000'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    inlineImageLeft='ios-call'
                    onChangeText={text => this.setState({ username: text })}
                  />



                   <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor='#000'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    inlineImageLeft='ios-call'
                    onChangeText={text => this.setState({ username: text })}
                  />

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