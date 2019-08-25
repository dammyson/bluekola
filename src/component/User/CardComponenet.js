import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Card, CardItem,Thumbnail,Body,Left,Right,Button, Icon,} from 'native-base';

export default class CardComponenet  extends React.Component {
  render() {
      const images= {
          "1": require('../../assets/bklogo.png'),
          "2": require('../../assets/bklogo.png'),
          "3": require('../../assets/bklogo.png')
      }
    return (
        <Card>
            <CardItem>
                <Left>
                   <Thumbnail source={require('../../assets/bklogo.png')} />
                    <Body>
                        <Text>Rishabh_Yadav</Text>
                        <Text note>Jan 17 1996</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={images [this.props.imagesSource]} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{height: 45}}>
                <Button transparent>
                    <Icon name="heart" style={{color: 'black'}}/>
                </Button>
                <Button transparent>
                    <Icon name="chatbubbles" style={{color: 'black'}}/>
                </Button>
                <Button transparent>
                    <Icon name="send" style={{color: 'black'}}/>
                </Button>
            </CardItem>
            <CardItem style={{height: 20}}>
                <Text style={{paddingLeft: 13}}>{this.props.likes}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text style={{paddingLeft: 13}}>
                        <Text style={{fontWeight: "900"}}> eideticbrain </Text>
                        Prashant Ab tho tu Kush hai na 
                    </Text>
                </Body>
            </CardItem>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});