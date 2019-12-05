import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
Button } from 'native-base';
import CardComponent from './CardComponenet';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor})=>(
        <Icon name="ios-home" style={{color: tintColor}}/>
    )
}

  render() {
    return (  
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#fff'}}>
          <Left><Button transparent>
          <Icon name='ios-menu' style={{color: "#000"}} />
        </Button>
        </Left>
          <Body><Text>Bluekola</Text></Body>
          <Right>
          <Button    onPress={()=> Actions.profile()} transparent>
          <Icon name='ios-person' style={{color: "#000"}} />
        </Button>
          </Right>
        </Header>
        <Content>
          
          <CardComponent imageSource="1" likes="101"/>
         
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});