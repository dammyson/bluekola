import React, { Component } from 'react';
import { AsyncStorage, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { Icon, Container, Content, Header, Thumbnail, Left, Right, Body, Button } from 'native-base';
import CardComponenet from '../User/CardComponenet';
import styles from "./styles";
const URL = require("../../component/server");
import UserServiceBlock from '../User/UserServiceBlock'
import { Actions } from 'react-native-router-flux';
//import { Card, Icon,SocialIcon} from 'react-native-elements'
var images = [
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
    require('../../assets/bklogo.png'),
]

var { width, height } = Dimensions.get('window')
export default class Profile extends Component {

    componentDidMount() {

        AsyncStorage.getItem('auth').then((value) => this.setState({ 'auth': value.toString() }))
        AsyncStorage.getItem('auth').then((value) => {
            if (value == '') {

            } else {
                this.setState({ auth: value })
            }
            this.makeRemoteRequest();
        })


    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            auth: "",
            name: "",
        }
    }

    makeRemoteRequest = () => {
        const { auth } = this.state
        this.setState({ loading: true });
        fetch(URL.url + '/api/user', {
            method: 'GET', headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer ' + auth,
                'Content-Type': 'application/json',
            }
        })

            .then(res => res.json())
            .then(res => {
                console.warn(res);
                this.setState({ name: res.user.name })
            })
            .catch(error => {
                alert(error.message);
                this.setState({ loading: false })
            });
    };

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={image} />
                </View>
            )
        })

    }
    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.renderSectionOne()}
                </View>
            )
        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    {this.renderServices()}
                    <View style={{
                        margin: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#000',
                        borderStyle: 'dotted',
                        borderWidth: 1,
                        borderRadius: 1,
                        paddingBottom: 30,
                        paddingTop: 30
                    }} >
                      <Button   
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }} 
                    onPress={() => Actions.createservice()} transparent>
                      <Icon name="add" ></Icon>
                      <Text style={{ color: '#4d4d4d' }}>add a service</Text>
                        </Button>
                    </View>

                </View>
            )
        }
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header style={{ backgroundColor: '#fff' }}>
                    <Left>
                        <Button onPress={() => Actions.pop()} transparent>
                            <Icon name="ios-arrow-back" style={{ paddingLeft: 10, color: "#000" }} />
                        </Button>
                    </Left>
                    <Body><Text>Bluekola</Text></Body>

                    <Right>
                        <Icon name="add" style={{ paddingRight: 10 }}> </Icon>
                    </Right>
                </Header>
                <ImageBackground
                    source={require("../../assets/bg-transparent.png")}
                    style={styles.headercontainer}
                >
                    <View style={styles.profileInfoContainer}>
                        <View style={{ alignSelf: "center" }}>
                            <Thumbnail
                                source={require("../../assets/sanket.png")}
                                style={styles.profilePic}
                            />
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileUser}>{this.state.name}</Text>
                            <Text note style={styles.profileUserInfo}>
                                Plumber
                                </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>


                        <Button transparent
                            onPress={() => this.segmentClicked(0)}
                            active={this.state.activeIndex == 0}
                        >
                            <Icon name="ios-grid" style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]} />
                        </Button>
                        <Button transparent
                            onPress={() => this.segmentClicked(1)}
                            active={this.state.activeIndex == 1}
                        >
                            <Icon name="ios-menu" style={[this.state.activeIndex == 1 ? {} : { color: 'grey' }]} />
                        </Button>


                    </View>
                </ImageBackground>
                <Content style={styles.contentcontainer}>
                    <View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        );
    }
    renderServices() {
        let cat = [];
        for (var i = 0; i < categories.length; i++) {
            cat.push(
                <UserServiceBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} description={categories[i].description} />
            );
        }
        return cat;
    }
}



var categories = [
    {
        id: 1,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help initiative by workers. Our cooperative family feeding product caters to the consumer goods needs of cooperators leveraging the collective strength of the cooperative movement to guarantee credit for food products'
    },
    {
        id: 2,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help initiative by workers. Our cooperative family feeding product caters to the consumer goods needs of cooperators leveraging the collective strength of the cooperative movement to guarantee credit for food products'
    }
];


