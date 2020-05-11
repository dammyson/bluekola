import React from 'react';
import { StyleSheet, Dimensions, Text, ScrollView, TextInput, View, TouchableOpacity } from 'react-native';
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
import CardComponent from '../User/CardComponenet';
import { Actions } from 'react-native-router-flux';
import { Icon, Avatar } from 'react-native-elements';
import ListPanel from '../utilities/ListPanel'
import GridProductThumb from '../utilities/GridProductThumb'
import Grid from '../utilities/Grid'
import homeData from '../utilities/home'
import generate from '@babel/generator';



export default class Feed extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="search" type='font-awesome' color={tintColor} />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            searchMode: false,
            searchText: ''
        };
    }

    render() {
        return (
                    <View style={styles.container}>

                        <View style={styles.header}>
                            <View style={styles.item}>
                                <TextInput
                                    placeholder="type here to search"
                                    placeholderTextColor='#000'
                                    returnKeyType="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.menu}
                                    onChangeText={text => this.setState({ searchText: text })}
                                />



                                <TouchableOpacity onPress={()=> this.setState({ searchMode: true })} style={styles.square}>

                                    <Icon
                                        size={18}
                                        active
                                        name="search"
                                        type='font-awesome'
                                        color='#fff'

                                    />
                                </TouchableOpacity>

                            </View>
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
                        {this.state.searchMode  ?
                            <ScrollView>
                                {this.renderResuts(homeData.grid_fashion)}
                            </ScrollView>
                            :
                            <ScrollView>
                                {this._renderGridList(homeData.grid_fashion)}
                            </ScrollView>}

                    </View>
           
        );
    }
    _renderGridList(data) {
        return (
            <ListPanel>
                <Grid>
                    {
                        data.items.map((item, idx) => {
                            return <GridProductThumb onPress={() => this._pressProduct(item.id)} key={idx} {...item} />
                        })
                    }
                </Grid>
            </ListPanel>
        )
    }

    _pressSeeAllProducts() {
        Actions.home();
    }

    renderResuts(data) {
        let cat = [];
        for (var i = 0; i < data.items.length; i++) {
            cat.push(
                <View style={styles.resultBox}>

                    <View style={styles.loacationText}>

                        <View style={styles.resultDescription}>
                            <View style={styles.resultImage}>
                                <Avatar
                                    rounded
                                    size="medium"
                                    source={{
                                        uri:
                                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                    }}
                                />
                            </View>
                            <View style={styles.resultTextDescription}>
                                <Text style={{ color: '#000', fontWeight: '700', fontSize: 14, marginLeft: 10 }}>Sweet Fire</Text>
                                <Text style={{ color: '#000', fontWeight: '200', fontSize: 12, marginLeft: 10 }}>{data.items[i].description}</Text>
                            </View>

                        </View>
                    </View>



                    <View style={styles.segmentConatainer}>
                        <TouchableOpacity style={styles.circle}>

                            <Icon
                                size={18}
                                active
                                name="phone"
                                type='font-awesome'
                                color='#fff'

                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.circle}>

                            <Icon
                                size={16}
                                active
                                name="message1"
                                type='antdesign'
                                color='#fff'

                            />
                        </TouchableOpacity>
                    </View>


                </View >
            );
        }
        return cat;
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: '#F5F5F5'
    },
    header: {
        paddingTop: 30,
        backgroundColor: '#fff',
        paddingBottom: 10

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
        height: 40,
        marginRight: 13,
        marginLeft: 13,
        fontSize: 13,
        fontWeight: '300',
        color: '#000',
        textAlign: 'left',
        height: 35,
        marginTop: 15,
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

    resultBox: {
        marginRight: 13,
        marginLeft: 13,
        borderRadius: 20,
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row'
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
    iconText: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
    },
    circle: {
        backgroundColor: '#394fa1',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 25,
        marginLeft: 5,
        marginRight: 5,


    },
    segmentConatainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    square: {
        backgroundColor: '#394fa1',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 5,
        marginRight: 5,


    },

})







