// React native and others libraries imports
import React, { Component } from 'react';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';



export default class Navbar extends Component {
  render() {
    return(
      <Header
        style={{backgroundColor: this.props.bg, height:60}}
        androidStatusBarColor= "transparent"
        noShadow={true}
        >
        {this.props.left ? this.props.left : <Left style={{}} />}
        <Body style={styles.body}>
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        {this.props.right ? this.props.right : <Right style={{flex: 1}} />}
      </Header>
    );
  }
}

const styles={
  body: {
    flex:3,
    justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: '#333333',
    fontFamily: "Poppins-SemiBold",
  }
};
