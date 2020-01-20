'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    View, Dimensions, StyleSheet,ImageBackground, Image, Text, TouchableOpacity
} from 'react-native'


const { width } = Dimensions.get('window')
const prdWidth = (width - 2) / 2

class GridProductThumb extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>



             <ImageBackground
                opacity={0.5}
                style={{ alignItems: 'flex-start', justifyContent:'flex-end', flex:1, borderRadius: 12 }}
                source={{ uri: this.props.imageUri }}
                imageStyle={{ backgroundColor: 'black' }}
            >


                <View style={styles.details} >
                    <Text style={styles.title}> { this.props.name }</Text>
                    <Text style={styles.catch}> { this.props.name } </Text>
                   
                </View>


            </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: prdWidth,
        height: prdWidth,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    productImage: {
        width: prdWidth,
        height: prdWidth,
        borderWidth: 0.5,
        borderColor: 'blue'
    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: "red"
    },
    promotionHolder: {
        flexDirection: 'row'
    },
    details: {
        marginBottom: 15,
    },
    catch: {
        marginRight: 13,
        marginLeft: 13,
        fontSize: 13,
        color: '#ffffff',
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold'
    },
    title: {
        marginRight: 13,
        marginLeft: 13,
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'left',
        fontWeight: '600',
        fontFamily: 'Montserrat-Bold'
    },
})

module.exports = GridProductThumb
