import React, { Component } from "react";
import { View } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";

import Step1 from "./step1";
import Step2 from "./step2";



const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },

];

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onNext = () => {
    console.log("Next");
  };
  onBack = () => {
    console.log("Back");
  };

  finish = state => {
    console.log("TCL: App -> state", state);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
        />
      </View>
    );
  }
}