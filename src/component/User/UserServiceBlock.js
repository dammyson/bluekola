import React, { Component } from "react";

import { Icon } from 'react-native-elements'
import { View, StyleSheet, Text, Image } from "react-native";

export default class UserService extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 354,
    height: 216
  };
  render() {
    return (
      <View style={styles.chatListItem}>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.textcontainer}>

          <Text style={styles.text}>
            {"Jon Snow, 18"}
          </Text>

          <Text style={styles.text2} numberOfLines={3}>
                Hi there! Roses are red, violets are blue, I'm unoriginal, how's tonight--dinner for two?
          </Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  chatListItem: {
    height: 120,
    borderRadius: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
     borderTopColor: '#eae5e5'
    
  },
  imagecontainer: {

  },
  textcontainer: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(23,25,65,1)"
  },
  icon: {
    bottom: 16,
    right: 12,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Catamaran-Thin",
    color: "rgba(23,25,65,1)"
  },
  image: {
    margin: 5,
    width: 68,
    height: 68,
    borderWidth: 1.5,
    borderColor: '#eae5e5',
    borderRadius: 34,
  }
});