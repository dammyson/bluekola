import React, { Component } from "react";
import { Image, ActivityIndicator, AsyncStorage, Alert, ImageBackground, Platform, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Left,
  Right,
  Toast
} from "native-base";
import { Field,reduxForm } from 'redux-form';
import styles from "./style";
const URL = require("../../component/server");


const bg = require('../../assets/userbackground.png');
const logo = require('../../assets/bklogoo.png');

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength6 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

declare type Any = any;
 class Login extends Component {


  componentDidMount() { 
    AsyncStorage.getItem('email').then((value) => {
      if(value.toString()==''){
        this.setState({ 'demail': ""})
      }else{

        this.setState({ 'demail': value.toString()})
      }
    
    })


  }

  constructor(props) 
  {
      super(props);
      this.emailRef = React.createRef();
      this.state = {
        loading: false,
        email: "", 
        password: "",
        demail: "", 
        token: "", 
        isChecked:false,

        data: [
          {
              label: 'Remember Me',
              size: 22,
              color: '#01215B',
              
          }
      ],

                  }

  }

    textInput: Any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={input.name === "email" ? "mail" : "unlock"}
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            autoCapitalize = "none"
            style={styles.input}
            placeholder={input.name === "email" ? "Email" : "Password"}
            secureTextEntry={input.name === "password" ? true : false}
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </Item>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  checkLogin(){
   
    let mail = "";
          const {email, demail, isChecked, token, password} = this.state

          console.warn(password);
           if(email == "" ){
           
           if(demail == "" ){
             Alert.alert('Validation failed', 'Email field cannot be empty', [{text: 'Okay'}])
             return
           }else{
             mail = demail;
           }
          
         }else{
           mail = email;
         }
 
           if(password == "" ){
             Alert.alert('Validation failed', 'Password field cannot be empty', [{text: 'Okay'}])
             return
           }
         this.setState({ loading: true})
         fetch(URL.url+'/api/login', { method: 'POST',  headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         }, body: JSON.stringify({
           email: mail,
           mobile_token: token,
           password: password,
         }),  })
         .then(res => res.json())
         .then(res => {
           if(res.status){
           AsyncStorage.setItem('auth', res.token.toString());
           AsyncStorage.setItem('role', res.Role);
           AsyncStorage.setItem('email', email);
           if(isChecked){
             AsyncStorage.setItem('rem', "yes");
           }else{
             AsyncStorage.setItem('rem', "no");
           }
           this.setState({ loading: false})
 
               if(res.Role=="customer"){
                 this.props.navigation.navigate('UserLanding')
               }else{
                 this.props.navigation.navigate('AgentLanding')
               }
 
          
 
           }else{
 
         Alert.alert('Login failed', "Check your email and password", [{text: 'Okay'}])
         this.setState({ loading: false})
           }
         }).catch((error)=>{
           console.log("Api call error");
           alert(error.message);
           this.setState({ loading: false})
        }); 
    }

  render() {
    const navigation = this.props.navigation;
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
          <Text>Login in</Text>
        </View>
      );
    }
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.container}>
              <View style={styles.form}>
               <Field
                  name="email"
                  component={this.renderInput}
                  type="email"
                  value={this.state.email}
                  onChangeText = {text => this.setState({email: text})}
                  validate={[email, required]}
                />
                <Field
                  name="password"
                  component={this.renderInput}
                  type="password"
                  value={this.state.password}
                  onChangeText = {text =>  console.warn(text)}
                  validate={[alphaNumeric, minLength6, maxLength15, required]}
                />
             
                <Button
                  rounded
                  primary
                  block
                  large
                  style={styles.loginBtn}
                  onPress ={() => this.checkLogin()} 
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? { fontSize: 16, textAlign: "center", top: -5 }
                        : { fontSize: 16, fontWeight: "900" }
                    }
                  >
                   Login
                  </Text>
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-start" }}
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <Text style={styles.helpBtns}>Create Account</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-end" }}
                      onPress={() => navigation.navigate("ForgotPassword")}
                    >
                      <Text style={styles.helpBtns}>Forgot Password</Text>
                    </Button>
                  </Right>
                </View>
                <View style={{ flex: 1, alignSelf: "flex-end" }}>
                  <Button
                    light
                    small
                    transparent
                    style={styles.skipBtn}
                    onPress={() => navigation.navigate("Landing")}
                  >
                    <Text
                      style={
                        (
                          [styles.helpBtns],
                          { top: Platform.OS === "ios" ? null : 0 }
                        )
                      }
                    >
                      Skip
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const LoginForm = reduxForm({
    form: "loginw",
    enableReinitialize: true,
  })(Login);
export default LoginForm;