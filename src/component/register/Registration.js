import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Toast,
  Left,
  Right,
  Footer
} from "native-base";
import { Field, reduxForm } from "redux-form";


import styles from "./Style";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const minLength5 = minLength(5);
const email = value =>
//regEx
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: ''
        };
    }

  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={
              input.name === "username"
                ? "person"
                : input.name === "email" ? "mail" : input.name === "phone" ? "call" : "unlock"
            }
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            style={styles.input}
            placeholder={
              input.name === "username"
                ? "Username"
                : input.name === "email" ? "Email" :input.name === "phone" ? "Phone" : "Password"
            }
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
          : <Text style={styles.formErrorText2}>> error here</Text>}
      </View>
    );
  }
  signUp() {

    

    }

  render() {
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
        />
        <ImageBackground
          source={require("../../assets/userbackground.png")}
          style={styles.background}
        >
          <Content padder>
            <Text style={styles.signupHeader}>CREATE ACCOUNT</Text>
            <View style={styles.signupContainer}>
              <Field
                name="username"
                component={this.renderInput}
                value={this.state.username}
                validate={[required, alphaNumeric, minLength5]}
                onChangeText={(username) => this.setState({username})}
              />

              <Field
                name="email"
                component={this.renderInput}
                value={this.state.email}
                validate={[email, required]}
                onChangeText={(email) => this.setState({email})}
              />
               <Field
                name="phone"
                component={this.renderInput}
                value={this.state.email}
                validate={[email, required]}
                onChangeText={(email) => this.setState({email})}
              />
              <Field
                name="password"
                component={this.renderInput}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                validate={[alphaNumeric, minLength8, maxLength15, required]}
              />

              <Button
                rounded
                bordered
                block
                onPress={() => this.signUp()}
                style={styles.signupBtn}
              >
                <Text style={{ color: "#FFF" }}>Continue</Text>
              </Button>
            </View>
            
          </Content>
          <Footer 
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: 'transparent'
            }}
          >
            <Left style={{ flex: 2 }}>
              <Button small transparent>
                <Text style={styles.helpBtns}>Terms & Conditions</Text>
              </Button>
            </Left>
            <Right style={{ flex: 1 }}>
              <Button
                small
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={styles.helpBtns}>SignIn</Text>
              </Button>
            </Right>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const SignUp = reduxForm({
  form: "signup"
})(Registration);
export default SignUp;