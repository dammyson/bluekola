import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Dimensions, ImageBackground } from "react-native";
import { Container, Content, Text, Button, Left, Right, Body, Title, List, Item, Thumbnail, Grid, Col } from 'native-base';
import { Card, Icon, SocialIcon } from 'react-native-elements'


import Navbar from '../utilities/Navbar';
import color from '../utilities/color';
const URL = require("../../component/server");

import {
    SkypeIndicator,
} from 'react-native-indicators';



export default class ServieDetails extends Component {

    constructor(props) {
        super(props);


        this.state = {
            loading: true,
            details: {},
            auth: '',
            dataone: [],
            id: 1,
            selected: null
        };
    }




    componentDidMount() {
        AsyncStorage.getItem('auth').then((value) => {
            if (value == '') {
            } else {
                this.setState({ auth: value })
            }
            this.processGetEvent()
        })

        this.setState({
            id: this.props.navigation.getParam("id", "defaultValue")
          })
    }


    processGetEvent() {
        const { auth, id, } = this.state

        this.setState({ loading: true })
        fetch(URL.url + '/api/service/'+ id, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + auth,
            },
        })
            .then(res => res.json())
            .then(res => {
                console.warn(res);
                if (res.status) {
                    this.setState({
                        loading: false,
                        details: res.data.service,
                        dataone:res.data.sub_sections
                    })
                } else {
                    Alert.alert('Action failed', res.message, [{ text: 'Okay' }])
                    this.setState({ loading: false })
                }
            }).catch((error) => {
                this.setState({ loading: false })
                console.warn(error);
                alert(error.message);
            });


    }




    render() {
        const { details, } = this.state


        var left = (
            <Left style={{ flex: 1 }}>
                <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                    <Icon
                        active
                        name="arrowleft"
                        type='antdesign'
                        color={color.black}
                    />
                </Button>
            </Left>
        );

        var right = (
            <Right style={{ flex: 1, flexDirection: 'row' }}>

            </Right>
        );


        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <View style={{ height: 90, alignItems: 'center', justifyContent: 'center', }}>
                        <SkypeIndicator count={5} color='#1A4093' />
                        <Text style={{ fontSize: 13, fontWeight: '500', flex: 1, color: '#1A4093' }}>Please wait...</Text>
                    </View>

                </View>
            );
        }

        return (
            <Container style={{ backgroundColor: '#f5f5f5' }}>
                <Navbar left={left} right={right} title={details.short_brief} bg='#fff' />
                <Content>
                    <View style={styles.backgroundImage}>
                        <View style={{ flex: 1 }}>


                            <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} style={styles.image}>
                               
                            </ImageBackground>

                            <View style={styles.descriptionContainer}>
                                <Text style={styles.title}>Description </Text>
                                <Text style={styles.description}> {details.description} </Text>

                            </View>
                            {this.state.dataone.length  ?


                           
                            <View style={styles.subSectionHeader} >
                                <View style={{ flex: 1, justifyContent: 'center', }}>
                                    <Text style={styles.blueTitle}>Sub Sections  </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={styles.blueTitle}>Price Range </Text>

                                </View>
                            </View>


                            :null
                            }

                            {this.renderSections(this.state.dataone)}


                        </View>
                    </View>
                </Content>
            </Container>

        );
    }
    renderSections(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            cat.push(
                <View style={styles.subSectionList} >
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.suSectionName}>{data[i].name} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={styles.price}>N{data[i].min_price} - </Text>
                        <Text style={styles.price}>N{data[i].max_price}</Text>
                    </View>
                </View>
            );
        }
        return cat;
    }
}

const styles = StyleSheet.create({
    welcome: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3.1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    descriptionContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3.1,
        backgroundColor: "#2E2A79",
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 20,
        paddingBottom: 20

    },
    title: {
        color: color.white,
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
    },
    description: {
        color: color.white,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        marginTop: 10,
    },
    subSectionList: {
        height: 45,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        borderRadius: 25,
        paddingRight: 10,
        paddingRight: 25,
        paddingLeft: 25,


    },
    suSectionName: {
        color: "#333333",
        fontFamily: "Poppins-Medium",
        fontSize: 13,

    },
    price: {
        color: "#394FA1",
        fontFamily: "Poppins-Medium",
        fontSize: 12,

    },
    blueTitle: {
        color: '#394FA1',
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
      },
      subSectionHeader: {
        height: 45,
        flexDirection: 'row',
        backgroundColor:'#fff',
        marginBottom: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        paddingRight: 10,
        paddingRight: 25,
        paddingLeft: 25,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 4,
        elevation: 4,


    },
   


});