import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export class step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        descriptionText:''
    };
  }

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    console.log("TCL: step2 -> componentDidMount -> state", state);
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ description: this.state.descriptionText });
    next();
  };

  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ descriptionText: text })}
          value={this.state.text}
          placeholder={"Description"}
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
