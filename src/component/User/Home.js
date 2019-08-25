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
  Body } from 'native-base';
import CardComponent from './CardComponenet';

export default class Home extends React.Component {


  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left><Icon name="camera" style={{ paddingLeft: 10 }}>
          </Icon></Left>
          <Body><Text>Instagram</Text></Body>
          <Right><Icon name="send" style={{ paddingRight: 10 }}>
          </Icon></Right>
        </Header>
        <Content>
          <View style={{height: 100}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:
            'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                <Text style={{fontWeight: 'bold'}}>Stories</Text>
                <View style={{flexDirection: 'row', 'alignItems': 'center'}}>
                  <Icon name="md-play" style={{fontSize: 14}}></Icon>
                  <Text style={{fontWeight: 'bold'}}>Watch All</Text>
                </View>
            </View>
            <View style={{flex: 3}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/bklogo.png')} />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});