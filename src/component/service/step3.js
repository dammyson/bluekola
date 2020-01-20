import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export class step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        categoryText:''
    };
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ category: this.state.categoryText });
    next();
  };

  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ categoryText: text })}
          value={this.state.text}
          placeholder={"Category"}
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
