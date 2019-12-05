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

import ListPanel from './../../component/utilities/ListPanel'
import SwiperProductThumb from './../../component/utilities/SwiperProductThumb'
import Swiper from './../../component/utilities/Swiper'
import homeData from './../../component/utilities/home'

export default class Feed extends React.Component {
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
        <ScrollView>
                    {this._renderSwiperList(homeData.fashions)}
                    {this._renderSwiperList(homeData.watches)}
                    {this._renderSwiperList(homeData.bags)}
                    {this._renderSwiperList(homeData.fashions)}
                    {this._renderSwiperList(homeData.watches)}
                    {this._renderSwiperList(homeData.bags)}
                </ScrollView>
        </Content>

      </Container>
    );
  }
  _renderSwiperList(data) {
    return (
        <ListPanel title={data.title} description={data.description} onPressSeeAll={() => this._pressSeeAllProducts({navBarTitle: data.title})}>
            <Swiper>
                {
                    data.items.map((item, idx) => {
                        return <SwiperProductThumb  key={idx} { ...item }/>
                    })
                }
            </Swiper>
        </ListPanel>
    )
}

_pressSeeAllProducts(){
    Actions.home();
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
      },
    header: {
        backgroundColor: 'green'
    },
    headerSub: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: 64,
        height: 28,
        resizeMode: 'center'
    },
    icoSearch: {
        color: 'blue',
        marginRight: 5
    },
    btnSearchHolder: {
        padding: 15,
        paddingTop: 0
    },
    btnSearch: {
        borderColor: '#01215B',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 5
    },
    btnSearchTitle: {
        color: '#cc6600',
        fontSize: 16
    },
    btnDeals: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5
    },
    icoDeals: {
        color: 'orange',
        marginRight: 10
    },
    section_title:{
        fontSize: 18,
        fontWeight: '600',
        padding: 20
    }
})