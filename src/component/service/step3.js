import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export class step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        city:''
    };
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ city: this.state.city });
    next();
  };

  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ city: text })}
          value={this.state.text}
          placeholder={"City"}
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

export default step3;