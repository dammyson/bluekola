import React, { Component } from "react";
import { Image,Dimensions, View, TouchableOpacity, TextInput, StyleSheet,ImageBackground } from "react-native";
const bg = require('../../assets/userbackground.jpg');
const deviceHeight = Dimensions.get("window").height;

import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  Left,
  Right,
  Toast
} from "native-base";
export default class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        first: '',
      
    };
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: this.state.first});

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    return (
      <Container>
      <ImageBackground source={bg} style={styles.background}>

      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ first: text })}
          value={this.state.text}
          placeholder={"First Name"}
          placeholderTextColor="#fff"
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.nextStep} style={styles.btnStyle}>
           

          </TouchableOpacity>
        </View>
      </View>

      </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "6%"
    },
    step1: {
      // backgroundColor: "#1dd1a1"
      flex: 1
    },
    background: {
      flex: 1,
      width: null,
      height: deviceHeight,
      backgroundColor: "rgba(0,0,0,0.1)"
    },
    input: {
      width: "80%",
      borderColor: "#fff",
      borderWidth: 2,
      borderRadius: 6,
      paddingHorizontal: 8,
      marginTop: "6%"
    },
    btnStyle: {
      borderColor: "#fff",
      borderWidth: 2,
      borderRadius: 100,
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center"
    },
    btnImage: {
      width: "40%",
      height: "40%"
    },
    backBtn: {
      transform: [{ rotate: "180deg" }]
    },
    marginAround: {
      width: "40%",
      justifyContent: "space-between"
    }
  });