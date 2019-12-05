import React, { Component } from "react";
import { Image, ActivityIndicator, AsyncStorage, Alert, ImageBackground, Platform, StatusBar  } from "react-native";
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
import { Field, reduxForm } from "redux-form";
import styles from "./Style";
const bg = require('../../assets/userbackground.jpg');
const logo = require('../../assets/bklogoo.png');
import { Actions } from 'react-native-router-flux';
export default  class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon active name="mail" style={{ color: "#fff" }} />
          <Input
            placeholderTextColor="#FFF"
            autoCapitalize = "none"
            style={styles.input}
            placeholder="Email"
            {...input}
            ref={c => (this.textInput = c)}
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

  forgotPassword() {
    if (this.props.valid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: "Enter Valid Email",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
            <Text style={styles.signupHeader}>Change password</Text>
            </View>
            <View style={styles.container}>

              <View style={styles.form}>

                <Item rounded style={styles.inputGrp}>
                  <Icon
                    active
                    name={"mail"}
                    style={{ color: "#fff" }}
                  />
                  <Input
                    ref={c => (this.textInput = c)}
                    placeholderTextColor="#FFF"
                    defaultValue={this.state.demail}
                    autoCapitalize="none"
                    style={styles.input}
                    placeholder={"Email"}
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({ email: text })}
                  />
                </Item>
                <Button
                 rounded
                 bordered
                 block
                  style={styles.loginBtn}
                  onPress={() => this.login()}
                >
                  <Text style={{ color: "#FFF" }}>Continue</Text>
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-start" }}
                      onPress={() => Actions.reg()}
                    >
                      <Text style={styles.helpBtns}>Create Account</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-end" }}
                      onPress={() => Actions.forgetpassword()}
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
