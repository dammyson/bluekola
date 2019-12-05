import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export class step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email:''
    };
  }

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    console.log("TCL: step2 -> componentDidMount -> state", state);
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ email: this.state.email });
    next();
  };

  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.text}
          placeholder={"Email"}
          placeholderTextColor="#fff"
        />
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
           
           

          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextStep} style={styles.btnStyle}>
            

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step2;