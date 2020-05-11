import React from 'react';
import { StyleSheet, AsyncStorage, Dimensions, Text, ImageBackground, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import {
    Container,
    Content,
    Thumbnail,
    Header,
    Left,
    Right,
    Body,
    Button
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import { Icon, Avatar } from 'react-native-elements';
import {
    SkypeIndicator,
} from 'react-native-indicators';
const URL = require("../../component/server");
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';



export default class Feed extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (

            <Icon name="home" type='font-awesome' color={tintColor} />

        )
    }

    constructor(props) {
        super(props);
        this.onEventPress = this.onEventPress.bind(this)

        this.state = {
            loading: false,
            data: [],
            auth: '',
            dataone: [],
            datatwo: [],
            slider1ActiveSlide: 0,
            selected: null
        };
    }




    componentDidMount() {
        AsyncStorage.getItem('auth').then((value) => {
            if (value == '') {

            } else {
                this.setState({ auth: value })
            }
            this.loadServices();
        })


        this.setState({
            dataone: regions_list,
        })
    }
    onEventPress(data) {
        this.setState({ selected: data })
    }

    loadServices = () => {
        const { auth } = this.state
        console.warn(auth);
        this.setState({ loading: true });
        fetch(URL.url + '/api/services', {
            method: 'GET', headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer ' + auth,
                'Content-Type': 'application/json',
            }
        })

            .then(res => res.json())
            .then(res => {
                console.warn(res)
                if (!res.data) {
                    Alert.alert('Operation failed', res.message, [{ text: 'Okay' }])
                }

                this.setState({
                    data: res.data,
                    loading: false,
                    status: res.status,

                });
                this.arrayholder = res.data;
            })
            .catch(error => {
                alert(error.message);
                this.setState({ loading: false })
            });
    };
    render() {

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
            <View style={styles.container}>
                <View style={{ height: 25 }}></View>
                <View style={styles.header}>

                    <View style={{ flexDirection: 'row' , marginBottom: 5}}>
                        <Text style={{ color: '#000', flex: 1, fontWeight: '700', fontSize: 12, marginLeft: 10, marginTop: 10 }}>categories</Text>

                        <TouchableOpacity style={styles.notificationBox}>

                            <Icon
                                size={16}
                                active
                                name="ios-notifications"
                                type='ionicon'
                                color='#fff'

                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {this.renderCategory()}

                    </ScrollView>



                </View>


                <View style={styles.loacationBox}>

                    <View style={styles.loacationText}>
                        <Text style={{ color: '#000', fontWeight: '700', fontSize: 12, marginLeft: 10 }}>Location</Text>
                        <Text style={{ color: '#000', fontWeight: '200', fontSize: 10, marginLeft: 10 }}>Victoria Island, Lagos</Text>
                    </View>
                    <View style={styles.locationButton}>
                        <TouchableOpacity style={styles.buttonContainer} block iconLeft>
                            <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>Change</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                <View>

                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.data}
                        renderItem={this._renderItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width / 1.3}
                        hasParallaxImages={true}
                        layout={'default'}


                    />

                </View>


            </View>

        );
    }


    _pressSeeAllProducts() {
        Actions.home();
    }
    _renderItem({ item, index }, parallaxProps) {
        return (
            <View style={{ width: Dimensions.get('window').width - 100, height: Dimensions.get('window').height / 1.8, }}>

                <ImageBackground
                    style={{ flex: 1, borderRadius: 12, marginTop: 0 }}
                    source={require('../../assets/sanket.png')}
                    imageStyle={{ overflow: 'hidden', position: "absolute", borderRadius: 20, }}
                >
                    <View style={styles.shareConatainer}>
                        <TouchableOpacity style={styles.circle}>

                            <Icon
                                size={18}
                                active
                                name="share-alt"
                                type='font-awesome'
                                color='#394fa1'

                            />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>

                        </View>
                        <TouchableOpacity style={styles.circle}>

                            <Icon
                                size={16}
                                active
                                name="star"
                                type='antdesign'
                                color='#394fa1'

                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>

                    </View>

                    <View style={[styles.details,]} >

                        <Text style={{ color: '#FFF', fontWeight: '900', fontSize: 20, margin: 10, marginLeft: 20, }}>{item.short_brief}</Text>

                    </View>

                    <View style={{ backgroundColor: '#fff', paddingTop: 1, paddingBottom: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>


                        <View style={styles.resultActiom}>
                            <View style={{ flex: 1, marginLeft: 10, }}>
                                <Text style={{ color: '#000', fontWeight: '700', fontSize: 16, marginLeft: 10 }}>{item.short_brief} </Text>
                            </View>

                        </View>


                        <View style={{ marginLeft: 20, marginBottom: 10 }}>
                            <Text style={{ color: '#000', textAlign: 'left', fontWeight: '200', fontSize: 12, }}> {item.description}</Text>
                        </View>

                    </View>


                </ImageBackground>


                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => this.processRegistration()} style={styles.actionButtonContainer} block iconLeft>
                        <Icon
                            size={18}
                            active
                            name="phone"
                            type='font-awesome'
                            color='#9dc5fe'

                        />
                        <Text style={{ color: '#fdfdfd', fontWeight: '700', marginLeft: 10 }}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.processRegistration()} style={styles.actionButtonContainer} block iconLeft>
                        <Icon
                            size={18}
                            active
                            name="commenting"
                            type='font-awesome'
                            color='#9dc5fe'

                        />
                        <Text style={{ color: '#fdfdfd', fontWeight: '700', marginLeft: 10 }}>Message</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }

    renderCategory() {

        let cat = [];
        for (var i = 0; i < categories.length; i++) {
            cat.push(

                <View style={{ alignItems: 'center' }}>

                    <Avatar
                        rounded
                        size="medium"
                        overlayContainerStyle={{ backgroundColor: 'white', borderColor: "#749AD1", borderWidth: 2 }}
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text style={{ color: '#000', fontWeight: '200', fontSize: 12, marginLeft: 15 }}>mamagement</Text>

                </View>
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
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 2,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 1,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 2,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 1,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 2,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 1,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    },
    {
        id: 2,
        title: 'Cooperative Family Feeding(CFF)',
        image: 'https://www.ita-obe.com/images/direct-customer.png',
        description: 'The cooperative movement began in Europe in the 19th century, primarily in Britain and France as a self-help    '
    }
];

const regions_list =
    [
        { id: 0, name: 'Select Country' },
        { id: 11, name: 'Nigeria' },
        { id: 12, name: 'United Kindomjjjjjjj' },
        { id: 0, name: 'Select Country' },
        { id: 11, name: 'Nigeria' },
        { id: 12, name: 'United Kindomjjjjjjj' },
        { id: 13, name: 'United States jjjjj' }
    ]
    ;
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#fff',
        paddingBottom: 10,


    },
    item: {
        flexDirection: 'row',
        margin: 5,
        borderColor: '#cecece',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingRight: 15
    },
    menu: {
        flex: 1,
        marginRight: 13,
        marginLeft: 13,
        fontSize: 13,
        fontWeight: '300',
        color: '#000',
        textAlign: 'left',
    },
    loacationBox: {

        marginRight: 13,
        marginLeft: 13,
        borderRadius: 20,
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10
    },
    loacationText: {
        flex: 1,
    },
    locationButton: {

    },
    buttonContainer: {
        backgroundColor: "#749AD1",
        marginLeft: 3,
        marginRight: 10,
        borderRadius: 25,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 20,
        paddingLeft: 20
    },
    segmentConatainer: {
        flexDirection: 'row',
    },

    shareConatainer: {
        flexDirection: 'row',
        margin: 10
    }
    ,
    resultBox: {
        flex: 1,
        marginRight: 13,
        marginLeft: 13,
        borderRadius: 20,
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 10
    },
    resultDescription: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
    },
    resultImage: {

    },
    resultTextDescription: {
        flex: 1
    },
    resultActiom: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5,
    },
    iconText: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
    },
    circle: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 25,
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#749AD1',
        borderWidth: 1
    },
    buttonsContainer: {
        flexDirection: 'row',
    },

    actionButtonContainer: {
        marginTop: 12,
        backgroundColor: "#17153d",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationBox: {
        backgroundColor: '#749AD1',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 25,
        marginLeft: 15,
        marginRight: 15,
    },

})
