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
  Left,
  Right,
  Toast
} from "native-base";
import { SocialIcon } from 'react-native-elements'
import {  Icon} from 'react-native-elements'
import { Field, reduxForm, Form } from 'redux-form';
const URL = require("../../component/server");
import {
  SkypeIndicator,
} from 'react-native-indicators';
import Swiper from 'react-native-swiper';

const bgone = require('../../assets/signupbgone.png');
const bgtwo = require('../../assets/signupbgtwo.png');

const logo = require('../../assets/logo.png');
import { Actions } from 'react-native-router-flux';

export default class Authentication extends Component {


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
      login_loading: true,
      demail: "",
      phone:'',
      regButtonState: 'idle',
      loginButtonState: 'idle',
      username:'',
      password:''
    };

  }



  processRegistration(){

    const { phone } = this.state

    if (phone == "") {
      Alert.alert('Validation failed', 'Phone field cannot be empty', [{ text: 'Okay' }])
      return
    } else {
      if (phone.length == 15 || phone.length == 11) {

      } else {
        Alert.alert('Validation failed', 'Phone number is invalid', [{ text: 'Okay' }])
      }

    }

    this.setState({ regButtonState: 'busy' })
    var phonenumber = 0 + phone.substr(phone.length - 10);

      const userDetails = { phone: phonenumber }
      Actions.otp({ userDetails: userDetails });
/*

    fetch(URL.url + '/api/send_otp', {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
        phone: phonenumber,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          const userDetails = { phone: phonenumber }
          this.setState({ regButtonState: 'success' })
           setTimeout(() => {
            Actions.otp({ userDetails: userDetails });
           }, 2000);


        } else {

          Alert.alert('Operation failed', "Pleas check you details and try again", [{ text: 'Okay' }])
          this.setState({ regButtonState: 'error' })
          setTimeout(() => {
            this.setState({ regButtonState: 'idle' })
          }, 2000);
        }
      }).catch((error) => {
        alert(error.message);
        this.setState({ regButtonState: 'error' })
        setTimeout(() => {
          this.setState({ regButtonState: 'idle' })
        }, 2000);
      });
*/
  }


  processLogin(){

    const { username, password} = this.state

    if (username == ""  || password == "") {
      Alert.alert('Validation failed', 'Userdetails field cannot be empty', [{ text: 'Okay' }])
      return
    } 


    this.setState({ loginButtonState: 'busy' })

    fetch(URL.url + '/api/login', {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.warn(res)
        if (res.status) {
          AsyncStorage.setItem('auth', res.token.toString());
          AsyncStorage.setItem('rem', "login");
          this.setState({ loginButtonState: 'success' })
            Actions.home();

        } else {

          Alert.alert('Operation failed', "Pleas check you details and try again", [{ text: 'Okay' }])
          this.setState({ loginButtonState: 'error' })
          setTimeout(() => {
            this.setState({ loginButtonState: 'idle' })
          }, 2000);
        }
      }).catch((error) => {
        alert(error.message);
        this.setState({ loginButtonState: 'error' })
        setTimeout(() => {
          this.setState({ loginButtonState: 'idle' })
        }, 2000);
      });
  }

  render() {
    return (
      <Container>

        <Content contentContainerStyle={styles.contentstyles}>

          <Swiper style={styles.wrapper}
            showsPagination={false}
            loop={false}
          >



            <ImageBackground source={bgtwo} style={styles.background}>
              <View style={styles.main}>

                <View style={styles.formArea}>
                  <Image style={styles.image}
                    source={require('../../assets/iconfive.png')}
                    resizeMode='contain'
                  />
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign In</Text>
                  </View>
                  <View style={styles.card} >
                    <Text style={styles.subTitle}>Enter log in details</Text>
                    <TextInput
                      placeholder="username"
                      placeholderTextColor='#000'
                      returnKeyType="next"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.input}
                      inlineImageLeft='ios-call'
                      onChangeText={text => this.setState({ username: text })}
                    />

                    <TextInput
                      placeholder="password"
                      placeholderTextColor='#000'
                      returnKeyType="next"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.passinput}
                      inlineImageLeft='ios-call'
                      onChangeText={text => this.setState({ password: text })}
                    />

                  {this.state.loginButtonState =='busy' ?  
                  <Button style={styles.buttonContainer} block iconLeft>
                   <SkypeIndicator color='white' />  
                  </Button>               
                  : this.state.loginButtonState =='success' ?    
                   <Button style={styles.successButtonContainer} block iconLeft>
                  <Icon  name="check" size={30}  type='antdesign'  color= '#fff' />
                  </Button> 
                  : 
                  this.state.loginButtonState =='error' ?    
                   <Button style={styles.errorButtonContainer} block iconLeft>
                  <Icon  name="check" size={30}  type='antdesign'  color= '#fff' />
                  </Button> 
                  : 
                   <Button onPress={() => this.processLogin()} style={styles.buttonContainer} block iconLeft>
                  <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>ENTER</Text>
                  </Button>   }

                  </View>

                </View>

                <View style={styles.instructions}>
                  <Text style={styles.instructionTitle}>Not a member?</Text>
                  <Text style={styles.instructionSubTitle}> Swipe Right to Sign up</Text>
                </View>
              </View>


            </ImageBackground>

            <ImageBackground source={bgone} style={styles.background}>
              <View style={styles.main}>

                <View style={styles.formArea}>
                  <Image style={styles.image}
                    source={require('../../assets/iconone.png')}
                    resizeMode='contain'
                  />
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                  </View>
                  <View style={styles.card} >
                    <Text style={styles.subTitle}>Register with phone number</Text>
                    <TextInput
                      placeholder="+23481123456789"
                      placeholderTextColor='#000'
                      returnKeyType="next"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      keyboardType="numeric"
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.input}
                      inlineImageLeft='ios-call'
                      onChangeText={text => this.setState({ phone: text })}
                    />

                    {this.state.loginButtonState =='busy' ?  
                  <Button style={styles.buttonContainer} block iconLeft>
                   <SkypeIndicator color='white' />  
                  </Button>               
                  : this.state.loginButtonState =='success' ?    
                   <Button style={styles.successButtonContainer} block iconLeft>
                  <Icon  name="check" size={30}  type='antdesign'  color= '#fff' />
                  </Button> 
                  : this.state.loginButtonState =='error' ?    
                  <Button style={styles.errorButtonContainer} block iconLeft>
                 <Icon  name="close" size={30}  type='antdesign'  color= '#fff' />
                 </Button> 
                 : 
                  <Button onPress={() => this.processRegistration()} style={styles.buttonContainer} block iconLeft>
                 <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>ENTER</Text>
                 </Button>     }

                    <View style={styles.inputContainer}>
                      <View style={styles.lineStyle} />
                      <Text style={{ color: 'black', margin: 10, fontSize: 15, fontWeight: '200' }}>or</Text>
                      <View style={styles.lineStyle} />
                    </View>
                    <View style={{}}>
                      <Text style={styles.subTitle}>Register with social media</Text>
                    </View>

                    <View style={styles.socialContainer}>
                      <SocialIcon
                        type='facebook'
                        iconSize={18}
                      />

                      <SocialIcon
                        type='google-plus-official'
                        iconSize={18}
                      />
                      <SocialIcon
                        type='twitter'
                        iconSize={18}
                      />
                      <SocialIcon
                      
                        type='instagram'
                        iconSize={18}
                      />
                    </View>
                  </View>

                </View>

                <View style={styles.instructions}>
                  <Text style={styles.instructionTitle}>Already have an account?</Text>
                  <Text style={styles.instructionSubTitle}> Swipe Left to login</Text>
                </View>
              </View>
            </ImageBackground>


          </Swiper>
        </Content>

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
  wrapper:{
 
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
    paddingBottom: 10,
    paddingTop: 20
  },
  input: {
    height: 45,
    borderColor: '#3E3E3E',
    color: '#3E3E3E',
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#f1f1f1',
    borderColor: '#ffffff',
    paddingLeft:20
  },
  passinput: {
    height: 45,
    borderColor: '#3E3E3E',
    color: '#3E3E3E',
    marginTop: 19,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#f1f1f1',
    borderColor: '#ffffff',
    paddingLeft:20
  },
  titleContainer: {
    marginLeft: 40,
    marginBottom: 10,
    marginTop: 1,
  },
  title: {
    marginTop: 27,
    marginBottom: 10,
    fontSize: 20,
    color: '#FFF',
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
  },
  buttonContainer: {
    backgroundColor: "#1A4093",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderRadius: 20,
  },
  loginButtonContainer: {
    backgroundColor: "#1A4093",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20,
  },
  successButtonContainer: {
    backgroundColor: "#5889c7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    borderRadius: 20,
  },
  errorButtonContainer: {
    backgroundColor: "#e60a13",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 3,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  lineStyle: {
    height: 0.5,
    flex: 1,
    marginTop: 20,
    backgroundColor: '#000000',
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: 170,
    width: Dimensions.get('window').width,
    justifyContent: 'center'
  },
  instructions: {
    marginBottom: 20,
  },
  instructionTitle: {
    marginTop: 27,
    marginBottom: 2,
    fontSize: 15,
    color: '#FFF',
    textAlign: 'left',
    fontWeight: '800',
    marginLeft: 40,
    marginRight: 40,
  },
  instructionSubTitle: {
    marginRight: 13,
    fontSize: 12,
    color: '#FFF',
    textAlign: 'left',
    fontWeight: '300',
    marginLeft: 30,
    marginLeft: 40,
    marginRight: 40,
  },

})