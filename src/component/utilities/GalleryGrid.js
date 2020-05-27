'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    View, Dimensions, StyleSheet,ImageBackground, Image, Text, TouchableOpacity
} from 'react-native'


const { width } = Dimensions.get('window')
const prdWidth = (width - 2) / 2

class GalleryGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>



             <ImageBackground
                opacity={1}
                style={{ alignItems: 'flex-start', justifyContent:'flex-end', flex:1, borderRadius: 12 }}
                source={{ uri: this.props.imageUri }}
                imageStyle={{ backgroundColor: 'black' }}
            >


                <View style={styles.details} >
                  
                   
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
        fontFamily: 'Poppins-Bold'
    },
    title: {
        marginRight: 13,
        marginLeft: 13,
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'left',
        fontWeight: '600',
        fontFamily: 'Poppins-Bold'
    },
})

module.exports = GalleryGrid
