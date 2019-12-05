import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";


export class step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  checkReg() {
      console.warn(this.props.getState())
  };
  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder={"Password"}
          placeholderTextColor="#fff"
        />
       
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
           


          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.next} style={styles.btnStyle}>
           
          </TouchableOpacity>

            <TouchableOpacity onPress={() => this.checkReg()} style={styles.btnStyle}>
           
           </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step4;