import React, { Component } from "react";
import { View } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 }
];

export default class CreateService extends Component {
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
      <View style={{ flex: 1, backgroundColor: "#1dd1a1" }}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          animate={true}
          onBack={this.onBack}
          onNext={this.onNext}
        />
      </View>
    );
  }
}